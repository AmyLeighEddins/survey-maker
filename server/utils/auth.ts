
import jwt from 'jsonwebtoken';
import 'dotenv/config';

interface JWTPayload {
  sub: number;
}

const secretKey = process.env.SESSION_KEY ?? 'some-random-key';

export async function generateAccessToken(userId: number): Promise<string> {
  const payload: JWTPayload = { sub: userId };
  return jwt.sign(payload, secretKey, {
    expiresIn: '1d',
  });
}

export async function verifyAccessToken(
  accessToken: string
): Promise<string | JWTPayload> {
  return jwt.verify(accessToken, secretKey) as string | JWTPayload;
}