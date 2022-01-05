import { Post } from '@prisma/client';
import { company, lorem } from 'faker';

export const posts: Pick<Post, 'title' | 'body'>[] = [...Array(10)].map((_) => ({
  title: company.companyName(),
  body: lorem.paragraphs(2),
}));
