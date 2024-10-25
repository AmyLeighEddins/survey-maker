import { NextFunction, Request, Response } from 'express';
import { RecipientsModel } from '../models';

const getAllEmployeeRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipients = await RecipientsModel.getAllEmployeeRecipients();

    return res.json(recipients);
  } catch (err) {
    next(err);
  }
};

const getAllExternalRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipients = await RecipientsModel.getAllExternalRecipients();

    return res.json(recipients);
  } catch (err) {
    next(err);
  }
};

export { getAllExternalRecipients, getAllEmployeeRecipients };
