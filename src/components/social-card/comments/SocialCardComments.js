import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import Comment from './Comment';
import './SocialCardComments.css';

class SocialCardComments extends PureComponent {
	state = {
		comment: ''
	}

	constructor(props) {
		super(props);
		this.keyPress = this.keyPress.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	keyPress(event) {
		if (event.key === 'Enter') {
			const { onComment } = this.props;
			onComment(event.target.value);
			this.setState({ comment: 'a' });
		}
	}

	onInputChange(event) {
		this.setState({ comment: event.target.value });
	}

	render() {
		const { profileImage, comments, onComment } = this.props;
		const { comment } = this.state;
		return (<React.Fragment>
			<div className="Social_comments_input_panel">
				<img className="Social_comments_image" src={profileImage} alt="" />
				<input className="Social_comments_input" value={comment} type="text" placeholder="Write a comment..."
					onChange={this.onInputChange} onKeyPress={this.keyPress} />
			</div>
			{!empty(comments) && comments.map(({ id, profileImage, profileName, comment }) =>
				<Comment key={id} profileImage={profileImage} profileName={profileName} comment={comment} />)}
		</React.Fragment>);
	}
}

SocialCardComments.propTypes = {
	profileImage: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(PropTypes.shape({
		profileImage: PropTypes.string.isRequired,
		profileName: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	})),
	onComment: PropTypes.func.isRequired
};

export default SocialCardComments;