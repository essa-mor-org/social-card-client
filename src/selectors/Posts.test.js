import { fromJS } from 'immutable';
import { postsSelector } from './Posts';

describe('Posts selector test', () => {
	it('return result', () => {
		const state = fromJS({ entities: { posts: { byId: { '1': { 'a': 'b'} } } } });
		expect(postsSelector(state).toJS()).toEqual({'1':{'a':'b'}});
	});
    
	it('return empty', () => {
		const state = fromJS({ entities: { }});
		expect(postsSelector(state).toJS()).toEqual({});
	});
});