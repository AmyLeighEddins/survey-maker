import { SurveyResponseItem } from '../../models';
import { prisma } from '../../../utils/prisma';

export const getSurveyExternalResponses = async (survey_id: number, recipient_id?: number, question_id?: number) => {
  return await prisma.surveyexternalrecipients.findMany({
    where: {
      survey_id,
      ...(recipient_id !== undefined && { id: recipient_id }),
    },
    include: {
      surveyexternalresponses: {
        where: {
          surveyresponseitems: {
            ...(question_id !== undefined && { survey_question_id: question_id }),
          }
        },
        include: {
          surveyresponseitems: true,
        }
      },
    }
  });
};

export const createSurveyExternalResponses = async (recipient_id: number, surveyResponseItems: SurveyResponseItem[]) => {
  return await Promise.all(surveyResponseItems.map(async (surveyResponseItem) => {
    const responseItem = await prisma.surveyresponseitems.create({
      data: surveyResponseItem,
    });
    const response = await prisma.surveyexternalresponses.create({
      data: {
        survey_external_recipient_id: recipient_id,
        survey_response_item_id: responseItem.id,
      },
    });
    return { response, responseItem };
  }));
};

export const updateSurveyExternalResponses = async (surveyResponseItems: SurveyResponseItem[]) => {
  return await Promise.all(surveyResponseItems.map(async (surveyResponseItem) => {
    return await prisma.surveyresponseitems.update({
      where: {
        id: surveyResponseItem.id,
      },
      data: surveyResponseItem,
    });
  }));
};

export const deleteSurveyExternalResponses = async (recipient_id: number) => {
  const surveyRecipientExternalResponses = await prisma.surveyexternalresponses.findMany({
    where: {
      survey_external_recipient_id: recipient_id,
    },
  });

  const deleteArray: any[] = [];

  surveyRecipientExternalResponses.map(async (surveyRecipientExternalResponse) => {
    const surveyExternalResponse = prisma.surveyexternalresponses.deleteMany({
      where: {
        survey_response_item_id: surveyRecipientExternalResponse.survey_response_item_id,
      },
    });
    const surveyResponseItem = prisma.surveyresponseitems.delete({
      where: {
        id: surveyRecipientExternalResponse.survey_response_item_id,
      },
    });
    deleteArray.push(surveyExternalResponse, surveyResponseItem);
  });

  return await prisma.$transaction(deleteArray);
};

export const deleteASurveyExternalResponse = async (response_item_id: number) => {
  const surveyExternalResponse = prisma.surveyexternalresponses.deleteMany({
    where: {
      survey_response_item_id: response_item_id,
    },
  });

  const surveyResponseItem = prisma.surveyresponseitems.delete({
    where: {
      id: response_item_id,
    },
  });

  return await prisma.$transaction([ surveyExternalResponse, surveyResponseItem ]);
};