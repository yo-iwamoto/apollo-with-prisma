import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const tagResolver = {
  Query: {
    tags: () =>
      prisma.tag.findMany({
        include: {
          posts: {
            select: {
              post: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      }),
  },
};
