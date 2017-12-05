import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Filters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			propertyType: 'all',
			sortAscending: true
		};
	}

	sortCriteriaChanged(e) {
		const sortAscending = e.target.value;
		this.setState({sortAscending});
		this.props.onSortCriteriaChanged(sortAscending);
	}

	propertyTypeChanged(e) {
		const propertyType = e.target.value;
		this.setState({propertyType});
		this.props.onPropertyTypeSelected(propertyType);
	}

	downloadJSON(e) {
		e.preventDefault();

		const {propertyType, sortAscending} = this.state;
		this.props.onDownloadJSON(propertyType, sortAscending);

		return false;
	}

	render() {
		const {propertyType, sortAscending} = this.state;

		return (
			<section className="filters">
				<h2>Filtros</h2>
				<form>
					<label htmlFor="propertyTypeSelect">Property type</label>
					<select id="propertyTypeSelect" value={propertyType} onChange={e => this.propertyTypeChanged(e)}>
						<option value="all">All</option>
						<option value="apartments">Apartments</option>
						<option value="rooms">Rooms</option>
						<option value="studios">Studios</option>
						<option value="residences">Residences</option>
					</select>
					<label htmlFor="sortCriteriaSelect">Sort by price</label>
					<select id="sortCriteriaSelect" value={sortAscending} onChange={e => this.sortCriteriaChanged(e)}>
						<option value="true">Ascending</option>
						<option value="false">Descending</option>
					</select>
					<button onClick={e => this.downloadJSON(e)}>Download JSON</button>
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