//include package express
var express = require('express');

//create express app
var app = express();

//Express listen
app.listen(3000,);

//route to index page
app.get('/index', (req, res) =>{	
	
	res.sendfile('/index.html')
});
