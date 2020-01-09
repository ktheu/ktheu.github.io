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

in eingabe.ejs
```html
        <p class="h2 mt-4">Session Variable</p>

        <form class="form-inline" action="/eingabe" method="POST">
            <div class="form-group mb-2">
                <span> Eingabe: </span>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" name="eingabe">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>

        </form>

        <div class="my-4"><a href="/getEingabe" class="btn btn-primary">Get Eingabe</a></div>

        <% if (eingabe) { %>
        <p>Die Eingabe war: <%=eingabe%></p>
        <%} else {%>
        <p>In dieser Session wurde noch keine Eingabe gemacht.</p>
        <%}%>
        
        </div>
```

in .data/param.js

```javascript
exports.MYSECRET = "xxx";
```