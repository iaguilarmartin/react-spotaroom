import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

beforeEach(function() {
	sinon.stub(console, 'error').callsFake(warning => {
		if (/(Invalid prop|Failed prop)/.test(warning)) {
			throw new Error(warning);
		}
	});
	sinon.stub(console, 'warn').callsFake(warning => {
		if (/(Invalid prop|Failed prop)/.test(warning)) {
			throw new Error(warning);
		}
	});
});

afterEach(function() {
	console.error.restore();
	console.warn.restore();
});