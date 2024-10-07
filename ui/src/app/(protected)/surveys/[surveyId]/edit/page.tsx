'use client';
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { TagsForm, QuestionsForm } from "@/components/shared/form";

import { SurveyAssociatedTag, SurveyFormQuestion, SurveyTag, SurveyType } from "@/hooks/api/types";
import { useGetSurveyById, useGetSurveyQuestions, useGetSurveyAssociatedTags, usePutSurvey, usePutSurveyAssociatedTags, usePutSurveyQuestions } from "@/hooks/api/surveys";
import { useGetSurveyQuestionTypes, useGetSurveyTypes, useGetSurveyTags } from "@/hooks/api/types/index";

const surveyEditFormSchema = z.object({
  summary: z.string(),
  type: z.string().min(1),
  tags: z.array(z.object(
    {
      id: z.number(),
      description: z.string(),
    }
  )),
  questions: z.array(z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    tooltip: z.string(),
    sequence: z.number(),
    survey_question_type_id: z.string(),
  })),
});

export default function SurveyEdit() {
  const params = useParams();
  const surveyId = Array.isArray(params.surveyId) ? params.surveyId[0] : params.surveyId;

  const survey = useGetSurveyById(surveyId);
  const surveyQuestions = useGetSurveyQuestions(surveyId);
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();
  const associatedTags = useGetSurveyAssociatedTags(surveyId);

  const { mutateAsync: update, isError: updateError } = usePutSurvey();
  const { mutateAsync: updateAssociatedTags, isError: updateAssociatedTagsError } = usePutSurveyAssociatedTags();
  const { mutateAsync: updateQuestions, isError: updateQuestionsError } = usePutSurveyQuestions();

  const isPending = survey.isPending || surveyQuestions.isPending || questionTypes.isPending || types.isPending || surveyTags.isPending || associatedTags.isPending;
  const isFetching = survey.isFetching || surveyQuestions.isFetching || questionTypes.isFetching || types.isFetching || surveyTags.isFetching || associatedTags.isFetching;
  const error = survey.error?.message || surveyQuestions.error?.message || questionTypes.error?.message || types.error?.message || surveyTags.error?.message || associatedTags.error?.message || updateError || updateAssociatedTagsError || updateQuestionsError;

  const surveyEditForm = useForm<z.infer<typeof surveyEditFormSchema>>({
    resolver: zodResolver(surveyEditFormSchema),
    defaultValues: {
      summary: '',
      type: '',
      tags: [],
      questions: [],
    },
  });
  const { handleSubmit, control, setValue, watch, reset, formState: { isDirty, dirtyFields } } = surveyEditForm;
  const questions = watch('questions');

  useEffect(() => {
    if (isPending || isFetching) return;

    const associatedTagIds = associatedTags.data?.map((tag: SurveyAssociatedTag) => tag.survey_tag_id);

    reset({
      summary: survey.data?.summary,
      type: survey.data?.survey_type_id.toString(),
      questions: surveyQuestions.data.map((question: SurveyFormQuestion) => ({
        ...question,
        survey_question_type_id: question.survey_question_type_id.toString(),
      })),
      tags: surveyTags.data?.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id)) || [],
    });
  }, [isFetching, isPending]);

  const onSubmitEditedSurvey = async (values: z.infer<typeof surveyEditFormSchema>) => {
    if (dirtyFields.summary || dirtyFields.type) {
      await update({ id: survey.data.id, summary: values.summary, survey_type_id: Number(values.type) });
      if (updateError) return;
    }
    // TODO: figure out why dirtyFields.tags is not working
    // if (dirtyFields.tags) {
    await updateAssociatedTags({ id: survey.data.id, tags: values.tags });
    if (updateAssociatedTagsError) return;
    // }
    if (dirtyFields.questions) {
      await updateQuestions({ id: survey.data.id, questions: values.questions });
      if (updateQuestionsError) return;
    }
  };

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen m-6">
      <CardTitle className="text-2xl mb-5">Edit Survey</CardTitle>
      <Form {...surveyEditForm}>
        <form onSubmit={handleSubmit(onSubmitEditedSurvey)}>
          <Card className="w-full max-w">
            <CardContent className="mt-5">
              <CardTitle className="text-1xl mt-6 mb-5">Survey Info</CardTitle>
              <div className="flex flex-row gap-3 mb-3">
                <div className="basis-2/3 mt-0">
                  <FormLabel htmlFor="summary" className="text-sm">Summary</FormLabel>
                  <FormField
                    control={control}
                    name="summary"
                    render={({ field }) => (
                      <Input {...field} className="mt-1" id="summary" placeholder="Enter survey summary" required />
                    )}
                  />
                </div>
                <div className="basis-1/3">
                  <FormLabel htmlFor="type" className="text-sm">Survey Type</FormLabel>
                  <FormField
                    control={control}
                    name="type"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value.toString()} required>
                        <SelectTrigger id="type" className="mt-1">
                          <SelectValue placeholder="Survey type" />
                        </SelectTrigger>
                        <SelectContent>
                          {types.data?.map((type: SurveyType) => (
                            <SelectItem {...field} key={type.id} value={type.id.toString()}>{type.description}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <TagsForm control={control} setValue={setValue} surveyTags={surveyTags} refetchTags={surveyTags.refetch} />
              </div>
              <hr className="my-10" />
              <CardTitle className="text-1xl my-5">Questions</CardTitle>
              <QuestionsForm control={control} setValue={setValue} questions={questions} questionTypes={questionTypes} />
            </CardContent>
            <CardFooter className="justify-end">
              <Button type="submit" disabled={!isDirty}>Update Survey</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}