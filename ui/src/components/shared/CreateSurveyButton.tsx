'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const CreateSurveyButton = () => {
  const router = useRouter();

  const goToCreateSurvey = () => {
    router.push("/surveys/create");
  };

  return (
    <Button onClick={goToCreateSurvey}>
      Create Survey
    </Button>
  );
}

export default CreateSurveyButton;