import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ReactionButton from '../buttons/ReactionButton';

import './SocialCardReact.css';

class SocialCardReact extends PureComponent {
	constructor(props) {
		super(props);
		this.like = this.like.bind(this);
		this.share = this.share.bind(this);
	}

	like() {
		const { id, like, likes, onLike } = this.props;
		onLike({ id, likes, like });
	}

	share() {
		const { id, shares, onShare } = this.props;
		onShare({ id, shares });
	}

	render() {
		const { like, onComment } = this.props;
		const likeCls = classNames({ "Reaction_like": !like }, { 'Reaction_like_active': like }, { 'Reaction_like_text_active': like });
		return (<div className="Social_react">
			<ReactionButton text="Like" className={likeCls} onClick={this.like} />
			<ReactionButton text="Comment" className="Reaction_comment" onClick={onComment} />
			<ReactionButton text="Share" className="Reaction_share" onClick={this.share} />
		</div>);
	}
}

SocialCardReact.propTypes = {
	id: PropTypes.number.isRequired,
	like: PropTypes.bool,
	likes: PropTypes.number,
	shares: PropTypes.number,
	onLike: PropTypes.func.isRequired,
	onComment: PropTypes.func.isRequired,
	onShare: PropTypes.func.isRequired
};

SocialCardReact.defaultProps = {
	like: false,
	likes: 0,
	shares: 0
}

export default SocialCardReact;
