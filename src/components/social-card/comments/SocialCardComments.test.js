import React from 'react';
import SocialCardComments from './SocialCardComments';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('SocialCardComments test', () => {
	it('renders correctly - no comments', () => {
		const tree = renderer
			.create(<SocialCardComments
				onComment={jest.fn()}
				profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - with comments', () => {
		const tree = renderer
			.create(<SocialCardComments
				onComment={jest.fn()}
				profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg"
				comments={[{
					id: 1,
					profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg',
					profileName: 'Vevo',
					comment: 'Hi'
				}]} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - add comment and press enter', () => {
		const commentCallBack = jest.fn();
		const wrapper = mount(<SocialCardComments
			onComment={commentCallBack}
			profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg" />);
		const input = wrapper.find('.Social_comments_input');
		input.simulate('keyPress',{key: 'Enter', target:{value:'abc'}});
		expect(commentCallBack).toHaveBeenCalledWith('abc');
		expect(wrapper.state('comment')).toBe('');
	});

	it('renders correctly - add comment do not press enter', () => {
		const commentCallBack = jest.fn();
		const wrapper = shallow(<SocialCardComments
			onComment={commentCallBack}
			profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg" />);
		wrapper.find('.Social_comments_input').simulate('keyPress',{key: '', target:{value:'abc'}});
		expect(commentCallBack).toHaveBeenCalledTimes(0);
	});
});
