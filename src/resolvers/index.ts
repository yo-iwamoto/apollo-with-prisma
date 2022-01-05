import { postResolver } from './post';
import { tagResolver } from './tag';

export const resolvers = { ...postResolver, ...tagResolver };
