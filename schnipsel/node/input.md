
## Einfache Eingabe

Die Eingabe auf der Client-Seite wird auf der Serverseite auf der Konsole ausgegeben.

```
install --save express body-parser

- app.js
- eingabe.html
```

```javascript
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/eingabe', (req, res, next) => {
  console.log(req.body.eingabe);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'eingabe.html'));
});

app.listen(3000);
```


In `eingabe.html`: der Name des Input-Feldes muss `eingabe` sein, damit die Eingabe mit
`req.body.eingabe` abgeholt werden kann.


```html
        <form class="form-inline" action="/eingabe" method="POST">
            <div class="form-group mb-2">
                <span> Eingabe: </span>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" name="eingabe" placeholder="... etwas eingeben">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>

```