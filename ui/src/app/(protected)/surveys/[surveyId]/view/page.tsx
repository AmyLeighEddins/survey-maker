'use client';
import { useParams, useRouter } from "next/navigation";
import { Edit, MessageCircle, Users } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import useGetSurveyById from "@/hooks/api/surveys/useGetSurveyById";
import useGetSurveyQuestions from "@/hooks/api/surveys/useGetSurveyQuestions";
import useGetSurveyQuestionTypes from "@/hooks/api/types/useGetSurveyQuestionTypes";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";
import useGetSurveyTags from "@/hooks/api/types/useGetSurveyTags";
import useGetSurveyAssociatedTags from "@/hooks/api/surveys/useGetSurveyAssociatedTags";
import { Survey, SurveyAssociatedTag, SurveyTag, SurveyType } from "@/hooks/api/types";

export default function SurveyDetails() {
  const params = useParams();
  const router = useRouter();
  const surveyId = Array.isArray(params.surveyId) ? params.surveyId[0] : params.surveyId;

  const survey = useGetSurveyById(surveyId);
  const surveyQuestions = useGetSurveyQuestions(surveyId);
  const types = useGetSurveyTypes();
  const questionTypes = useGetSurveyQuestionTypes();
  const surveyTags = useGetSurveyTags();
  const associatedTags = useGetSurveyAssociatedTags(surveyId);

  const isPending = survey.isPending || surveyQuestions.isPending || types.isPending || questionTypes.isPending || surveyTags.isPending || associatedTags.isPending;
  const isFetching = survey.isFetching || surveyQuestions.isFetching || types.isFetching || questionTypes.isFetching || surveyTags.isFetching || associatedTags.isFetching;
  const error = survey.error?.message || surveyQuestions.error?.message || types.error?.message || questionTypes.error?.message || surveyTags.error?.message || associatedTags.error?.message;

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const surveyData: Survey = survey.data;

  const onEditClick = () => {
    router.push(`/surveys/${surveyData.id}/edit`);
  };

  const getTags = () => {
    const associatedTagIds = associatedTags.data.map((tag: SurveyAssociatedTag) => tag.survey_tag_id);
    return surveyTags.data.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id));
  };

  return (
    <div className="mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{surveyData.summary}</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={onEditClick}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{surveyQuestions.data.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{12}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{50}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Survey Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium">Created</dt>
              <dd className="text-muted-foreground">{format(new Date(surveyData.created_date), 'MM/dd/yyyy')}</dd>
            </div>
            <div>
              <dt className="font-medium">Expire Date</dt>
              <dd className="text-muted-foreground">{format(new Date(surveyData.expiry_date), 'MM/dd/yyyy')}</dd>
            </div>
            <div>
              <dt className="font-medium">Type</dt>
              <dd className="text-muted-foreground">{types.data?.find((type: SurveyType) => type.id === surveyData.survey_type_id)?.description}</dd>
            </div>
            <div>
              <dt className="font-medium">Tags</dt>
              <dd className="text-muted-foreground">{getTags().map((tag: SurveyTag) => tag.description).join(", ")}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}