const express = require('express'); //this is how we are importing stuffs for use
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, './static'))); // this is used to add it in the beggining of the file by default

app.get('/', (request, response) => {
  //   response.sendFile(path.join(__dirname, './static/index.html')); -> you can return an HTML file from the server
  response.render('pages/index', { pageTitle: 'Welcome' }); //now we are returning different pages of the site
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html')); //learn how we create paths in node
});

app.listen(port, () => {
  console.log(`Express server is running ${port}!`);
});
