'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import useGetSurveyById from "@/hooks/api/surveys/useGetSurveyById";
import useGetSurveyQuestions from "@/hooks/api/surveys/useGetSurveyQuestions";
import useGetSurveyQuestionTypes from "@/hooks/api/types/useGetSurveyQuestionTypes";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";
import useGetSurveyTags from "@/hooks/api/types/useGetSurveyTags";
import useGetSurveyAssociatedTags from "@/hooks/api/surveys/useGetSurveyAssociatedTags";
import { QuestionType, SurveyAssociatedTag, SurveyQuestion, SurveyTag, SurveyType } from "@/hooks/api/types";

export default function SurveyEdit() {
  const params = useParams();
  const surveyId = Array.isArray(params.surveyId) ? params.surveyId[0] : params.surveyId;

  const survey = useGetSurveyById(surveyId);
  const surveyQuestions = useGetSurveyQuestions(surveyId);
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();
  const associatedTags = useGetSurveyAssociatedTags(surveyId);

  const isPending = survey.isPending || surveyQuestions.isPending || questionTypes.isPending || types.isPending || surveyTags.isPending || associatedTags.isPending;
  const isFetching = survey.isFetching || surveyQuestions.isFetching || questionTypes.isFetching || types.isFetching || surveyTags.isFetching || associatedTags.isFetching;
  const error = survey.error?.message || surveyQuestions.error?.message || questionTypes.error?.message || types.error?.message || surveyTags.error?.message || associatedTags.error?.message;

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
  const [openSelectTags, setOpenSelectTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<SurveyTag[]>([]);

  useEffect(() => {
    setQuestions(surveyQuestions.data);
  }, [surveyQuestions.data]);

  useEffect(() => {
    if (!associatedTags.data?.length || !surveyTags.data?.length) return;
    const associatedTagIds = associatedTags.data.map((tag: SurveyAssociatedTag) => tag.survey_tag_id);
    setSelectedTags(surveyTags.data.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id)));
  }, [associatedTags.data, surveyTags.data]);
  
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
      <CardTitle className="text-2xl mb-5">Edit Survey</CardTitle>
      <Card className="w-full max-w">
        <CardContent className="mt-5">
          <CardTitle className="text-1xl mt-6 mb-5">Survey Info</CardTitle>
          <div className="flex flex-row gap-3 mb-3">
            <div className="basis-2/3">
              <Label htmlFor="summary" className="text-sm">Summary</Label>
              <Input id="summary" className="mt-1" placeholder="Enter survey summary" value={survey.data?.summary} required />
            </div>
            <div className="basis-1/3">
              <Label htmlFor="type" className="text-sm">Survey Type</Label>
              <Select defaultValue={survey.data?.survey_type_id.toString()}>
                <SelectTrigger id="type" className="mt-1" >
                  <SelectValue placeholder="Survey type" />
                </SelectTrigger>
                <SelectContent>
                  { types.data?.map((type: SurveyType) => (
                    <SelectItem key={type.id} value={type.id.toString()}>{type.description}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div>
              <Label htmlFor="tags" className="text-sm">Tags</Label>
              <div className="mt-1">
                <Popover open={openSelectTags} onOpenChange={setOpenSelectTags}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openSelectTags}
                      className="w-[200px] justify-between"
                    >
                      {selectedTags.length
                        ? selectedTags.map((tag: SurveyTag) => tag.description).join(", ")
                        : "Select tag..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search tags..." />
                      <CommandList>
                        <CommandEmpty>No tag found.</CommandEmpty>
                        <CommandGroup>
                          {surveyTags.data.map((tag: SurveyTag) => (
                            <CommandItem
                              key={tag.id}
                              value={tag.description}
                              onSelect={(currentTag) => {
                                const selectedTag = surveyTags.data.find((tag: SurveyTag) => tag.description === currentTag);
                                if (selectedTag) setSelectedTags(selectedTags.includes(selectedTag) ? selectedTags.filter((tag) => tag.description !== selectedTag.description) : [...selectedTags, selectedTag]);
                                setOpenSelectTags(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedTags.includes(tag) ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {tag.description}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <CardTitle className="text-1xl my-5">Questions</CardTitle>
          { questions?.sort((a, b) => a.sequence - b.sequence).map((question, index) => (
            <div key={question.id} className="mb-10">
              <div className="flex flex-row gap-3 mb-2">
                <div className="basis-1/12">
                  <Label htmlFor="sequence" className="text-sm">Sequence</Label>
                  <Input id="sequence" className="mt-1" placeholder="Enter sequence number" value={question.sequence} required />
                </div>
                <div className="basis-3/12">
                  <Label htmlFor="question-type" className="text-sm">Question Type</Label>
                  <Select defaultValue={question.survey_question_type_id.toString()}>
                    <SelectTrigger id="question-type" className="mt-1" >
                      <SelectValue placeholder="Question type" />
                    </SelectTrigger>
                    <SelectContent>
                      { questionTypes.data?.map((type: QuestionType) => (
                        <SelectItem key={type.id} value={type.id.toString()}>{type.description}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="basis-8/12">
                  <Label htmlFor="question-text" className="text-sm">Title</Label>
                  <Input id="question-text" className="mt-1" placeholder="Enter question text" value={question.title} required />
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="basis-1/12 ml-2"></div>
                <div className="basis-5/12">
                  <Label htmlFor="description" className="text-sm">Description</Label>
                  <Input id="description" className="mt-1" placeholder="Enter description" value={question.description} required />
                </div>
                <div className="basis-6/12">
                  <Label htmlFor="tooltip" className="text-sm">Tooltip</Label>
                  <Input id="tooltip" className="mt-1" placeholder="Enter tooltip" value={question.tooltip} required />
                </div>
              </div>
            </div>
          ))}
          <div className="mb-10" onClick={addQuestionRow}>
            <Button>Add Question</Button>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Update Survey</Button>
        </CardFooter>
      </Card>
    </div>
  );
}