import React from 'react';
import './styles.css';
import Button from '../Button';
import Price from '../Price';
import PropTypes from 'prop-types';

const Property = function({item, rightToLeft}) {
	if(!item) {
		return null;
	}

	const {mainPhotoUrl:photo, title, monthlyPrice:price, currencySymbol} = item;

	return (
		<article className={`property ${rightToLeft ? 'inverted' : ''}`}>
			<img src={photo} alt={title}/>
			<div className="details">
				<p>
					{title}
				</p>
				<div>
					<Price amount={price.minimumPrice} symbol={currencySymbol}/>
				</div>
				<div className="buttons-container">
					<Button type="primary" text="Book now"/>
					<Button type="secondary" text="More details"/>
				</div>
			</div>
		</article>
	);
};

Property.propTypes = {
	item: PropTypes.object.isRequired,
	rightToLeft: PropTypes.bool
};

export default Property;