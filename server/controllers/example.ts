import { Request, Response } from 'express';
import { exampleModel } from '../models';

const getExamples = async (req: Request, res: Response) => {
  const examples = await exampleModel.getAllExamples();
  return res.json(examples);
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await exampleModel.getAllUsers();
  return res.json(users);
};

export { getExamples, getAllUsers };