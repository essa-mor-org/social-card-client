import { schema } from 'normalizr';

export const comment = new schema.Entity('postComments');

export const post = new schema.Entity('posts', { postComments: [comment] });