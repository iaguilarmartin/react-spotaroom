import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('<Button />', () => {
	const renderComponent = (props) => {
		return shallow(<Button text="Testing" {...props}/>);
	};

	it('renders without crashing', () => {
		renderComponent();
	});

	it('renders a <button> tag', () => {
		const component = renderComponent();
		expect(component.find('button').length).toEqual(1);
	});

	it('handles click events', () => {
		const clickedFn = jest.fn();
		const component = renderComponent({onButtonClick: clickedFn});
		component.find('button').simulate('click');
		expect(clickedFn).toHaveBeenCalled();
	});

	it('has a className attribute', () => {
		const component = renderComponent();
		expect(component.find('button').prop('className')).toEqual('button ');
	});

	it('renders type prop correctly inside className attribute', () => {
		const component = renderComponent({type: 'test'});
		expect(component.find('button').prop('className')).toEqual('button test');
	});
});