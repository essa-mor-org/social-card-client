import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { SocialCardCommentsContainer } from './SocialCardCommentsContainer';

describe('SocialCardCommentsContainer test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardCommentsContainer id={1} profileName="profileName" profileImage="profileImage" postComments={[]}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - comment callback', () => {
		const postId = 1,
			profileName = "profileText",
			profileImage = "profileImage",
			comment = "hi";

		const commentCallBack = jest.fn();
		const wrapper = mount(<SocialCardCommentsContainer
			id={postId}
			commentOnPost={commentCallBack}
			profileName={profileName}
			profileImage={profileImage}
			postComments={[]} />);
		const input = wrapper.find('.Social_comments_input');
		input.simulate('keyPress', { key: 'Enter', target: { value: 'hi' } });
		expect(commentCallBack).toHaveBeenCalledWith({ postId, profileName, profileImage, comment });
	});
});
