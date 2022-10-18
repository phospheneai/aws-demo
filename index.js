const Express = require('express');
const path = require('path');

const app = Express();

const port = 8081;

app.listen(port);

const indexPage = function(req, res) {
   const pathToHtml = path.join(__dirname, 'index.html')
   res.sendFile(pathToHtml) 
}

const contactPage = (req, res) => {
   const pathToHtml = path.join(__dirname, 'contact.html')
   res.sendFile(pathToHtml) 
}

app.get('/', indexPage);
app.get('/contact', contactPage)
