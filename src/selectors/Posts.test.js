import { fromJS } from 'immutable';
import { getPostsSelector } from './Posts';

describe('Posts selector test', () => {
	beforeEach(()=>{
		getPostsSelector.resetRecomputations();
	});

	it('return result', () => {
		const state = fromJS({ entities: { posts: { byId: { '1': { 'a': 'b' } }, allIds: [1] } } });
		expect(getPostsSelector(state).toJS()).toEqual([{ 'a': 'b' }]);
	});

	it('return empty', () => {
		const state = fromJS({ entities: { posts: { byId: {}, allIds: [] } } });
		expect(getPostsSelector(state).toJS()).toEqual([]);
	});

	it('manage to memorize', () => {
		let state = fromJS({ entities: { 
			posts: { byId: { '1': { 'a': 'b' } }, allIds: [1] } } ,
			postComments: {byId: { '1': { 'a': 'b' } }}
		});
		getPostsSelector(state);
		expect(getPostsSelector.recomputations()).toBe(1);
		state = state.updateIn(['entities', 'postComments', 'byId', '1', 'b'], value => 'c');
		getPostsSelector(state);
		expect(getPostsSelector.recomputations()).toBe(1);
		state = state.updateIn(['entities', 'posts', 'byId', '1', 'b'], value => 'c');
		getPostsSelector(state);
		expect(getPostsSelector.recomputations()).toBe(2);
	});

});