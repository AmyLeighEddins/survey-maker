'use server';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { getUserFromToken } from '@/utils/user';

export const setAuthCookie = (
  value: string,
  options?: Partial<ResponseCookie>
) => {
  cookies().set('coe-auth', value, options);
};

export const getAuthCookie = async () => {
  return cookies().get('coe-auth')?.value;
};

export const getUser = async () => {
  const token = await getAuthCookie();
  return getUserFromToken(token);
};

export const logout = () => {
  cookies().delete('coe-auth');
};