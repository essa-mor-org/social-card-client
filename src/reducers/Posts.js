const INITIAL_STATE = { postsList: { posts: [], error: null, loading: false } };

export default function(state = INITIAL_STATE, action) {
	if(action.type){
		return state;
	}
	return state;
}