import React from 'react';
import SocialCardPost from './SocialCardPost';
import renderer from 'react-test-renderer';

describe('SocialCardPost test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardPost
				image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg"
				text="some text some text" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - no text', () => {
		const tree = renderer
			.create(<SocialCardPost
				image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
