import type { users as User } from '@prisma/client';
import { prisma } from '../utils/prisma';

type CreateUserPayload = Pick<User, "email" | "password" | "name">;

export const getAllUsers = async () => {
  return prisma.users.findMany({
    select: {
      id: true,
      email: true,
      name: true
    }
  });
};

export const createUser = async (user: User) => {
  return await prisma.users.create({
    data: user,
    select: {
      id: true,
      email: true,
      name: true
    }
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
};
