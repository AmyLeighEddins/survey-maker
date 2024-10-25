import { prisma } from '../utils/prisma';

export const getAllEmployeeRecipients = async () => {
  return await prisma.employeerecipients.findMany();
};

export const getAllExternalRecipients = async () => {
  return await prisma.externalrecipients.findMany();
};
