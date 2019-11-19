__[Docu]()__

`node -v` in cmd für die Version

Text in eine Datei schreiben:
```
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello World');
```

#### Ein einfaches setup
Den Server aufsetzen, 
starten mit `node app.js`, stoppen mit `Strg C`,
 aufrufbar mit `localhost:3000`

```
const http = require('http');
const routes = require('./routes');
console.log(routes.someText);
const server = http.createServer(routes.handler);
server.listen(3000);
```
Die Routes Logik
```
const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
```

#### npm
`npm init` für ein erstes JSON-File, dort mit bei scripts: `"start": "node app.js"`,
jetzt kann der server mit `npm start` gestartet werden, andere scripts mit `npm run ...`.


nodemon ist ein development package, d.h. wir installieren mit `npm install nodemon --save-def`, ändern `"start": "nodemon app.js"`

globale installation durch `npm install -g nodemon`


#### Debug
Den Debugger immer bei `app.js` starten, egal wo der breakpoint ist.

### Express
`npm install --save express`
`npm install --save body-parser`

```
const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log('In the middleware');
    next();
})
app.use((req,res,next) => {
    console.log('In another the middleware');
    res.send('<h1> Hello from Express </h1>');
     
})
app.listen(3000);
```
#### Templating Engines

`npm install --save ejs pug express-handlebars`

`npm install --sasve express body-parser ejs`