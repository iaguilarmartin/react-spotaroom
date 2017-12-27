import React from 'react';
import { shallow } from 'enzyme';
import Filters from './';

describe('<Filters />', () => {
	const renderComponent = (props = {}) => {
		return shallow(<Filters {...props}/>);
	};

	it('renders without crashing', () => {
		renderComponent();
	});

	it('renders a <section> tag', () => {
		const component = renderComponent();
		expect(component.find('section').length).toEqual(1);
	});

	it('renders a <form> tag', () => {
		const component = renderComponent();
		expect(component.find('form').length).toEqual(1);
	});

	it('renders a <Button /> Component', () => {
		const component = renderComponent();
		expect(component.find('Button').length).toEqual(1);
	});

	it('renders two <select> tags', () => {
		const component = renderComponent();
		expect(component.find('select').length).toEqual(2);
	});

	it('sets propertyTypeSelect default value to propertyType prop value', () => {
		const mockPropertyType = 'rooms';
		const component = renderComponent({propertyType: mockPropertyType});
		expect(component.find('#propertyTypeSelect').props().value).toEqual(mockPropertyType);
	});

	it('sets sortCriteriaSelect default value to sortDescending prop value', () => {
		const component = renderComponent({sortDescending: true});
		expect(component.find('#sortCriteriaSelect').props().value).toBe(true);
	});

	it('handles change events on propertyTypeSelect', () => {
		const changedFn = jest.fn();
		const component = renderComponent({onPropertyTypeSelected: changedFn});
		component.find('#propertyTypeSelect').simulate('change', { target: { value: 'rooms' }});
		expect(changedFn).toHaveBeenCalled();
	});

	it('handles change events on sortCriteriaSelect', () => {
		const changedFn = jest.fn();
		const component = renderComponent({onSortCriteriaChanged: changedFn});
		component.find('#sortCriteriaSelect').simulate('change', { target: { value: 'true' }});
		expect(changedFn).toHaveBeenCalled();
	});

	it('handles onDownloadJSON event', () => {
		const downloadJSONFn = jest.fn();
		const component = renderComponent({onDownloadJSON: downloadJSONFn});
		component.find('Button').simulate('buttonClick', {preventDefault: () => {}});
		expect(downloadJSONFn).toHaveBeenCalled();
	});
});