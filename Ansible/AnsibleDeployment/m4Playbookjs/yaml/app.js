// Load the express module.
var express = require('express'),
	app = express.createServer();

//Respond to request / wuth "Hello World".
app.get('/', function(req, res)){
		res.send('Hello World!');
		});
// Listen on port 80 (LIke a true web server)
app.listen(80);
console.log('Express server started successfully.');