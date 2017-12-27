import React from 'react';
import { shallow } from 'enzyme';
import Property from './';

describe('<Property />', () => {
	const mockTitle = 'Test property';
	const mockSymbol = '$';
	const mockPhotoUrl = 'fakephoto.png';
	const mockMinPrice = 10;
	const mockPrice = {minimumPrice: mockMinPrice};

	const mockItem = {
		mainPhotoUrl: mockPhotoUrl,
		monthlyPrice: mockPrice,
		currencySymbol: mockSymbol,
		title: mockTitle
	};

	const renderComponent = () => {
		return shallow(<Property item={mockItem}/>);
	};

	it('renders without crashing', () => {
		renderComponent();
	});

	it('renders an <article> tag', () => {
		const component = renderComponent();
		expect(component.find('article').length).toEqual(1);
	});

	it('renders two <Button /> Components', function () {
		const component = renderComponent();

		expect(component.find('Button').length).toEqual(2);
	});

	it('renders an <img> tag with correct src and alt attributes', () => {
		const component = renderComponent();
		const imgs = component.find('img');
		expect(imgs.length).toEqual(1);
		expect(imgs.at(0).prop('alt')).toEqual(mockTitle);
		expect(imgs.at(0).prop('src')).toEqual(mockPhotoUrl);
	});

	it('renders an <p> containing title prop value', () => {
		const component = renderComponent();
		const ps = component.find('p');
		expect(ps.length).toEqual(1);
		expect(ps.at(0).text()).toEqual(mockTitle);
	});

	it('renders a <Price /> Component with correct amount and symbol', function () {
		const component = renderComponent();
		const price = component.find('Price').at(0);
		expect(price.prop('amount')).toEqual(mockMinPrice);
		expect(price.prop('symbol')).toEqual(mockSymbol);
	});
});