var http = require('https');

function getHTML(options, callback) {

    /* Add your code here */
    http.get(options, function(response) {
        response.setEncoding('utf8');
        var buffer = "";
        response.on('data', function(data) {
            // console.log(data + "\n");
            buffer += data;
        });
        response.on('end', function() {
            callback(buffer);
        })
    });

}

function printHTML(html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);