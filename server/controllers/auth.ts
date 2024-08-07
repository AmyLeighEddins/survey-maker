import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { UsersModel } from '../models';
import { generateAccessToken } from '../utils/auth';

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UsersModel.getAllUsers();
  return res.json(users);
};

const postSignUp = async (req: Request, res: Response) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const userdata = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const user = await UsersModel.createUser(userdata);

    const accessToken = await generateAccessToken(user.id);
    res.status(201).json({accessToken});
  } catch (err) {
    res.status(400).send('Could not sign up');
    console.error(err);
  }
};

const postSignIn = async (req: Request, res: Response) => {
  try {
    const user = await UsersModel.getUserByEmail(req.body.email);
    if (!user) throw new Error(`Invalid Email or Password`);

    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordsMatch) throw new Error('Invalid Email or Password');

    const accessToken = await generateAccessToken(user.id);
    res.status(201).json({accessToken});
  } catch (err) {
    res.status(400).send('Error logging in');
    console.error(err);
  }
};

export { getAllUsers, postSignUp, postSignIn };