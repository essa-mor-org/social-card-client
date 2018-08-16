import { fromJS } from 'immutable';
import { getPostsIds, getPost, getTotalCount } from './Posts';

describe('Posts selector test', () => {
	it('getPostsIds result', () => {
		const state = fromJS({ entities: { posts: { byId: { '1': { 'a': 'b' } }, allIds: [1] } } });
		expect(getPostsIds(state).toJS()).toEqual([1]);
	});

	it('getPost result', () => {
		const state = fromJS({ entities: { posts: { byId: { '1': { 'a': 'b' } }, allIds: [1] } } });
		expect(getPost(state, { id: 1 }).toJS()).toEqual({ 'a': 'b' });
	});

	it('getTotalCount result', () => {
		const state = fromJS({ entities: { posts: { byId: { '1': { 'a': 'b' } }, allIds: [1], totalCount: 10 } } });
		expect(getTotalCount(state)).toEqual(10);
	});
});