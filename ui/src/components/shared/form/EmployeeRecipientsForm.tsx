'use client';
import { useState } from "react";
import { Control } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
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
import { EmployeeRecipient as Recipient } from "@/hooks/api/types";

type RecipientsReturn = {
  isPending: boolean;
  error: Error | null;
  data: Recipient[];
  isFetching: boolean;
};

type RecipientsFormProps = {
  control: Control<any>;
  setValue: (name: any, value: any) => void;
  recipients: RecipientsReturn;
};

const EmployeeRecipientsForm = ({ control, setValue, recipients }: RecipientsFormProps) => {
  const [openSelectRecipients, setOpenSelectRecipients] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <FormLabel htmlFor="employeeRecipients" className="text-sm">Employee Recipients</FormLabel>
      <FormField
        control={control}
        name="employeeRecipients"
        render={({ field }) => (
          <div className="mt-1">
            <Popover open={openSelectRecipients} onOpenChange={setOpenSelectRecipients}>
              <PopoverTrigger asChild>
                <Button
                  id="employeeRecipients"
                  variant="outline"
                  role="combobox"
                  aria-expanded={openSelectRecipients}
                  className="w-full justify-between"
                >
                  {field.value?.length
                    ? `${field.value.length} employee recipient${field.value.length > 1 ? 's' : ''} selected`
                    : "Select employee recipients..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search Employee Recipients..." value={searchInput} onChangeCapture={(e) => setSearchInput(e.currentTarget.value)} />
                  <CommandList>
                    <CommandGroup>
                      {recipients.data?.map((recipient: Recipient) => (
                        <CommandItem
                          {...field}
                          key={`${recipient.employee_id}-item`}
                          value={recipient.employee_id.toString()}
                          onSelect={(currentRecipient) => {
                            const selectedRecipient = recipients.data.find((recipient: Recipient) => recipient.employee_id.toString() === currentRecipient);
                            if (selectedRecipient) {
                              const recipientSelectedAlready = field.value?.some(({ employee_id }: Recipient) => employee_id === selectedRecipient.employee_id);
                              setValue('employeeRecipients', recipientSelectedAlready ? field.value?.filter(({ employee_id }: Recipient) => employee_id != selectedRecipient.employee_id) : [...field.value || [], selectedRecipient]);
                            }
                          }}
                        >
                          <Check
                            key={`${recipient.employee_id}-check`}
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value?.some(({ employee_id }: Recipient) => employee_id === recipient.employee_id) ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {recipient.employee_id}
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

export default EmployeeRecipientsForm;