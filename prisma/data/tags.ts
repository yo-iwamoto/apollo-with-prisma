import { Tag } from '@prisma/client';
import { commerce, internet } from 'faker';

export const tags: Pick<Tag, 'name' | 'colorCode'>[] = [...Array(10)].map((_) => ({
  name: commerce.product(),
  colorCode: internet.color().replace('#', ''),
}));
