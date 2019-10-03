### Javascript  

#### Allgemeines
```
console.log(typeof 'blubber');  // Typ einer Variablen

```

#### Einlesen von Daten

Die Zeilen einer Datei als Liste von Strings
```
const fs = require('fs');
var x = fs.readFileSync('input2.txt', 'utf-8');
var res = x.split('\r\n');
```

Eine Zeile mit einer Zahl einlesen
```
let k = parseInt(readline()); 
```

#### Arrays _[doc](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)_

Arrays erzeugen
```
var a = [1,2];
a = new Array(5).fill(0);   // Länge 5, mit 0 initialisiert
a.push(4);                  // am Ende was anhängen
a.unshift(7);               // am Anfang was anhängen
```


```
b = a.map(x => 2*x)
b = a.slice()     // copy
b = [...a]        // copy mit Spread-Operator
```

Durch ein Array iterieren
```
for (let x of a) {
    console.log(x);
}
```
Array Destructuring
```
[a1, a2] = a;  

```


#### Maps _[doc](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Map)_