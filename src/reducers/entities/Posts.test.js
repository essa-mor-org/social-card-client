import reducer from './Posts';
import { fromJS } from 'immutable';

import { POSTS_LIKE_SUCCESS, POSTS_SHARE_SUCCESS } from '../../actions/Posts';

describe('posts reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {}).toJS()).toEqual({ byId: {} });
	});

	it('should update state from payload', () => {
		const action = { payload: { entities: { posts: { '1': { 'a': 'b' } } } } };
		expect(reducer(undefined, action).toJS()).toEqual({ byId: { '1': { 'a': 'b' } } });
	});

	it('like action update reducer', () => {
		const action = { type: POSTS_LIKE_SUCCESS, payload: { id: 1, likes: 1, like: true } };
		expect(reducer(fromJS({ byId: { '1': { like: false, likes: 0 } } }), action).toJS()).toEqual({ byId: { '1': { like: true, likes: 1 } } });
	});

	it('share action update reducer', () => {
		const action = { type: POSTS_SHARE_SUCCESS, payload: { id: 1, shares: 1 } };
		expect(reducer(fromJS({ byId: { '1': { shares: 0 } } }), action).toJS()).toEqual({ byId: { '1': { shares: 1 } } });
	});
});