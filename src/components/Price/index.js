import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Price = function({amount}) {
	return(
		<span className="price">{`${amount}€`}</span>
	);
};

Price.propTypes = {
	amount: PropTypes.number.isRequired
};

export default Price;