import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel test', () => {
	const checkbox = TestUtils.renderIntoDocument(
		<CheckboxWithLabel labelOn="On" labelOff="Off" />
	);
	
	let checkboxNode = ReactDOM.findDOMNode(checkbox);
	
	it('defaults to Off label', () => {
		console.log(JSON.stringify(checkboxNode));
		expect(checkboxNode.textContent).toEqual('Off');
	});
});