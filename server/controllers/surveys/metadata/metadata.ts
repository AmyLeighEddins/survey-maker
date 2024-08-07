import { NextFunction, Request, Response } from 'express';
import { SurveyMetadataModel, SurveyModel } from '../../../models';

const getSurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyMetadataModel.getSurveyMetadata(Number(req.params.id));
    return res.json(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

export {
  getSurveyMetadata,
};