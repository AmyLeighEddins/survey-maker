'use client';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";
import useGetSurveyQuestionTypes from "@/hooks/api/types/useGetSurveyQuestionTypes";
import { QuestionType, SurveyQuestion, SurveyType } from "@/hooks/api/types";

export default function CreateSurvey() {
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();

  const isPending = questionTypes.isPending || types.isPending;
  const isFetching = questionTypes.isFetching || types.isFetching;
  const error = questionTypes.error?.message || types.error?.message;

  const newQuestion: SurveyQuestion = {
    id: 0,
    title: '',
    description: '',
    tooltip: '',
    sequence: 0,
    survey_question_type_id: 0,
    survey_id: 0,
  };
  const [questions, setQuestions] = useState<SurveyQuestion[]>([newQuestion]);

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addQuestionRow = () => {
    setQuestions((questions) => [...questions, newQuestion]);
  };

  return (
    <div className="h-screen m-6">
      <CardTitle className="text-2xl mb-5">Create New Survey</CardTitle>
      <Card className="w-full max-w">
        <CardContent className="mt-5">
          <CardTitle className="text-1xl mt-6 mb-5">Survey Info</CardTitle>
          <div className="flex flex-row gap-3">
            <div className="flex-auto">
              <Input id="summary" placeholder="Enter survey summary" required />
            </div>
            <div className="flex-auto">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Survey type" />
                </SelectTrigger>
                <SelectContent>
                  { types.data?.map((type: SurveyType) => (
                    <SelectItem key={type.id} value={type.description}>{type.description}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr className="my-10" />
          <CardTitle className="text-1xl my-5">Questions</CardTitle>
          { questions.map((question, index) => (
            <div className="flex flex-row gap-3 mb-4">
              <div className="basis-3/12">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Question type" />
                  </SelectTrigger>
                  <SelectContent>
                    { questionTypes.data?.map((type: QuestionType) => (
                      <SelectItem key={type.id} value={type.description}>{type.description}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="basis-8/12">
                <Input id="question-text" placeholder="Enter question text" required />
              </div>
              <div className="basis-1/12" onClick={addQuestionRow}>
                <Button>Add Question</Button>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Create Survey</Button>
        </CardFooter>
      </Card>
    </div>
  );
};