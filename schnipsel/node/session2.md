## Session

Eine Session-Variable in MongoDB speichern

```
npm install --save express body-parser ejs express-session mongoose connect-mongodb-session
```

Wie Session1 nur zusätzlich:

app.js:
```javascript

const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: param.MONGODB_URI,
    collection: 'sessions'
  });
  
app.use(     // zusätzlicher parameter store
    session({ secret: param.MYSECRET, resave: false, saveUninitialized: false, store: store })
  );

```

in .data/param.js

```javascript
exports.MONGODB_URI = "mongodb+srv:xxx/test";
exports.MYSECRET = "xxx";
```