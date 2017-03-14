// Import the request object from our node_modules
let request = require('request');

request('https://sytantris.github.io/http-examples/future.jpg').pipe(fs.createWriteStream('./future.jpg'));
console.log('Downloading Image...');

request.on('error', function(err) {
  console.log('Error:', err);
  return false;
});

request.on('response', function(res) {
  console.log('Response Code:', res.statusCode);
  console.log('Response Message:', res.statusMessage);
  console.log('Content Type:', res.headers['content-type']);
});

request.on('finish', function() {
  console.log('Download Complete');
});