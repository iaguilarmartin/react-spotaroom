import React from 'react';
import ReactDOM from 'react-dom';
import Properties from './';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Properties />, div);
});