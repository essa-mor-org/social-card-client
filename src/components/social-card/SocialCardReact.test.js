import React from 'react';
import SocialCardReact from './SocialCardReact';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('SocialCardReact test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardReact id={1} onLike={jest.fn()} onComment={jest.fn()} onShare={jest.fn()}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - like is true', () => {
		const tree = renderer
			.create(<SocialCardReact id={1} like={true} onLike={jest.fn()} onComment={jest.fn()} onShare={jest.fn()}/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - click callback', () => {
		const likeCallBack = jest.fn();
		const commentCallBack = jest.fn();
		const shareCallBack = jest.fn();
		const wrapper = shallow(<SocialCardReact 
			id={1}
			onLike={likeCallBack} 
			onComment={commentCallBack}
			onShare={shareCallBack}/>);
		wrapper.find('.Reaction_like').simulate('click');
		expect(likeCallBack).toHaveBeenCalledWith({id:1, like: false, likes:0});
		wrapper.find('.Reaction_comment').simulate('click');
		expect(commentCallBack).toHaveBeenCalledTimes(1);
		wrapper.find('.Reaction_share').simulate('click');
		expect(shareCallBack).toHaveBeenCalledTimes(1);
	});
});
