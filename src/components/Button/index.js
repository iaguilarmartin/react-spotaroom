import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = function({text, type, onButtonClick}) {
	return(
		<button onClick={onButtonClick} className={`button ${type || ''}`}>{text}</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func,
	type: PropTypes.string
};

export default Button;