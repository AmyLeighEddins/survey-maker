import { Control } from "react-hook-form";
import {
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getNextSequenceNumber, getRandomId } from "@/utils/helpers";
import { SurveyFormQuestion, SurveyQuestion, TemplateFormQuestion, TemplateQuestion } from "@/hooks/api/types";

type FormQuestion = SurveyFormQuestion | TemplateFormQuestion;
type Question = SurveyQuestion | TemplateQuestion;

type QuestionTypesReturn = {
  isPending: boolean;
  error: Error | null;
  data: Question[];
  isFetching: boolean;
};

type QuestionsFormProps = {
  control: Control<any>;
  setValue: (name: any, value: FormQuestion[]) => void;
  questions: FormQuestion[];
  questionTypes: QuestionTypesReturn;
};

export const newQuestion: Omit<FormQuestion, 'id' | 'sequence'> = {
  title: '',
  description: '',
  tooltip: '',
  survey_question_type_id: '',
};

const QuestionsForm = ({ control, setValue, questions, questionTypes }: QuestionsFormProps) => {
  const addQuestionRow = () => {
    setValue('questions', [...questions, { ...newQuestion, id: getRandomId(), sequence: getNextSequenceNumber(questions) }]);
  };

  const deleteQuestionRow = (id: number | undefined) => {
    setValue('questions', questions.filter((question) => question.id !== id));
  };
  return (
    <div>
      {questions?.sort((a: FormQuestion, b: FormQuestion) => Number(a.sequence) - Number(b.sequence)).map((question, index) => (
        <div key={question.id} className="mb-10">
          <div className="flex flex-row gap-3 mb-2">
            <div className="basis-1/12">
              <FormLabel htmlFor={`questions.${question.id}.sequence`} className="text-sm">Sequence</FormLabel>
              <FormField
                control={control}
                name={`questions.${index}.sequence`}
                render={({ field }) => (
                  <Input {...field} id={`questions.${question.id}.sequence`} className="mt-1" placeholder="Enter sequence number" value={question.sequence} required />
                )} />
            </div>
            <div className="basis-3/12">
              <FormLabel htmlFor={`questions.${question.id}.question-type`} className="text-sm">Question Type</FormLabel>
              <FormField
                control={control}
                name={`questions.${index}.survey_question_type_id`}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value.toString()}>
                    <SelectTrigger id={`questions.${question.id}.question-type`} className="mt-1">
                      <SelectValue placeholder="Question type" />
                    </SelectTrigger>
                    <SelectContent>
                      {questionTypes.data?.map((type: Question) => (
                        <SelectItem {...field} key={type.id} value={type.id.toString()}>{type.description}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )} />
            </div>
            <div className="basis-7/12">
              <FormLabel htmlFor={`questions.${question.id}.title`} className="text-sm">Title</FormLabel>
              <FormField
                control={control}
                name={`questions.${index}.title`}
                render={({ field }) => (
                  <Input {...field} id={`questions.${question.id}.title`} className="mt-1" placeholder="Enter question text" required />
                )} />
            </div>
            <div className="basis-20 content-end text-end">
              <Button variant="destructive" onClick={() => deleteQuestionRow(question.id)}>Delete</Button>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="basis-1/12"></div>
            <div className="basis-5/12">
              <FormLabel htmlFor={`questions.${question.id}.description`} className="text-sm">Description</FormLabel>
              <FormField
                control={control}
                name={`questions.${index}.description`}
                render={({ field }) => (
                  <Input {...field} id={`questions.${question.id}.description`} className="mt-1" placeholder="Enter description" value={question.description} required />
                )} />
            </div>
            <div className="basis-5/12">
              <FormLabel htmlFor={`questions.${question.id}.tooltip`} className="text-sm">Tooltip</FormLabel>
              <FormField
                control={control}
                name={`questions.${index}.tooltip`}
                render={({ field }) => (
                  <Input {...field} id={`questions.${question.id}.tooltip`} className="mt-1" placeholder="Enter tooltip" value={question.tooltip} required />
                )} />
            </div>
            <div className="basis-20"></div>
          </div>
        </div>
      ))}
      <div className="mb-10">
        <Button onClick={addQuestionRow}>Add Question</Button>
      </div>
    </div>
  );
};

export default QuestionsForm;