import React from 'react';
import { shallow } from 'enzyme';
import Properties from './';

describe('<Properties />', () => {
	const renderComponent = (props = {}) => {
		return shallow(<Properties total={props.total || 0} {...props}/>);
	};

	it('renders without crashing', () => {
		renderComponent();
	});

	it('renders a <section> tag', () => {
		const component = renderComponent();
		expect(component.find('section').length).toEqual(1);
	});

	it('renders a "No properties have been found" message if items prop is null or undefined', () => {
		const renderedComponent = renderComponent();

		expect(renderedComponent.contains(
			<section className="message-container">
				<span>No properties have been found</span>
			</section>
		)).toEqual(true);
	});

	it('renders a loading message if loading prop is true', () => {
		const renderedComponent = renderComponent({loading: true});

		expect(renderedComponent.contains(
			<section className="message-container">
				<span>Loading data....</span>
			</section>
		)).toEqual(true);
	});

	it('renders a <Property /> Component for each item', () => {
		const mockItems = [
			{id: 1, title: 'Mock item 1'},
			{id: 2, title: 'Mock item 2'},
			{id: 3, title: 'Mock item 3'}
		];

		const component = renderComponent({items: mockItems});
		expect(component.find('Property').length).toEqual(mockItems.length);
	});
});