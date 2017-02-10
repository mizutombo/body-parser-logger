const assert = require('chai').assert;
const bodyParser = require('../lib/body-parser');
const EventEmitter = require('events');

describe('tests body parser :', () => {

	it('if no body, then calls "next()"', () => {
		let bodyIn = '';
		const parser = bodyParser (body => {
			bodyIn = body;
		});
		const req = new EventEmitter();
		req.emit('data', 'test the body parser');
		req.emit('end');
		assert.deepEqual(bodyIn, 'test the body parser');


		
	});

	it('if body, then returns body and calls "next()"', () => {

	})

	


});