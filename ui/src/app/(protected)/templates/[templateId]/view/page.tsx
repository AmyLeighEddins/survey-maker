'use client';
import { useParams, useRouter } from "next/navigation";
import { Edit, MessageCircle, Users } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import useGetTemplateById from "@/hooks/api/templates/useGetTemplateById";
import useGetTemplateQuestions from "@/hooks/api/templates/useGetTemplateQuestions";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";
import useGetTemplateAssociatedTags from "@/hooks/api/templates/useGetTemplateAssociatedTags";
import useGetSurveyTags from "@/hooks/api/types/useGetSurveyTags";
import { SurveyAssociatedTag, SurveyTag, SurveyType, Template } from "@/hooks/api/types";

export default function TemplateDetails() {
  const params = useParams();
  const router = useRouter();
  const templateId = Array.isArray(params.templateId) ? params.templateId[0] : params.templateId;

  const template = useGetTemplateById(templateId);
  const templateQuestions = useGetTemplateQuestions(templateId);
  const types = useGetSurveyTypes();
  const surveyTags = useGetSurveyTags();
  const associatedTags = useGetTemplateAssociatedTags(templateId);

  const isPending = template.isPending || templateQuestions.isPending || types.isPending || surveyTags.isPending || associatedTags.isPending;
  const isFetching = template.isFetching || templateQuestions.isFetching || types.isFetching || surveyTags.isFetching || associatedTags.isFetching;
  const error = template.error?.message || templateQuestions.error?.message || types.error?.message || surveyTags.error?.message || associatedTags.error?.message;

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const templateData: Template = template.data;

  const onEditClick = () => {
    router.push(`/templates/${templateData.id}/edit`);
  };

  const getTags = () => {
    const associatedTagIds = associatedTags.data.map((tag: SurveyAssociatedTag) => tag.survey_tag_id);
    return surveyTags.data.filter((tag: SurveyTag) => associatedTagIds.includes(tag.id));
  };

  return (
    <div className="mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-bold">{templateData.name}</h1>
          <h1 className="text-3xl font-bold text-muted-foreground">{templateData.summary}</h1>
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={onEditClick}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{templateQuestions.data.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Uses</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{50}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Template Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-medium">Created</dt>
              <dd className="text-muted-foreground">{format(new Date(templateData.created_date), 'MM/dd/yyyy')}</dd>
            </div>
            <div>
              <dt className="font-medium">Last Modified</dt>
              <dd className="text-muted-foreground">{format(new Date(templateData.updated_date), 'MM/dd/yyyy')}</dd>
            </div>
            <div>
              <dt className="font-medium">Type</dt>
              <dd className="text-muted-foreground">{types.data?.find((type: SurveyType) => type.id === templateData.survey_type_id)?.description}</dd>
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