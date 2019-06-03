var http = require('https');

function getAndPrintHTMLChunks() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    /* CODE HERE */
    http.get(requestOptions, function(response) {
        response.setEncoding('utf8');

        response.on('data', function(data) {
            console.log(data);
        });
    });

}

getAndPrintHTMLChunks();