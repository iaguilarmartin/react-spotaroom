import React from 'react';
import ReactDOM from 'react-dom';
import App from './';

const app = new App();

it('renders without crashing', () => {
	const AppTest = class extends App {
		componentDidMount() {
		}
	};

	const div = document.createElement('div');
	ReactDOM.render(<AppTest />, div);
});

test('get city from pathname', () => {
	expect(app.getCityFromLocation()).toBeUndefined();
	expect(app.getCityFromLocation({})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: ''})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: '/'})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: 'madr1d'})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: '/madrid'})).toBe('madrid');
	expect(app.getCityFromLocation({pathname: '/madr1d'})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: '/m*eqw34'})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: '/madrid/barcelona'})).toBeUndefined();
	expect(app.getCityFromLocation({pathname: '/barcelona'})).toBe('barcelona');
});

test('sort array of properties by price', () => {
	expect(app.sortProperties()).toBeNull();
	expect(app.sortProperties('string')).toBeNull();
	expect(() => app.sortProperties(['string', 'string2'])).toThrow();
	expect(() => {
		const a = {	monthlyPrice: 15 };
		const b = {	monthlyPrice: 30 };
		app.sortProperties([a, b]);
	}).toThrow();
	expect(() => {
		const a = {	monthlyPrice: 15 };
		const b = {	monthlyPrice: 30 };
		return app.sortProperties([a, b]);
	}).toThrow();

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
