var http = require('http');
var fs = require('fs');
var mime = require('mime');
var clientPatch = 'client/';

http.createServer(function(req, res) {
	var reqMethod = req.method;
	var reqPatch = req.url;
	
	switch(reqMethod) {
		// GET
		case 'GET':
			if(reqPatch === '/') {
				fs.readFile(clientPatch + 'index.html', function(err, data) {
					if(err) return err;
					res.end(data)
				});
			}else {
				var fileType = mime.lookup(clientPatch + reqPatch);
				fs.readFile(clientPatch + reqPatch, function(err, data) {
					if(err) return err;
					res.writeHead(200, {
						'Content-Type': fileType
					});
					res.end(data)
				});
			}
		break;
	// GET
	case 'POST':
		if(reqPatch == '/save_db') {
			req.on('data', function(data){
				fs.writeFile(clientPatch + 'new.json', data);
			})
			res.end('GOOD')
		}
	break;
	}
	

}).listen(8000);
console.log('listen: 8000')