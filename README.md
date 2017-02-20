# body-parser

This app is an Express middleware body-parser.
```
1.)  The body-parser reads a request stream in it's entirety into a variable ...
				*  using data and end events 
2.)  If there is no body ...
				*  it calls next()
3.)  If there is a body ...
				*  it uses JSON.parse to turn the body into js object
        *  it then appends to req (req.body = JSON.parse(body))
        *  then it calls next()
```				
For mocking req:
```
*  const EventEmitter = require('events')
*  const req = new EventEmitter()
```
**  Mock stream by calling:
				*  req.emit('data', JSON.stringify(mock_data))
				*  req.emit('end') (you'll need to call this for no body too)