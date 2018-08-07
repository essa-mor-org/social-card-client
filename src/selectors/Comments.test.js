import { fromJS } from 'immutable';
import { makeGetPostCommentsSelector } from './Comments';

let state = fromJS({
    entities: {
        posts: { byId: { '1': { 'postComments': [1] }, '2': { 'postComments': [1, 2] }, '3': { 'postComments': [] } } },
        postComments: { byId: { '1': { 'id': 1 }, '2': { 'id': 2 } } }
    }
});

describe('Comments selector test', () => {
    beforeEach(()=>{
        makeGetPostCommentsSelector().resetRecomputations();
    });

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

    it('empty state - returns empty', () => {
        expect(makeGetPostCommentsSelector()(fromJS({}), { id: 2 })).toEqual([]);
    });

    it('manage to memorize', () => {
        const selector = makeGetPostCommentsSelector();
        selector(state, { id: 1 });
        expect(selector.recomputations()).toBe(1);
        state = state.updateIn(['entities', 'postComments', 'byId'],postComments => postComments.set('3',  fromJS({ 'id': 3 })));
        expect(selector.recomputations()).toBe(1);
        state = state.updateIn(['entities', 'posts', 'byId', '1', 'postComments'], postComments => postComments.push(2));
        selector(state, { id: 1 });
        expect(selector.recomputations()).toBe(2);
    });
});