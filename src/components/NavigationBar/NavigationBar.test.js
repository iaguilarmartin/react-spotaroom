import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './';

describe('<NavigationBar />', () => {
	it('renders without crashing', () => {
		shallow(<NavigationBar />);
	});

	it('renders a <nav> tag', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('nav').length).toEqual(1);
	});

	it('renders a <h1> tag', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('h1').length).toEqual(1);
	});

	it('renders a <img> tag', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('img').length).toEqual(1);
	});

	it('renders a <ul> tag', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('ul').length).toEqual(1);
	});

	it('renders three <li> tags', () => {
		const component = shallow(<NavigationBar />);
		expect(component.find('li').length).toEqual(3);
	});

	it('renders a <a> tag for each <li> tag', () => {
		const component = shallow(<NavigationBar />);
		component.find('li').forEach((node) => {
			expect(node.find('a').length).toEqual(1);
		});
	});
});