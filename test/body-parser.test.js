const assert = require('chai').assert;
const bodyParser = require('../lib/body-parser');
const EventEmitter = require('events');

describe('tests body parser middleware :', () => {

	it.skip('reads request stream and returns body, then calls "next()"', done => {

		const parser = bodyParser();
		const req = new EventEmitter();
		const next = () => {
			done();
		};
		let cat = {
			"name": "mocha"
		};
		parser(req, null, next);
		req.emit('data', JSON.stringify(cat));	
		req.emit('end');
		assert.deepEqual(req.body, cat);
		done();
	});

	it('if no body, then calls "next()"', done => {

		const parser = bodyParser();
		const req = new EventEmitter();
		const next = () => {
			done();
		};
		let cat = {};
		parser(req, null, next);
		req.emit('data' );	
		req.emit('end');
		console.log('body ', req.body);
		assert.deepEqual(req.body, null);
		done();
	});

});