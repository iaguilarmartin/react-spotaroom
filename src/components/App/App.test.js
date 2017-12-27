import React from 'react';
import { shallow } from 'enzyme';

const mockProperties = [
	{id: 1, title: 'Mock property 1', monthlyPrice: {minimumPrice: 15}},
	{id: 2, title: 'Mock property 2', monthlyPrice: {minimumPrice: 25}}
];
const mockResponse = {total: mockProperties.length, items: mockProperties};

jest.mock('../../utils/api', () => ({
	properties: {
		get() {
			return Promise.resolve(mockResponse);
		}
	}
}));

import App from './';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />, {disableLifecycleMethods: true });
	});

	it('loads properties on componentDidMount', () => {
		const api = require('../../utils/api');
		const component = shallow(<App />);
		return api.properties.get().then(() => {
			expect(component.state('properties')).toEqual(mockProperties);
			expect(component.state('loadingProperties')).toBe(false);
			expect(component.state('total')).toBe(mockProperties.length);
		});
	});

	it('has a default state defined', () => {
		const component = shallow(<App />, {disableLifecycleMethods: true });

		expect(component.state('properties')).toBeNull();
		expect(component.state('loadingProperties')).toBe(true);
		expect(component.state('sortDescending')).toBe(false);
		expect(component.state('total')).toBe(0);
		expect(component.state('propertyType')).toBe('');
	});

	it('renders a <NavigationBar /> Component', function () {
		const component = shallow(<App />, {disableLifecycleMethods: true });

		expect(component.find('NavigationBar').length).toEqual(1);
	});

	it('renders a <Filters /> Component', function () {
		const component = shallow(<App />, {disableLifecycleMethods: true });

		expect(component.find('Filters').length).toEqual(1);
	});

	it('renders a <Properties /> Component', function () {
		const component = shallow(<App />, {disableLifecycleMethods: true });

		expect(component.find('Properties').length).toEqual(1);
	});
});


describe('Get city from URL path', () => {
	const app = new App();

	it('returns undefined if no path is specified', () => {
		expect(app.getCityFromLocation()).toBeUndefined();
		expect(app.getCityFromLocation({})).toBeUndefined();
		expect(app.getCityFromLocation({pathname: ''})).toBeUndefined();
		expect(app.getCityFromLocation({pathname: '/'})).toBeUndefined();
	});

	it('returns undefined if path contains invalid characters', () => {
		expect(app.getCityFromLocation({pathname: '/madr1d'})).toBeUndefined();
		expect(app.getCityFromLocation({pathname: '/m*eqw34'})).toBeUndefined();
	});

	it('returns undefined if path is wrong', () => {
		expect(app.getCityFromLocation({pathname: 'madr1d'})).toBeUndefined();
		expect(app.getCityFromLocation({pathname: '/madrid/barcelona'})).toBeUndefined();
	});

	it('returns city name if path contains a valid string', () => {
		expect(app.getCityFromLocation({pathname: '/madrid'})).toBe('madrid');
		expect(app.getCityFromLocation({pathname: '/barcelona'})).toBe('barcelona');
	});
});

describe('Sort array of properties by price', () => {
	const app = new App();

	it('returns null if no argument is passed', () => {
		expect(app.sortProperties()).toBeNull();
	});

	it('returns null if first argument is not an array', () => {
		expect(app.sortProperties('string')).toBeNull();
	});

	it('throws an exception if first argument is not an array of objects with monthlyPrice as child object and with minimumPrice attribute', () => {
		expect(() => app.sortProperties(['string', 'string2'])).toThrow();
		expect(() => {
			const a = {	monthlyPrice: 15 };
			const b = {	monthlyPrice: 30 };
			app.sortProperties([a, b]);
		}).toThrow();
	});

	it('returns array passed by argument sorted by price', () => {
		const a = {
			monthlyPrice: {
				minimumPrice: 15
			}
		};

		const b = {
			monthlyPrice: {
				minimumPrice: 25
			}
		};

		const c = {
			monthlyPrice: {
				minimumPrice: 35
			}
		};

		expect(app.sortProperties([a, c, b])).toEqual([a, b, c]);
		expect(app.sortProperties([c, a, b])).toEqual([a, b, c]);
	});
});