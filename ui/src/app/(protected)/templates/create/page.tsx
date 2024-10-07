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
import { useGetSurveyTypes, useGetSurveyQuestionTypes, useGetSurveyTags } from "@/hooks/api/types/index";
import { usePostTemplate, usePostTemplateAssociatedTags, usePostTemplateQuestions } from "@/hooks/api/templates";
import { newQuestion } from "@/components/shared/form/QuestionsForm";

const templateCreateFormSchema = z.object({
  summary: z.string(),
  name: z.string(),
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

export default function CreateTemplate() {
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();

  const { mutateAsync: create, isError: createError } = usePostTemplate();
  const { mutateAsync: createAssociatedTags, isError: createAssociatedTagsError } = usePostTemplateAssociatedTags();
  const { mutateAsync: createQuestions, isError: createQuestionsError } = usePostTemplateQuestions();

  const isPending = questionTypes.isPending || types.isPending || surveyTags.isPending;
  const isFetching = questionTypes.isFetching || types.isFetching || surveyTags.isFetching;
  const error = questionTypes.error?.message || types.error?.message || surveyTags.error?.message || createError || createAssociatedTagsError || createQuestionsError;

  const surveyCreateForm = useForm<z.infer<typeof templateCreateFormSchema>>({
    resolver: zodResolver(templateCreateFormSchema),
    defaultValues: {
      summary: '',
      name: '',
      type: '',
      tags: [],
      questions: [{ ...newQuestion, sequence: 1, id: getRandomId() }],
    },
  });
  const { handleSubmit, control, setValue, watch } = surveyCreateForm;
  const questions = watch('questions');

  const onSubmitNewTemplate = async (values: z.infer<typeof templateCreateFormSchema>) => {
    const template = await create({ summary: values.summary, name: values.name, survey_type_id: Number(values.type) });
    if (createError) return;
    await createAssociatedTags({ id: template.id, tags: values.tags });
    if (createAssociatedTagsError) return;
    await createQuestions({ id: template.id, questions: values.questions });
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
      <CardTitle className="text-2xl mb-5">Create New Template</CardTitle>
      <Form {...surveyCreateForm}>
        <form onSubmit={handleSubmit(onSubmitNewTemplate)}>
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
                <TagsForm control={control} setValue={setValue} surveyTags={surveyTags} refetchTags={surveyTags.refetch} />
              </div>
              <hr className="my-10" />
              <CardTitle className="text-1xl my-5">Questions</CardTitle>
              <QuestionsForm control={control} setValue={setValue} questions={questions} questionTypes={questionTypes} />
            </CardContent>
            <CardFooter className="justify-end">
              <Button type="submit">Create Template</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};