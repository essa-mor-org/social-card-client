import { Map, fromJS } from 'immutable';
import empty from 'is-empty';

const INITIAL_STATE = new Map({ byId : {} });

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	default: {
		const posts = fromJS(action).getIn(['payload', 'entities', 'posts'], {});
		if (!empty(posts)) {
			return state.set('byId', posts);
		}
		return state;
	}
	}
}