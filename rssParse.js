var fs = require('fs');
fs.readFile('tut.xml', function(err, data) {
	console.log(''+data);
})