import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.css';

class Filters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			propertyType: '',
			sortDescending: false
		};
	}

	sortCriteriaChanged(e) {
		const sortDescending = e.target.value;
		this.setState({sortDescending});
		this.props.onSortCriteriaChanged(sortDescending);
	}

	propertyTypeChanged(e) {
		const propertyType = e.target.value;
		this.setState({propertyType});
		this.props.onPropertyTypeSelected(propertyType);
	}

	downloadJSON(e) {
		e.preventDefault();

		const {propertyType, sortDescending} = this.state;
		this.props.onDownloadJSON(propertyType, sortDescending);

		return false;
	}

	render() {
		const {propertyType, sortDescending} = this.state;

		return (
			<section className="filters">
				<h2>Filtros</h2>
				<form>
					<label htmlFor="propertyTypeSelect">Property type</label>
					<select id="propertyTypeSelect" value={propertyType} onChange={e => this.propertyTypeChanged(e)}>
						<option value="">All</option>
						<option value="apartments">Apartments</option>
						<option value="rooms">Rooms</option>
						<option value="studios">Studios</option>
						<option value="residences">Residences</option>
					</select>
					<label htmlFor="sortCriteriaSelect">Sort by price</label>
					<select id="sortCriteriaSelect" value={sortDescending} onChange={e => this.sortCriteriaChanged(e)}>
						<option value="false">Ascending</option>
						<option value="true">Descending</option>
					</select>
					<Button type="primary" onButtonClick={e => this.downloadJSON(e)} text="Download JSON"></Button>
				</form>
			</section>
		);
	}
}

Filters.propTypes = {
	onSortCriteriaChanged: PropTypes.func,
	onPropertyTypeSelected: PropTypes.func,
	onDownloadJSON: PropTypes.func
};

export default Filters;