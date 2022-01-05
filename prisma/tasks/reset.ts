import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    await prisma.tagsOnPosts.deleteMany(),
    await prisma.post.deleteMany(),
    await prisma.tag.deleteMany(),
  ]);
}

main();
