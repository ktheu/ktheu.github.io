## Eine Seite anzeigen
 
```
- app.js
- welcome.html
- package.json

``` 

`npm install --save express`

```
const path = require('path');
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'welcome.html'));
});

app.listen(3000);
```

Bei `sendFile` muss immer ein absoluter Pfad mitgegeben werden.

### Glitch

In Glitch reicht es,` welcome.html` nach `index.html` zu kopieren: 

[Projekt](https://glitch.com/~serve-a-page) - 
[App](https://serve-a-page.glitch.me/)