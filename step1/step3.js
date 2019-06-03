var http = require('https');

function getAndPrintHTML(options) {

    http.get(options, function(response) {
        response.setEncoding('utf8');

        var buffer = "";

        response.on('data', function(data) {
            console.log(data + "\n");
            buffer += data;
        });
    });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
}
getAndPrintHTML(requestOptions);