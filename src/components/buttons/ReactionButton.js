import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 

import './ReactionButton.css';

function ReactionButton({ className, text }) {
	const cls = classNames(className, 'Reaction_button');
	return (<a className={cls} href="#">{text}</a>);
}

ReactionButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default ReactionButton;