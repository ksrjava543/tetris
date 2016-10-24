var Tile = require('./tile');
var Clock = require('./clock');
var  http = require('http');
var fs = require('fs');
var path = require('path');



var clock = new Clock();

var startGame = function () {
	clock.startClock();
};


var server = http.createServer(function(req, res){
	console.log(req.url);
	if (req.url === '/'){
		res.writeHead(200, {'content-type':'text/html'});
		fs.readFile('./index.html','utf-8',function(err, html){
			if (err){
				res.end('unable to read the file');
			}
			else{
				res.end(html);
			}
		});
	}
	else if(req.url.match(/.html/)){
		res.writeHead(200, {'content-type':"text/html"});
		var htmlpath = path.join(__dirname, req.url)
		fs.readFile(htmlpath,"utf-8",function(err, html){
			if(err){
				res.end('unable to read the file' + htmlpath);
			}
			else{
				res.end(html);
			}
		});

	}
	else if(req.url == '/getTile'){
		console.log('requesting tile');
		res.writeHead(200, {'content-type':'text/json'});
		var newTile = new Tile();
		newTile.create();
		console.log('responding with tile '+ newTile);
		res.end(JSON.stringify(newTile));


	}
});
server.listen(3233);