module.exports = function codeBodyParser() {

	return function bodyParser(req, res, next) {
		
		let body = '';
		req.on('data', chunk => {
			body += chunk;
		});

		req.on('end', () => {
			if (body !== '') {
				req.body = JSON.parse(body);
			}
			next();
			// else {
			// 	res.end(body);
			// }
		});
		//  bodyParser(req, null, next);
	};
};