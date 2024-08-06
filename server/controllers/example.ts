import { Request, Response } from 'express';
import { ExampleModel } from '../models';

const getExamples = async (req: Request, res: Response) => {
  const examples = await ExampleModel.getAllExamples();
  return res.json(examples);
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await ExampleModel.getAllUsers();
  return res.json(users);
};

const getUserById = async (req: Request, res: Response) => {
  // const userId = req.params.id;
  const user = await ExampleModel.getAllForUser(1);
  return res.json(user);
};

export { getExamples, getAllUsers, getUserById };