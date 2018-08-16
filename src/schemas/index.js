import { schema } from 'normalizr';

export const totalCount = new schema.Entity('totalCount');

export const comment = new schema.Entity('postComments');

export const post = new schema.Entity('posts', { postComments: [comment] });

export const responseSchema = { posts: new schema.Array(post), totalCount };