'use client';
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
import { TagsForm, QuestionsForm, EmployeeRecipientsForm, ExternalRecipientsForm } from "@/components/shared/form";

import { SurveyAssociatedTag, SurveyFormQuestion, SurveyTag, SurveyType } from "@/hooks/api/types";
import { useGetSurveyById, useGetSurveyQuestions, useGetSurveyAssociatedTags, usePutSurvey, usePutSurveyAssociatedTags, usePutSurveyQuestions, useGetSurveyEmployeeRecipients, useGetSurveyExternalRecipients, usePutSurveyEmployeeRecipients, usePutSurveyExternalRecipients } from "@/hooks/api/surveys";
import { useGetEmployeeRecipients, useGetExternalRecipients } from "@/hooks/api/recipients";
import { useGetSurveyQuestionTypes, useGetSurveyTypes, useGetSurveyTags } from "@/hooks/api/types/index";

const surveyEditFormSchema = z.object({
  summary: z.string(),
  expirationDate: z.date(),
  type: z.string().min(1),
  tags: z.array(z.object(
    {
      id: z.number(),
      description: z.string(),
    }
  )),
  employeeRecipients: z.array(z.object({
    employee_id: z.number(),
  })),
  externalRecipients: z.array(z.object({
    email_address: z.string(),
  })),
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
  const employeeRecipients = useGetEmployeeRecipients();
  const externalRecipients = useGetExternalRecipients();
  const surveyEmployeeRecipients = useGetSurveyEmployeeRecipients(surveyId);
  const surveyExternalRecipients = useGetSurveyExternalRecipients(surveyId);

  const { mutateAsync: update, isError: updateError } = usePutSurvey();
  const { mutateAsync: updateAssociatedTags, isError: updateAssociatedTagsError } = usePutSurveyAssociatedTags();
  const { mutateAsync: updateQuestions, isError: updateQuestionsError } = usePutSurveyQuestions();
  const { mutateAsync: updateEmployeeRecipients, isError: updateEmployeeRecipientsError } = usePutSurveyEmployeeRecipients();
  const { mutateAsync: updateExternalRecipients, isError: updateExternalRecipientsError } = usePutSurveyExternalRecipients();

  const isPending = survey.isPending || surveyQuestions.isPending || questionTypes.isPending || types.isPending || surveyTags.isPending || associatedTags.isPending || employeeRecipients.isPending || externalRecipients.isPending;
  const isFetching = survey.isFetching || surveyQuestions.isFetching || questionTypes.isFetching || types.isFetching || surveyTags.isFetching || associatedTags.isFetching || employeeRecipients.isFetching || externalRecipients.isFetching;
  const error = survey.error?.message || surveyQuestions.error?.message || questionTypes.error?.message || types.error?.message || surveyTags.error?.message || associatedTags.error?.message || updateError || updateAssociatedTagsError || updateQuestionsError || employeeRecipients.error?.message || externalRecipients.error?.message;

  const surveyEditForm = useForm<z.infer<typeof surveyEditFormSchema>>({
    resolver: zodResolver(surveyEditFormSchema),
    defaultValues: {
      summary: '',
      expirationDate: new Date(),
      type: '',
      tags: [],
      employeeRecipients: [],
      externalRecipients: [],
      questions: [],
    },
  });
  const { handleSubmit, control, setValue, watch, reset, formState: { isDirty, dirtyFields } } = surveyEditForm;
  const questions = watch('questions');

  console.log(survey.data?.expiry_date);

  useEffect(() => {
    if (isPending || isFetching) return;

    const associatedTagIds = associatedTags.data?.map((tag: SurveyAssociatedTag) => tag.survey_tag_id);

    reset({
      summary: survey.data?.summary,
      type: survey.data?.survey_type_id.toString(),
      expirationDate: new Date(survey.data?.expiry_date),
      questions: surveyQuestions.data.map((question: SurveyFormQuestion) => ({
        ...question,
        survey_question_type_id: question.survey_question_type_id.toString(),
      })),
      employeeRecipients: surveyEmployeeRecipients.data,
      externalRecipients: surveyExternalRecipients.data,
      tags: surveyTags.data?.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id)) || [],
    });
  }, [isFetching, isPending]);

  const onSubmitEditedSurvey = async (values: z.infer<typeof surveyEditFormSchema>) => {
    if (dirtyFields.summary || dirtyFields.type) {
      await update({ id: survey.data.id, summary: values.summary, survey_type_id: Number(values.type), expiry_date: values.expirationDate });
      if (updateError) return;
    }
    // TODO: figure out why dirtyFields.tags is not working for questions and recipeints
    // if (dirtyFields.tags) {
    await updateAssociatedTags({ id: survey.data.id, tags: values.tags });
    if (updateAssociatedTagsError) return;
    // }
    if (dirtyFields.questions) {
      await updateQuestions({ id: survey.data.id, questions: values.questions });
      if (updateQuestionsError) return;
    }
    await updateEmployeeRecipients({ id: survey.data.id, recipients: values.employeeRecipients });
    if (updateEmployeeRecipientsError) return;
    await updateExternalRecipients({ id: survey.data.id, recipients: values.externalRecipients });
    if (updateExternalRecipientsError) return;
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
                <div className="basis-6/12 mt-0">
                  <FormLabel htmlFor="summary" className="text-sm">Summary</FormLabel>
                  <FormField
                    control={control}
                    name="summary"
                    render={({ field }) => (
                      <Input {...field} className="mt-1" id="summary" placeholder="Enter survey summary" required />
                    )}
                  />
                </div>
                <div className="basis-3/12 content-end">
                  <FormLabel htmlFor="date" className="text-sm">Expiration Date</FormLabel>
                  <FormField
                    control={control}
                    name="expirationDate"
                    render={({ field }) => (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    )}
                  />
                </div>
                <div className="basis-3/12">
                  <FormLabel htmlFor="type" className="text-sm">Survey Type</FormLabel>
                  <FormField
                    control={control}
                    name="type"
                    render={({ field }) => (
                      // TODO: figure out why I would need to do this for this field to work correctly
                      <Select onValueChange={(value) => value ? field.onChange(value) : undefined} value={field.value.toString()} required>
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
                <div className="basis-1/3">
                  <TagsForm control={control} setValue={setValue} surveyTags={surveyTags} refetchTags={surveyTags.refetch} />
                </div>
                <div className="basis-1/3">
                  <EmployeeRecipientsForm control={control} setValue={setValue} recipients={employeeRecipients} />
                </div>
                <div className="basis-1/3">
                  <ExternalRecipientsForm control={control} setValue={setValue} recipients={externalRecipients} />
                </div>
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