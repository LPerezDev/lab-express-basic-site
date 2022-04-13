const express = require('express');
const res = require('express/lib/response');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.set('views', __dirname + '/views');

app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>A tribute to Baby, the best cat on the planet</h1>');
  });

app.get('/works', (request, response, next) => {
    console.log(request);
    response.send('<h1>Babys most important work </h1>');
  });

app.get('/photo-gallery', (request, response, next) => {
    console.log(request);
    response.send('<h1>A photo gallery of the best photos</h1>');
  });

app.get('/about', (request, response, next) => {
    console.log(request);
    response.send('<h1>About me!</h1>');
  });

app.listen(3000, () => console.log('My first website is up!'));
