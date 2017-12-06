import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import Filters from '../Filters';
import Properties from '../Properties';
import api from '../../utils/api';
import './styles.css';

class App extends Component {

	componentDidMount() {
		api.properties.get()
			.then(properties => {
				console.log(properties);
			});
	}

	render() {
		return (
			<div className="wrapper">
				<header>
					<NavigationBar/>
				</header>
				<div className="container">
					<Filters
						onSortCriteriaChanged={ascending => { console.log(ascending); }}
						onPropertyTypeSelected={propertyType => { console.log(propertyType); }}
						onDownloadJSON={(propertyType, ascending) => { console.log(propertyType, ascending); }}
					/>
					<Properties/>
				</div>
			</div>
		);
	}
}

export default App;
