import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.css';

const Filters = function({propertyType, sortDescending, onSortCriteriaChanged, onPropertyTypeSelected, onDownloadJSON}) {
	const downloadJSON = e => {
		e.preventDefault();
		onDownloadJSON();
		return false;
	};

	return (
		<section className="filters">
			<div className="filters-container">
				<h2>Filtros</h2>
				<form>
					<div className="form-group">
						<label htmlFor="propertyTypeSelect">Property type</label>
						<select id="propertyTypeSelect" value={propertyType} onChange={e => onPropertyTypeSelected(e.target.value)}>
							<option value="">All</option>
							<option value="apartments">Apartments</option>
							<option value="rooms">Rooms</option>
							<option value="studios">Studios</option>
							<option value="residences">Residences</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="sortCriteriaSelect">Sort by price</label>
						<select id="sortCriteriaSelect" value={sortDescending} onChange={e => onSortCriteriaChanged(e.target.value === 'true')}>
							<option value="false">Ascending</option>
							<option value="true">Descending</option>
						</select>
					</div>
					<Button onButtonClick={downloadJSON} type="primary" text="Download JSON"></Button>
				</form>
			</div>
		</section>
	);
};

Filters.propTypes = {
	propertyType: PropTypes.string,
	sortDescending: PropTypes.bool,
	onSortCriteriaChanged: PropTypes.func,
	onPropertyTypeSelected: PropTypes.func,
	onDownloadJSON: PropTypes.func
};

export default Filters;