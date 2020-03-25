## Session

Eine Session-Variable in MongoDB speichern

```
npm install --save express body-parser ejs express-session connect-mongodb-session
```

app.js:
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const param = require("./.data/param.js");

// ------------ Routes -------------
const router = express.Router()

router.get('/', (req, res) => {
    res.render('eingabe',{
        eingabe: null
    })
});

router.post('/eingabe', (req, res) => {
    req.session.eingabe = req.body.eingabe;
    res.redirect('/');
});

router.get('/getEingabe', (req, res) => {
    const eingabe = req.session.eingabe;
    res.render('eingabe',{
        eingabe: eingabe
    });
});

// ------------ App ---------------

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(
    session({ secret: param.MYSECRET, resave: false, saveUninitialized: false })
  );

app.use('/',router);
 
let port = process.env.PORT ? process.env.PORT : 3000;    // Glitch or localhost
app.listen(port);
```



in .data/param.js

```javascript
exports.MYSECRET = "xxx";
```