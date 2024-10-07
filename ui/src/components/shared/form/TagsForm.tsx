'use client';
import { useState } from "react";
import { Control } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormField,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SurveyTag } from "@/hooks/api/types";
import usePostSurveyTags from "@/hooks/api/types/usePostSurveyTags";

type SurveyTagsReturn = {
  isPending: boolean;
  error: Error | null;
  data: SurveyTag[];
  isFetching: boolean;
};

type TagsFormProps = {
  control: Control<any>;
  setValue: (name: any, value: any) => void;
  surveyTags: SurveyTagsReturn;
  refetchTags: () => void;
};

const TagsForm = ({ control, setValue, surveyTags, refetchTags }: TagsFormProps) => {
  const [openSelectTags, setOpenSelectTags] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const { mutateAsync: create } = usePostSurveyTags();

  const createNewTag = async () => {
    await create(searchInput);
    refetchTags();
  };

  return (
    <div>
      <FormLabel htmlFor="tags" className="text-sm">Tags</FormLabel>
      <FormField
        control={control}
        name="tags"
        render={({ field }) => (
          <div className="mt-1">
            <Popover open={openSelectTags} onOpenChange={setOpenSelectTags}>
              <PopoverTrigger asChild>
                <Button
                  id="tags"
                  variant="outline"
                  role="combobox"
                  aria-expanded={openSelectTags}
                  className="w-[200px] justify-between"
                >
                  {field.value.length
                    ? field.value.map((tag: SurveyTag) => tag.description).join(", ")
                    : "Select tag..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search tags..." value={searchInput} onChangeCapture={(e) => setSearchInput(e.currentTarget.value)} />
                  <CommandList>
                    <CommandEmpty>
                      {`No tag found for '${searchInput}'`}
                      <Button onClick={createNewTag} className="my-2" variant="outline">Create New Tag</Button>
                    </CommandEmpty>
                    <CommandGroup>
                      {surveyTags.data.map((tag: SurveyTag) => (
                        <CommandItem
                          {...field}
                          key={`${tag.id}-item`}
                          value={tag.description}
                          onSelect={(currentTag) => {
                            const selectedTag = surveyTags.data.find((tag: SurveyTag) => tag.description === currentTag);
                            if (selectedTag) {
                              const tagSelectedAlready = field.value.some(({ id }: SurveyTag) => id === selectedTag.id);
                              setValue('tags', tagSelectedAlready ? field.value.filter(({ id }: SurveyTag) => id != selectedTag.id) : [...field.value, selectedTag]);
                            }
                          }}
                        >
                          <Check
                            key={`${tag.id}-check`}
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value.some(({ id }: SurveyTag) => id === tag.id) ? "opacity-100" : "opacity-0"
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
        )}
      />
    </div>
  );
};

export default TagsForm;