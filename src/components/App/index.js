import React, { Component } from 'react';
import fileDownload from 'react-file-download';
import NavigationBar from '../NavigationBar';
import Filters from '../Filters';
import Properties from '../Properties';
import api from '../../utils/api';
import './styles.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			properties: null,
			total: 0,
			loadingProperties: true,
			sortDescending: false,
			propertyType: ''
		};
	}

	componentDidMount() {
		this.requestProperties(this.state.propertyType);
	}

	requestProperties(type) {
		const city = this.getCityFromLocation(window.location);

		api.properties.get(type, city)
			.then(({total, items}) => {
				this.setState(state => {
					return {
						loadingProperties: false,
						total,
						properties: this.sortProperties(items, state.sortDescending)
					};
				});
			});
	}

	sortProperties(properties, sortDescending = false) {
		if (!properties || !Array.isArray(properties)) {
			return null;
		}

		return properties.sort((a, b) => {
			if (!a || !a.monthlyPrice || !a.monthlyPrice.minimumPrice) {
				throw new Error('Invalid object inside properties array');
			}

			if (!b || !b.monthlyPrice || !b.monthlyPrice.minimumPrice) {
				throw new Error('Invalid object inside properties array');
			}

			return sortDescending ?
				b.monthlyPrice.minimumPrice - a.monthlyPrice.minimumPrice :
				a.monthlyPrice.minimumPrice - b.monthlyPrice.minimumPrice;
		});
	}

	getCityFromLocation(location) {
		const regex = /^[a-zA-Z]+$/;
		const path = location && location.pathname;
		if (path && path.startsWith('/') && path.length > 1 && path.substring(1).match(regex)) {
			return path.substring(1).toLowerCase();
		}
		return undefined;
	}

	exportPropertiesToJSON = () => {
		const data = JSON.stringify(this.state.properties);
		fileDownload(data, 'properties.json');
	};

	sortCriteriaChanged = (sortDescending) => {
		this.setState(state => {
			return {
				sortDescending,
				properties: this.sortProperties(state.properties, sortDescending)
			};
		});
	};

	propertyTypeChanged = (propertyType) => {
		this.setState({propertyType, properties: null, loadingProperties: true, total: 0});
		this.requestProperties(propertyType);
	};

	render() {
		const {properties, sortDescending, propertyType, loadingProperties, total} = this.state;

		return (
			<div className="wrapper">
				<header>
					<NavigationBar/>
				</header>
				<div className="container">
					<Filters
						sortDescending={sortDescending}
						propertyType={propertyType}
						onSortCriteriaChanged={this.sortCriteriaChanged}
						onPropertyTypeSelected={this.propertyTypeChanged}
						onDownloadJSON={this.exportPropertiesToJSON}
					/>
					<Properties loading={loadingProperties} items={properties} total={total}/>
				</div>
			</div>
		);
	}
}

export default App;
