const assert = require('chai').assert;
const createLogger = require('../lib/logger');

describe('logging middleware', () => {

	it('logs request method & url, then calls next', () => {
		
		let logged = '';
		const logger = createLogger(log => logged = log);

		const req = { method: 'GET', url: '/tests' };
		const next = () => {};

		logger(req, null, next);

		assert.equal(logged, 'GET /tests');
	});
});