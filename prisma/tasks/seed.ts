import { PrismaClient } from '@prisma/client';
import * as data from '../data';
import { randInt } from '../helpers/randInt';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    data.posts.map(async (data) => await prisma.post.create({ data })),
    data.tags.map(async (data) => await prisma.tag.create({ data })),
  ]);

  const postIds = (await prisma.post.findMany()).map((post) => post.id);
  const tagIds = (await prisma.tag.findMany()).map((tag) => tag.id);

  for (const _ in [...Array(60)].map((i) => i)) {
    await prisma.tagsOnPosts
      .create({
        data: {
          postId: postIds[randInt(0, postIds.length)],
          tagId: tagIds[randInt(0, tagIds.length)],
        },
      })
      .catch((_err) => {});
  }
}

main();
