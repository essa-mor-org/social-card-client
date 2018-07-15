import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ReactionButton.css';

function ReactionButton({ className, text, onClick }) {
	const cls = classNames(className, 'Reaction_button');
	return (<a className={cls} href="#" onClick={onClick}>{text}</a>);
}

ReactionButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

export default ReactionButton;