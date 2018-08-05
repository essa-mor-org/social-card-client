import React from 'react';
import SocialCard from './SocialCard';
import { mount } from 'enzyme';

describe('SocialCard test', () => {
	it('renders correctly - comment callback', () => {
		const postId = 1,
			profileName = "profileText",
			profileImage = "profileImage",
			comment = "hi";

		const commentCallBack = jest.fn();
		const wrapper = mount(<SocialCard
			id={postId}
			commentCallBack={commentCallBack}
			profileText={profileName}
			profileImage={profileImage}
			postComments={[]}
			image=""
			time=""
			postImage=""
			likeCallBack={jest.fn()}
			shareCallBack={jest.fn()}
			text="" />);
		const input = wrapper.find('.Social_comments_input');
		console.log('input:', input);
		input.simulate('keyPress', { key: 'Enter', target: { value: 'hi' } });
		expect(commentCallBack).toHaveBeenCalledWith({ postId, profileName, profileImage, comment });
	});
});
