const assert = require('chai').assert;
const bodyParser = require('../lib/body-parser');
const EventEmitter = require('events');
req = new EventEmitter();
req.emit('data', JSON.stringify('data'));
req.emit('end');

describe('tests body parser middleware ', () => {

	it('reads request stream and returns body, then calls "next()"', done => {

		let parser = bodyParser();
		//const req = new EventEmitter();
		const next = () => {
			done();
		};
		let cat = {
			'name': 'mocha'
		};
		parser(req, null, next());
		req.emit('data', JSON.stringify(cat));
		req.emit('end');
		assert.deepEqual(req.body, cat);
		next();
	});

	it('no body here', () => {

		let parser = bodyParser();
		const req = new EventEmitter();
		req.body = null;
		let next = () => {
			assert.deepEqual(req.body, null);
			//done();
		};
		next();
	});

});