import { fromJS } from 'immutable';
import React from 'react';
import MockProvider, { getMockStore } from 'redux-mock-provider';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { SocialCardsContainer } from './SocialCardsContainer';

const posts = fromJS({
	'1': {
		'id': 1,
		'image': 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/19554009_10154562736535933_8492592550808364419_n.jpg?_nc_cat=0&oh=e2dcab39740d500b15ab15c33715c1cb&oe=5BEA19A5',
		'profileText': 'Vevo',
		'time': '3 hrs',
		'text': 'Calling all Guns N\' Roses fans! Here\'s your chance to win the Appetite For Destruction Super Deluxe Box Set‼️ Enter now for your chance to win!',
		'postImage': 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-9/36907526_10155523573880933_4550184912837148672_n.jpg?_nc_cat=0&oh=907c9bbce64ffe2808a821fb673f140d&oe=5BA005E7',
		'likes': 157,
		'shares': 3,
		'profileImage': 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p48x48/14572897_10209280775468762_3731006062202010506_n.jpg?_nc_cat=0&oh=41eba23bde8e0c43e709a6a9f9867c55&oe=5BDD6AD2',
		'profileName': "Essa Mor",
		"postComments": []
	}
});

const store = getMockStore({
	key: 'entities',
	state: {}
});

store.getState = () => fromJS({
	'entities':
	{
		'posts':
			{ 'byId': { '1': { 'profileImage': 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p48x48/14572897_10209280775468762_3731006062202010506_n.jpg?_nc_cat=0&oh=41eba23bde8e0c43e709a6a9f9867c55&oe=5BDD6AD2' } } }
	}
});

describe('SocialCardsContainer test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<MockProvider store={store}><SocialCardsContainer posts={posts}
				fetchPosts={jest.fn()} likePost={jest.fn()} sharePost={jest.fn()} /></MockProvider>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('call fetchPosts', () => {
		const callBack = jest.fn();
		mount(<MockProvider store={store}><SocialCardsContainer posts={posts}
			fetchPosts={callBack} likePost={jest.fn()} sharePost={jest.fn()} /></MockProvider>);
		expect(callBack).toHaveBeenCalledTimes(1);
	});
});
