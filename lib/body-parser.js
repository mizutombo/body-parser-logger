
module.exports = function codeBodyParser() {

    return function bodyParser(req, res, next) {

        let body = '';

        req.on('data', chunk => body += chunk);
        req.on('error', err => next(err));
        req.on('end', () => {
            if (req.body !== '') {
                req.body = JSON.parse(body);
            }
            next();
        });

    };

};