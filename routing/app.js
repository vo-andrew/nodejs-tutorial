var url = require('url');
var fs = require('fs');

function renderHtml(path, response) {
    fs.readFile(path, null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found!');
		} else {
			response.write(data);
		}
		response.end();
	})
}

module.exports = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': "text/html"});
        var path = url.parse(request.url).pathname;
        if (path == '/') {
            renderHtml('./index.html', response);
        } else if (path == '/login') {
            renderHtml('./login.html', response);
        } else {
            response.writeHead(404);
            response.write('Route not defined.');
            response.end();
        }
    }
};