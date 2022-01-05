import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const postResolver = {
  Query: {
    posts: () =>
      prisma.post.findMany({
        include: {
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                  colorCode: true,
                },
              },
            },
          },
        },
      }),
  },
};
