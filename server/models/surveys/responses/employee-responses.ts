import { SurveyResponseItem } from '../../models';
import { prisma } from '../../../utils/prisma';

export const getSurveyEmployeeResponses = async (survey_id: number, recipient_id?: number, question_id?: number) => {
  return await prisma.surveyemployeerecipients.findMany({
    where: {
      survey_id,
      ...(recipient_id !== undefined && { id: recipient_id }),
    },
    include: {
      surveyemployeeresponses: {
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

export const createSurveyEmployeeResponses = async (recipient_id: number, surveyResponseItems: SurveyResponseItem[]) => {
  return await Promise.all(surveyResponseItems.map(async (surveyResponseItem) => {
    const responseItem = await prisma.surveyresponseitems.create({
      data: surveyResponseItem,
    });
    const response = await prisma.surveyemployeeresponses.create({
      data: {
        survey_employee_recipient_id: recipient_id,
        survey_response_item_id: responseItem.id,
      },
    });
    return { response, responseItem };
  }));
};

export const updateSurveyEmployeeResponses = async (surveyResponseItems: SurveyResponseItem[]) => {
  return await Promise.all(surveyResponseItems.map(async (surveyResponseItem) => {
    return await prisma.surveyresponseitems.update({
      where: {
        id: surveyResponseItem.id,
      },
      data: surveyResponseItem,
    });
  }));
};

export const deleteSurveyEmployeeResponses = async (recipient_id: number) => {
  const surveyRecipientEmployeeResponses = await prisma.surveyemployeeresponses.findMany({
    where: {
      survey_employee_recipient_id: recipient_id,
    },
  });

  const deleteArray: any[] = [];

  surveyRecipientEmployeeResponses.map(async (surveyRecipientEmployeeResponse) => {
    const surveyEmployeeResponse = prisma.surveyemployeeresponses.deleteMany({
      where: {
        survey_response_item_id: surveyRecipientEmployeeResponse.survey_response_item_id,
      },
    });
    const surveyResponseItem = prisma.surveyresponseitems.delete({
      where: {
        id: surveyRecipientEmployeeResponse.survey_response_item_id,
      },
    });
    deleteArray.push([surveyEmployeeResponse, surveyResponseItem]);
  });

  return await prisma.$transaction(deleteArray);
};

export const deleteASurveyEmployeeResponse = async (response_item_id: number) => {
  const surveyEmployeeResponse = prisma.surveyemployeeresponses.deleteMany({
    where: {
      survey_response_item_id: response_item_id,
    },
  });

  const surveyResponseItem = prisma.surveyresponseitems.delete({
    where: {
      id: response_item_id,
    },
  });

  return await prisma.$transaction([ surveyEmployeeResponse, surveyResponseItem ]);
};