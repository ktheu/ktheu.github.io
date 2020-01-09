## NodeJS


__[Doc]()__



[Simple](./node/serveAPage.md) - Eine Seite anzeigen

[Input](./node/input.md) - Auf der Clientseite einen Input abholen und auf der Serverseite ausgeben.

[Session1](./node/session1.md) - Eine Sessionvariable temporär im Server-Memory speichern.

[Session2](./node/session2.md) - Eine Sessionvariable in MongoDB speichern.

[SignIn](./node/signin.md) - Benutzername und Passwort in MongoDB speichern. Zugriff auf eine Seite nur bei Login.

[Email](./node/sendgrid.md) - Email mit SendGrid verschicken

[Csrf](./node/csrf.md) - CSRF Protection

--- 

`node -v` in cmd für die Version
`npm init` am Anfang

Globale Installation von nodemon: `npm install -g nodemon`

`  "start": "nodemon app.js"`  bei scripts in `package.json` eintragen, danach:
`npm start`, stoppen mit `Strg C`, aufrufbar mit `localhost:3000`

---
Häufige Installs:

`npm install --save express body-parser ejs `

----


Text in eine Datei schreiben:
```javascript
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello World');
```

 
#### Debug
Den Debugger immer bei `app.js` starten, egal wo der breakpoint ist.



