import { fromJS } from 'immutable';
import { makeGetPostCommentsSelector } from './Comments';

const state = fromJS({
    entities: {
        posts: { byId: { '1': { 'postComments': [1] }, '2': { 'postComments': [1, 2] }, '3': { 'postComments': [] } } },
        postComments: { byId: { '1': { 'id': 1 }, '2': { 'id': 2 } } }
    }
});

describe('Comments selector test', () => {
    it('return result - 1 comment', () => {
        expect(makeGetPostCommentsSelector()(state, { id: 1 })).toEqual([{
            "comment": undefined,
            "id": 1,
            "profileImage": undefined,
            "profileName": undefined,
        }]);
    });

    it('return result - 2 comment', () => {
        expect(makeGetPostCommentsSelector()(state, { id: 2 })).toEqual([{
            "comment": undefined,
            "id": 1,
            "profileImage": undefined,
            "profileName": undefined,
        },
        {
            "comment": undefined,
            "id": 2,
            "profileImage": undefined,
            "profileName": undefined,
        }]);
    });

    it('post has not comments - returns empty', () => {
        expect(makeGetPostCommentsSelector()(state, { id: 3 })).toEqual([]);
    });

    it('post not exist - returns empty', () => {
        expect(makeGetPostCommentsSelector()(state, { id: 4 })).toEqual([]);
    });
});