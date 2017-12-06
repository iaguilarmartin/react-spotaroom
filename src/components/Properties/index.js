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

class Properties extends Component {
	render() {
		const { items } = this.props;

		return (
			<section className="properties">
				{ items && renderPropertyList(items) }
			</section>
		);
	}
}

Properties.propTypes = {
	items: PropTypes.array
};

export default Properties;