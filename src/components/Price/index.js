import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Price = function({amount, symbol}) {
	return(
		<span className="price">{`${amount}${symbol || '€'}`}</span>
	);
};

Price.propTypes = {
	amount: PropTypes.number.isRequired,
	symbol: PropTypes.string
};

export default Price;