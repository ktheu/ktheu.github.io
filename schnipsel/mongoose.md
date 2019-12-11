## Mongoose


#### Alle Daten einer Collection lesen:

```
 mongoose.connect("mongodb+srv://------------------", {
     useNewUrlParser: true
   })
   .then(() => {
     return OderSo.find()
   })
   .then(result => {
     console.log(result);
   })
   .catch(err => console.log(err));
```
-----

#### Viele Daten inserten

```
 const mongoose = require('mongoose');
 const OderSo = require('./models/oderSo');
 const oderSoData = require('./models/oderSoData')
 
 mongoose.connect("mongodb+srv://------------------", {
     useNewUrlParser: true
   })
   .then(() => {
     return OderSo.insertMany(oderSoData);
   })
   .catch(err => {
     console.log(err);
   });
```

in oderSo.js:

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const oderSoSchema = new Schema({
  spruch: {
    type: String,
    required: true
  },
  loesung: {
    type: String,
    required: true
  },
  comment: String
})
module.exports = mongoose.model('Oderso', oderSoSchema);
```
 
in oderSoData.js:

```
const OderSo = require('./oderSo');
a = [];
a.push(OderSo({
    spruch: "Ich sehe Licht am Ende des Horizonts",
    loesung: "Tunnel"
}));
a.push(OderSo({
    spruch: "Das war ein dünner Grad",
    loesung: "schmal schmaler"
}));
module.exports = a;
```


