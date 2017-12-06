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
			properties: null
		};
	}

	componentDidMount() {
		api.properties.get()
			.then(properties => {
				this.setState({properties});
			});
	}

	render() {
		const {properties} = this.state;

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
					<Properties items={properties}/>
				</div>
			</div>
		);
	}
}

export default App;
