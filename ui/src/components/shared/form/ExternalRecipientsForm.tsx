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
import { ExternalRecipient as Recipient } from "@/hooks/api/types";

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

const ExternalRecipientsForm = ({ control, setValue, recipients }: RecipientsFormProps) => {
  const [openSelectRecipients, setOpenSelectRecipients] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <FormLabel htmlFor="externalRecipients" className="text-sm">External Recipients</FormLabel>
      <FormField
        control={control}
        name="externalRecipients"
        render={({ field }) => (
          <div className="mt-1">
            <Popover open={openSelectRecipients} onOpenChange={setOpenSelectRecipients}>
              <PopoverTrigger asChild>
                <Button
                  id="externalRecipients"
                  variant="outline"
                  role="combobox"
                  aria-expanded={openSelectRecipients}
                  className="w-full justify-between"
                >
                  {field.value?.length
                    ? `${field.value.length} external recipient${field.value.length > 1 ? 's' : ''} selected`
                    : "Select external recipients..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search External Recipients..." value={searchInput} onChangeCapture={(e) => setSearchInput(e.currentTarget.value)} />
                  <CommandList>
                    <CommandGroup>
                      {recipients.data?.map((recipient: Recipient) => (
                        <CommandItem
                          {...field}
                          key={`${recipient.email_address}-item`}
                          value={recipient.email_address.toString()}
                          onSelect={(currentRecipient) => {
                            const selectedRecipient = recipients.data.find((recipient: Recipient) => recipient.email_address.toString() === currentRecipient);
                            if (selectedRecipient) {
                              const recipientSelectedAlready = field.value?.some(({ email_address }: Recipient) => email_address === selectedRecipient.email_address);
                              setValue('externalRecipients', recipientSelectedAlready ? field.value?.filter(({ email_address }: Recipient) => email_address != selectedRecipient.email_address) : [...field.value || [], selectedRecipient]);
                            }
                          }}
                        >
                          <Check
                            key={`${recipient.email_address}-check`}
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value?.some(({ email_address }: Recipient) => email_address === recipient.email_address) ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {recipient.email_address}
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

export default ExternalRecipientsForm;