import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Property from '../Property';
import './styles.css';

function renderPropertyList(properties) {
	return properties.map((property, index) => (
		<Property key={property.id} item={property} rightToLeft={index % 2 === 0}>
		</Property>
	));
}

function renderLoading() {
	return (
		<div className="message-container">
			<span>Loading data....</span>
		</div>
	);
}

function renderNoResuls() {
	return (
		<div className="message-container">
			<span>No properties have been found, try again with a different filters combination</span>
		</div>
	);
}

function renderSection(component) {
	return (
		<section className="properties">
			{component}
		</section>
	);
}

class Properties extends Component {
	render() {
		const { items, loading } = this.props;

		let component = (<div></div>);

		if (loading) {
			component = renderLoading();
		} else if (items) {
			component = renderPropertyList(items);
		} else {
			component = renderNoResuls();
		}

		return renderSection(component);
	}
}

Properties.propTypes = {
	items: PropTypes.array,
	loading: PropTypes.bool
};

export default Properties;