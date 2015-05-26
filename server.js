var http = require('http');
var fs = require('fs');
var mime = require('mime');
var clientPatch = 'client/';

http.createServer(function(req, res) {
	var reqPatch = req.url;
	if(reqPatch === '/') {
		fs.readFile(clientPatch + 'index.html', function(err, data) {
			if(err) return err;
			res.end(data)
		});
	}else {
		var fileType = mime.lookup(clientPatch + reqPatch)
		fs.readFile(clientPatch + reqPatch, function(err, data) {
			if(err) return err;
			res.writeHead(200, {
				'Content-Type': fileType
			});
			res.end(data)
		});
	}
}).listen(8000);