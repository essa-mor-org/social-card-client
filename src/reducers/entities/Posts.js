import { fromJS } from 'immutable';
import empty from 'is-empty';

const INITIAL_STATE = fromJS({ byId: {} });

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		default: {
			const p = fromJS(action);
			const posts = p.getIn(['payload', 'entities', 'posts'], {});
			if (!empty(posts)) {
				return state.set('byId', posts);
			}
			return state;
		}
	}
}