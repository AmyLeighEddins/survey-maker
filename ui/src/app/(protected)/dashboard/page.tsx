'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Survey, SurveyType, Template } from "@/hooks/api/types";
import useGetSurveys from "@/hooks/api/surveys/useGetSurveys";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";
import useGetTemplates from "@/hooks/api/templates/useGetTemplates";

export default function DashboardPage() {
  const router = useRouter();
  const surveys = useGetSurveys();
  const types = useGetSurveyTypes();
  const templates = useGetTemplates();

  const isPending = surveys.isPending || types.isPending || templates.isPending;
  const isFetching = surveys.isFetching || types.isFetching || templates.isFetching;
  const error = surveys.error?.message || types.error?.message || templates.error?.message;

  const onClick = (type: string, id: number) => () => {
    router.push(`/${type}/${id}/view`);
  };

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen">
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 m-10">
        <Card
          className="xl:col-span-1" x-chunk="dashboard-01-chunk-4"
        >
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Surveys</CardTitle>
              <CardDescription>
                Recent surveys you've created.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/surveys">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Summary</TableHead>
                  <TableHead className="text-right">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {surveys.data?.map((survey: Survey) => (
                  <TableRow key={survey.id} onClick={onClick('surveys', survey.id)}>
                    <TableCell>
                      <div className="font-medium">{survey.summary}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge className="text-xs" variant="outline">
                        {types.data?.find((type: SurveyType) => type.id === survey.survey_type_id)?.description}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card
          className="xl:col-span-1" x-chunk="dashboard-01-chunk-4"
        >
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Templates</CardTitle>
              <CardDescription>
                Recent templates you've created.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/templates">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Summary</TableHead>
                  <TableHead className="text-right">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.data?.map((template: Template) => (
                  <TableRow key={template.id} onClick={onClick('templates', template.id)}>
                    <TableCell>
                      <div className="font-medium">{template.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {template.summary}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge className="text-xs" variant="outline">
                        {types.data?.find((type: SurveyType) => type.id === template.survey_type_id)?.description}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}