import reducer from './Posts';

describe('posts reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {}).toJS()).toEqual({ byId: {} });
	});

	it('should update state from payload', () => {
		const action = { payload: { entities: { posts: { '1': { 'a': 'b' } } } } };
		expect(reducer(undefined, action).toJS()).toEqual({ byId: { '1': { 'a': 'b' } } });
	});
});