import { Map, fromJS } from 'immutable';
import empty from 'is-empty';

const INITIAL_STATE = new Map({ byId: {} });

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	default: {
		const postComments = fromJS(action).getIn(['payload', 'entities', 'postComments'], {});
		if (!empty(postComments)) {
			return state.set('byId', postComments);
		}
		return state;
	}
	}
}