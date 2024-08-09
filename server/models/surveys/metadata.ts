import { prisma } from '../../utils/prisma';

export const getSurveyMetadata = async (id: number) => {
  return await prisma.surveymetadata.findMany({
    where: {
      survey_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};
