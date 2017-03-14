// Import the request object from our node_modules and fs from node
let fs = require('fs');
let request = require('request');

request('https://sytantris.github.io/http-examples/future.jpg')
        .pipe(fs.createWriteStream('./future.jpg'))
        .on('error', function(err) {
          console.log('Error:', err);
          return false;
        })
        .on('response', function(res) {
          console.log('Response Code:', res.statusCode);
          console.log('Response Message:', res.statusMessage);
          console.log('Content Type:', res.headers['content-type']);
        })
        .on('finish', function() {
          console.log('Download Complete');
        });

console.log('Downloading Image...');

