SSL = function(key, cert, port){
	var httpProxy = Npm.require('http-proxy');
	var fs = Npm.require('fs');
	if(!port){
		port = 443;
	};
	
	proxy = httpProxy.createServer({
		target: {
    		host: 'localhost',
    		port: process.env.PORT
  		},
  		ssl: {
    		key: fs.readFileSync(key, 'utf8'),
    		cert: fs.readFileSync(cert, 'utf8')
 		},
 		ws: true,
 		xfwd: true
 	}).listen(port);
	
	proxy.on("error", function() {
        	console.log("HTTP-PROXY NPM MODULE ERROR: " + err);
        	return;
      	});
};
