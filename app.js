const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();


app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>A tribute to Baby, the best cat on the planet</h1>');
  });


app.listen(3000, () => console.log('My first website is up!'));
