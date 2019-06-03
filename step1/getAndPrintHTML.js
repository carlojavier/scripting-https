var http = require('https');

function getAndPrintHTML() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    /*CODE HERE */
    var buffer = "";

    http.get(requestOptions, function(response) {
        response.setEncoding('utf8');

        response.on('data', function(data) {
            console.log(data + "\n");
            buffer += data;
        });
    });
}

getAndPrintHTML();