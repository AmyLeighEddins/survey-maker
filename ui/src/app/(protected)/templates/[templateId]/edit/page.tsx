'use client';
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { TagsForm, QuestionsForm } from "@/components/shared/form";

import { getNextSequenceNumber, getRandomId } from "@/utils/helpers";
import { SurveyAssociatedTag, SurveyTag, SurveyType, TemplateFormQuestion } from "@/hooks/api/types";
import { useGetTemplateById, useGetTemplateQuestions, useGetTemplateAssociatedTags, usePutTemplate, usePutTemplateAssociatedTags, usePutTemplateQuestions } from "@/hooks/api/templates";
import { useGetSurveyQuestionTypes, useGetSurveyTypes, useGetSurveyTags } from "@/hooks/api/types/index";

const templateEditFormSchema = z.object({
  summary: z.string(),
  name: z.string(),
  type: z.string(),
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

const newQuestion: TemplateFormQuestion = {
  title: '',
  description: '',
  tooltip: '',
  survey_question_type_id: '',
};

export default function TemplateEdit() {
  const params = useParams();
  const templateId = Array.isArray(params.templateId) ? params.templateId[0] : params.templateId;

  const template = useGetTemplateById(templateId);
  const templateQuestions = useGetTemplateQuestions(templateId);
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();
  const associatedTags = useGetTemplateAssociatedTags(templateId);

  const { mutateAsync: update, isError: updateError } = usePutTemplate();
  const { mutateAsync: updateAssociatedTags, isError: updateAssociatedTagsError } = usePutTemplateAssociatedTags();
  const { mutateAsync: updateQuestions, isError: updateQuestionsError } = usePutTemplateQuestions();

  const isPending = template.isPending || templateQuestions.isPending || questionTypes.isPending || types.isPending || surveyTags.isPending || associatedTags.isPending;
  const isFetching = template.isFetching || templateQuestions.isFetching || questionTypes.isFetching || types.isFetching || surveyTags.isFetching || associatedTags.isFetching;
  const error = template.error?.message || templateQuestions.error?.message || questionTypes.error?.message || types.error?.message || surveyTags.error?.message || associatedTags.error?.message || updateError || updateAssociatedTagsError || updateQuestionsError;

  const surveyEditForm = useForm<z.infer<typeof templateEditFormSchema>>({
    resolver: zodResolver(templateEditFormSchema),
    defaultValues: {
      summary: '',
      name: '',
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
      summary: template.data?.summary,
      name: template.data?.name,
      type: template.data?.survey_type_id.toString(),
      questions: templateQuestions.data.map((question: TemplateFormQuestion) => ({
        ...question,
        survey_question_type_id: question.survey_question_type_id.toString(),
      })),
      tags: surveyTags.data?.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id)) || [],
    });
  }, [isFetching, isPending]);

  const addQuestionRow = () => {
    setValue('questions', [...questions, { ...newQuestion, id: getRandomId(), sequence: getNextSequenceNumber(questions) }]);
  };

  const onSubmitEditedTemplate = async (values: z.infer<typeof templateEditFormSchema>) => {
    if (dirtyFields.summary || dirtyFields.type) {
      await update({ id: template.data.id, name: template.data.name, summary: values.summary, survey_type_id: Number(values.type) });
      if (updateError) return;
    }
    // TODO: figure out why dirtyFields.tags is not working
    // if (dirtyFields.tags) {
    await updateAssociatedTags({ id: template.data.id, tags: values.tags });
    if (updateAssociatedTagsError) return;
    // }
    if (dirtyFields.questions) {
      await updateQuestions({ id: template.data.id, questions: values.questions });
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
      <CardTitle className="text-2xl mb-5">Edit Template</CardTitle>
      <Form {...surveyEditForm}>
        <form onSubmit={handleSubmit(onSubmitEditedTemplate)}>
          <Card className="w-full max-w">
            <CardContent className="mt-5">
              <CardTitle className="text-1xl mt-6 mb-5">Template Info</CardTitle>
              <div className="flex flex-row gap-3 mb-3">
                <div className="basis-1/3">
                  <FormLabel htmlFor="name" className="text-sm">Name</FormLabel>
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <Input {...field} className="mt-1" id="name" placeholder="Enter template name" required />
                    )}
                  />
                </div>
                <div className="basis-1/3">
                  <FormLabel htmlFor="summary" className="text-sm">Summary</FormLabel>
                  <FormField
                    control={control}
                    name="summary"
                    render={({ field }) => (
                      <Input {...field} className="mt-1" id="summary" placeholder="Enter template summary" required />
                    )}
                  />
                </div>
                <div className="basis-1/3">
                  <FormLabel htmlFor="type" className="text-sm">Template Type</FormLabel>
                  <FormField
                    control={control}
                    name="type"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value.toString()}>
                        <SelectTrigger id="type" className="mt-1">
                          <SelectValue placeholder="Template type" />
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
                <TagsForm control={control} setValue={setValue} surveyTags={surveyTags} />
              </div>
              <hr className="my-10" />
              <CardTitle className="text-1xl my-5">Questions</CardTitle>
              <QuestionsForm control={control} questions={questions} questionTypes={questionTypes} />
              <div className="mb-10" onClick={addQuestionRow}>
                <Button>Add Question</Button>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button type="submit" disabled={!isDirty}>Update Template</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}