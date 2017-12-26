import React from 'react';
import PropTypes from 'prop-types';
import Property from '../Property';
import './styles.css';

function renderPropertyList(properties, total) {
	return  (
		<section className="properties-container">
			<div className="results-count">Displaying {properties.length} results from {total} properties available</div>
			<div className="properties">
				{properties.map(property => (
					<Property key={property.id} item={property}>
					</Property>
				))}
			</div>
		</section>
	);
}

function renderLoading() {
	return (
		<section className="message-container">
			<span>Loading data....</span>
		</section>
	);
}

function renderNoResuls() {
	return (
		<section className="message-container">
			<span>No properties have been found</span>
		</section>
	);
}

const Properties = function ({ items, loading, total }) {
	if (loading) {
		return renderLoading();
	} else if (items && items.length > 0) {
		return renderPropertyList(items, total);
	} else {
		return renderNoResuls();
	}
};

Properties.propTypes = {
	items: PropTypes.array,
	total: PropTypes.number.isRequired,
	loading: PropTypes.bool
};

export default Properties;