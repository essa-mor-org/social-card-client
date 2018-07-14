import React from 'react';
import Comment from './Comment';
import renderer from 'react-test-renderer';

describe('Comment test', () => {
	it('renders correctly - proprties', () => {
		const tree = renderer
			.create(<Comment />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - proprties', () => {
		const tree = renderer
			.create(<Comment
				profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg"
				profileName="Vevo"
				comment="Hi there." />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
