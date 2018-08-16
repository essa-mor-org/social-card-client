import reducer from './Comments';

describe('comments reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {}).toJS()).toEqual({ byId: {} });
	});

	it('should update state from payload', () => {
		const action = { payload: { entities: { postComments: { '1': { 'a': 'b' } } } } };
		let newState = reducer(undefined, action);
		expect(newState.toJS()).toEqual({ byId: { '1': { 'a': 'b' } } });
		const action2 = { payload: { entities: { postComments: { '2': { 'c': 'd' } } } } };
		newState = reducer(newState, action2);
		expect(newState.toJS()).toEqual({ byId: { '1': { 'a': 'b' }, '2': { 'c': 'd' } } });
	});
});