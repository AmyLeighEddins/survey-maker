'use client';
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { ListFilter, PlusCircle, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Survey, SurveyType } from "@/hooks/api/types";
import useGetSurveys from "@/hooks/api/surveys/useGetSurveys";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";

const Surveys = () => {
  const router = useRouter();
  const surveys = useGetSurveys();
  const types = useGetSurveyTypes();

  const isPending = surveys.isPending || types.isPending;
  const isFetching = surveys.isFetching || types.isFetching;
  const error = surveys.error?.message || types.error?.message;

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const onViewClick = (id: number) => () => {
    router.push(`/surveys/${id}/view`);
  };

  const onEditClick = (id: number) => () => {
    router.push(`/surveys/${id}/edit`);
  };

  return (
    <div className="h-screen my-5">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-7 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Archived
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="h-7 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Create Survey
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Surveys</CardTitle>
                <CardDescription>
                  Manage your surveys and view their performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Summary</TableHead>
                      <TableHead>Created on</TableHead>
                      <TableHead>Expires on</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    { surveys.data?.map((survey: Survey) => (
                      <TableRow>
                        <TableCell className="font-medium">
                          {survey.summary}
                        </TableCell>
                        <TableCell>{format(new Date(survey.created_date), 'MM/dd/yyyy')}</TableCell>
                        <TableCell>{format(new Date(survey.expiry_date), 'MM/dd/yyyy')}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge className="text-xs" variant="outline">
                            {types.data?.find((type: SurveyType) => type.id === survey.survey_type_id)?.description}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={onViewClick(survey.id)}>View</DropdownMenuItem>
                              <DropdownMenuItem onClick={onEditClick(survey.id)}>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Surveys;