module.exports = function createLoggerMiddleware(log) {

	return function logger(req, res, next) {

		// 1. write the req method & url to the logger
		log(`${req.method} ${req.url}`);
		
		// 2. call next
		next();

	};

};