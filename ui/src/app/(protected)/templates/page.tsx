'use client';
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { ListFilter, PlusCircle, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SurveyType, Template } from "@/hooks/api/types";
import useGetTemplates from "@/hooks/api/templates/useGetTemplates";
import useGetSurveyTypes from "@/hooks/api/types/useGetSurveyTypes";

const Templates = () => {
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [typeFilters, setTypeFilters] = useState<number[]>([]);
  const [showAllTypes, setShowAllTypes] = useState<boolean>(true);

  const router = useRouter();
  const templates = useGetTemplates();
  const types = useGetSurveyTypes();

  const isPending = templates.isPending || types.isPending;
  const isFetching = templates.isFetching || types.isFetching;
  const error = templates.error?.message || types.error?.message;

  useEffect(() => {
    // Set the default type filters to all types on initial loading of data
    setTypeFilters(types.data?.map((type: SurveyType) => type.id));
  }, [types.data]);

  useEffect(() => {
    setFilteredTemplates(templates.data?.filter((survey: Template) => typeFilters?.includes(survey.survey_type_id)));
  }, [templates.data, typeFilters]);

  if (isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const onViewClick = (id: number) => () => {
    router.push(`/templates/${id}/view`);
  };

  const onEditClick = (id: number) => () => {
    router.push(`/templates/${id}/edit`);
  };

  const onClickTypeFilterOption = (checked: boolean, surveyTypeId: number) => {
    const updateTypeFilters = checked ? [...typeFilters, surveyTypeId] : typeFilters.filter((type) => type !== surveyTypeId);
    setTypeFilters(updateTypeFilters);
    if (updateTypeFilters.length !== types.data?.length) setShowAllTypes(false);
    if (updateTypeFilters.length === types.data?.length) setShowAllTypes(true);
  };

  const onClickShowAll = (checked: boolean) => {
    setShowAllTypes(checked);
    if (checked) {
      setTypeFilters(types.data?.map((type: SurveyType) => type.id));
    } else {
      setTypeFilters([]);
    }
  };

  return (
    <div className="h-screen my-5">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
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
                  <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={showAllTypes} onCheckedChange={onClickShowAll}>Select All</DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  {types.data?.map((type: SurveyType) => (
                    <DropdownMenuCheckboxItem key={type.id} checked={typeFilters?.includes(type.id)} onCheckedChange={(value) => onClickTypeFilterOption(value, type.id)}>
                      {type.description}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="h-7 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Create Template
                </span>
              </Button>
            </div>
          </div>
          <div className="mt-2">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>
                  Manage your templates and view their performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredTemplates?.length ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Summary</TableHead>
                        <TableHead>Created on</TableHead>
                        <TableHead>Updated on</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTemplates?.map((template: Template) => (
                        <TableRow key={template.id}>
                          <TableCell className="font-medium">
                            {template.name}
                          </TableCell>
                          <TableCell>{template.summary}</TableCell>
                          <TableCell>{format(new Date(template.created_date), 'MM/dd/yyyy')}</TableCell>
                          <TableCell>{format(new Date(template.updated_date), 'MM/dd/yyyy')}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge className="text-xs" variant="outline">
                              {types.data?.find((type: SurveyType) => type.id === template.survey_type_id)?.description}
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
                                <DropdownMenuItem onClick={onViewClick(template.id)}>View</DropdownMenuItem>
                                <DropdownMenuItem onClick={onEditClick(template.id)}>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div>No templates found.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

export default Templates;