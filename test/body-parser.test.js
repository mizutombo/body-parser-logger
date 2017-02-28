const assert = require('chai').assert;
const bodyParser = require('../lib/body-parser');
const EventEmitter = require('events');

describe('tests body parser middleware :', () => {

	it('reads request stream and returns body, then calls "next()"', () => {

		const parser = bodyParser();
		const req = new EventEmitter();
		const body = {};
		let cat = {
			cat: 'ocelot'
		};
		const next = () => {
		  assert.deepEqual(req.body, cat);
		};
		parser(req, null, next);
		req.emit('data', JSON.stringify(cat));	
		req.emit('end');
	
	});

	it('if no body, then calls "next()"', () => {

		const parser = bodyParser();
		const req = new EventEmitter();
		let body = '';
		let cat = '';
		const next = () => {
			assert.deepEqual(req.body, '');
		};
		parser(req, null, next);
		req.emit('data', JSON.stringify(cat));
		req.emit('end');

	});

});