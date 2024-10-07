'use client';
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

import { getRandomId } from "@/utils/helpers";
import { SurveyType } from "@/hooks/api/types";
import { usePostSurvey, usePostSurveyAssociatedTags, usePostSurveyQuestions } from "@/hooks/api/surveys";
import { useGetSurveyQuestionTypes, useGetSurveyTypes, useGetSurveyTags } from "@/hooks/api/types/index";
import { newQuestion } from "@/components/shared/form/QuestionsForm";

const surveyCreateFormSchema = z.object({
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

export default function CreateSurvey() {
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();

  const { mutateAsync: create, isError: createError } = usePostSurvey();
  const { mutateAsync: createAssociatedTags, isError: createAssociatedTagsError } = usePostSurveyAssociatedTags();
  const { mutateAsync: createQuestions, isError: createQuestionsError } = usePostSurveyQuestions();

  const isPending = questionTypes.isPending || types.isPending || surveyTags.isPending;
  const isFetching = questionTypes.isFetching || types.isFetching || surveyTags.isFetching;
  const error = questionTypes.error?.message || types.error?.message || surveyTags.error?.message || createError || createAssociatedTagsError || createQuestionsError;

  const surveyCreateForm = useForm<z.infer<typeof surveyCreateFormSchema>>({
    resolver: zodResolver(surveyCreateFormSchema),
    defaultValues: {
      summary: '',
      type: '',
      tags: [],
      questions: [{ ...newQuestion, sequence: 1, id: getRandomId() }],
    },
  });
  const { handleSubmit, control, setValue, watch } = surveyCreateForm;
  const questions = watch('questions');

  const onSubmitNewSurvey = async (values: z.infer<typeof surveyCreateFormSchema>) => {
    const survey = await create({ summary: values.summary, survey_type_id: Number(values.type) });
    if (createError) return;
    await createAssociatedTags({ id: survey.id, tags: values.tags });
    if (createAssociatedTagsError) return;
    await createQuestions({ id: survey.id, questions: values.questions });
    if (createQuestionsError) return;
  };

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen m-6">
      <CardTitle className="text-2xl mb-5">Create New Survey</CardTitle>
      <Form {...surveyCreateForm}>
        <form onSubmit={handleSubmit(onSubmitNewSurvey)}>
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
                      <Select onValueChange={field.onChange}>
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
              <Button type="submit">Create Survey</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};