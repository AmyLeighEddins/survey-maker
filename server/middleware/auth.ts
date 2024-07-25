import { NextFunction, Request, Response } from 'express';

export async function authMiddlewareExample(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization?.split(' ')[1];
  if (!authToken || authToken !== 'some-random-string') {
    return res.sendStatus(401);
  }

  // Verify/Parse the token and grab the userID
  const userId = 1;

  res.locals.user_id = userId;
  return next();
}