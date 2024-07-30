import { prisma } from "../utils/prisma";

export const getAllExamples = async () => {
  return [{
    id: 1,
    name: 'example',
  }, {
    id: 2,
    name: 'example',
  }]
};

export const getAllUsers = async () => {
  const users = prisma.users.findMany();
  return users;
};