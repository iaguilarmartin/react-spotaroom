import React from 'react';
import { shallow } from 'enzyme';
import Price from './';

describe('<Price />', () => {
	const renderComponent = (props = {}) => {
		return shallow(<Price amount={props.amount || 100} {...props}/>);
	};

	it('renders without crashing', () => {
		renderComponent();
	});

	it('renders a <span> tag', () => {
		const component = renderComponent();
		expect(component.find('span').length).toEqual(1);
	});

	it('renders amount prop correctly', () => {
		const amount = 200;
		const component = renderComponent({amount});
		expect(component.find('span').text()).toEqual(amount + '€');
	});

	it('renders symbol prop correctly', () => {
		const symbol = '$';
		const component = renderComponent({symbol});
		expect(component.find('span').text()).toEqual(100 + symbol);
	});

	it('has a className attribute', () => {
		const component = renderComponent();
		expect(component.find('span').prop('className')).toEqual('price');
	});
});