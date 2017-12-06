import React, { Component } from 'react';
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
			loadingProperties: true,
			sortDescending: false,
			propertyType: ''
		};
	}

	componentDidMount() {
		this.requestProperties(this.state.propertyType);
	}

	sortCriteriaChanged(sortDescending) {
		this.setState(state => {
			return {
				sortDescending,
				properties: this.sortProperties(state.properties, sortDescending)
			};
		});
	}

	propertyTypeChanged(propertyType) {
		this.setState({propertyType, properties: null, loadingProperties: true});
		this.requestProperties(propertyType);
	}

	requestProperties(type) {
		api.properties.get(type)
			.then(properties => {
				this.setState(state => {
					return {
						loadingProperties: false,
						properties: this.sortProperties(properties, state.sortDescending)
					};
				});
			});
	}

	sortProperties(properties, sortDescending) {
		return properties.sort((a, b) =>
			sortDescending ? b.monthlyPrice.minimumPrice - a.monthlyPrice.minimumPrice :
				a.monthlyPrice.minimumPrice - b.monthlyPrice.minimumPrice);
	}

	render() {
		const {properties, sortDescending, propertyType, loadingProperties} = this.state;

		return (
			<div className="wrapper">
				<header>
					<NavigationBar/>
				</header>
				<div className="container">
					<Filters
						sortDescending={sortDescending}
						propertyType={propertyType}
						onSortCriteriaChanged={descending => this.sortCriteriaChanged(descending)}
						onPropertyTypeSelected={propertyType => this.propertyTypeChanged(propertyType)}
						onDownloadJSON={(propertyType, ascending) => { console.log(propertyType, ascending); }}
					/>
					<Properties loading={loadingProperties} items={properties}/>
				</div>
			</div>
		);
	}
}

export default App;
