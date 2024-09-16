'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CreateTemplateButton = () => {
  const router = useRouter();

  const goToCreateTemplate = () => {
    router.push("/templates/create");
  };

  return (
    <Button onClick={goToCreateTemplate}>
      Create Template
    </Button>
  );
}

export default CreateTemplateButton;