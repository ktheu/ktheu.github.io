### Javascript  

#### Allgemeines
```
console.log(typeof 'blubber');  // Typ einer Variablen

let x, y;
let a = 1; b = 2;
```

#### Einlesen von Daten

Die Zeilen einer Datei als Liste von Strings
```
const fs = require('fs');
var x = fs.readFileSync('input2.txt', 'utf-8');
var res = x.split('\r\n');
```

Die Dateien eines Verzeichnisses als Stringliste:
```
let dir = "d:/MyPhotos/2019copy/MSY-Tour/";
let filenames = fs.readdirSync(dir);
```
 

Eine Zeile mit einer Zahl einlesen
```
let k = parseInt(readline()); 
```

#### Zufall
Eine ganzzahlige Zufallszahl im Intervall [min, max]  [doc](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/Zufallszahlen)

```
let min = 5;
let max = 10;
let  x = Math.floor(Math.random() * (max - min + 1)) + min;
```


#### Arrays _[doc](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)_

Arrays erzeugen
```
const a = [1,2];
a = new Array(5).fill(0);   // Länge 5, mit 0 initialisiert
a.push(4);                  // am Ende was anhängen
a.unshift(7);               // am Anfang was anhängen
```


```
b = a.map(x => 2*x)
b = a.slice()     // copy
b = [...a]        // copy mit Spread-Operator
```

Durch ein Array laufen
```
a = [1,2,3]
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
 
a.forEach(function(x) {
  console.log(x);
});

a.forEach((x) => console.log(x));

for (let x of a) {
  console.log(x);
}
```
Array Destructuring
```
[a1, a2] = a;  

```

Shuffle Array nach Fisher-Yates
```
for (let i = allids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = allids[i]
    allids[i] = allids[j]
    allids[j] = temp
}

```
#### Maps _[doc](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Map)_

```
let m = new Map();
if (m.has(k)) ...     // ist k Schlüssel in m?
m.set(k,v);           // setzen eines key-value Paares
let v = m.get(k);

for(let k of m.keys()) ...   // durch alle Schlüssel laufen

```


#### Functions _[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)_

```
function doppel(k) {
    return 2 * k;
}
const doppel = (k) => {
    return 2 * k;
}
const doppel = k => 2 * k;  // 1 Argument
const vier = () => 4;       // ohne Argument
```

##### Rest-Parameter _[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)_

```
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
```

#### Objects

```

var n = {};        // ein leeres Objekt

const p1 = {       // Object
    name: 'Willi',
    age: 29,
    greet() {
        console.log('Hi i am ' + this.name);
    }
}

console.log(p1.name);   // oder:
console.log(p1['name']);

p2 = {...p1}  // copy von p1

// Destructuring objects
const {name, age} = p1;

// Destructuring objects
const pname = (p1) => {
    console.log(p1.name);
}
const pname = ( {name}) => {
    console.log(name);
}
pname(p1);   // -> Willi
```

#### Promises

Dem Konstruktor eines Promise wird eine Funktion *f* übergeben, die wiederum 2 Funktionen als Argumente
hat, üblicherweise *resolve* und *reject* genannt, in dem Beispiel: *g* und *h*. In der Funktion *f* wird
das gemacht, was das Promise erledigen soll und dann kann man zwei Fälle unterscheiden. Wenn die Arbeit des Promise zu einem guten Ende gekommen ist, übergibt man das Ergebnis dieser Arbeit  (einen String, eine Zahl, ein Objekt) der 1. Funktion *g* (= *resolve*), wenn man auf einen Fehler stößt, übergibt etwas (einen String, eine Zahl, ein Objekt) an die 2.Funktion *h* (= *reject*). 
Mit *then* werden bei dem Promise-Objekt *p* zwei callback Funktionen *f1* und *f2* registiert. Wenn das Promise 
die *g*-Funktion aufruft (also im *resolve*-Fall) wird damit auch *f1* aufgerufen und als Argument an *f1* wird übergeben, was die *g* Funktion beim Aufruf erhalten hat. Beim Aufruf der *h*-Funktion (*reject*-Fall) wird analog die Funktion *f2* aufgerufen.

Auch wenn - wie hier im Beispiel - bei der Arbeit des Promise keine zeitliche Verzögerung im Spiel ist, 
wird dennoch erst der laufende call-stack abgearbeitet. Die Aufrufe der callback Funktionen kommen in die 
eventqueue und von dort wird erst etwas geholt, wenn der stack leer ist.
Siehe: https://vimeo.com/96425312   


```
function f(g,h) {
    let x = 5;
    if (x < 10) g('Done');
    else h('Ohno');
}

function f1(x) {
    console.log(x)
}

function f2(x) {
    console.log(x)
}

let p = new Promise(f);
p.then(f1,f2);
console.log("Aha");


Ausgabe:
Aha
Done
```




```
const fetchData = () => {  
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => console.log('Timer is done'), 1000);
    });
    return promise;   // promise wird sofort zurückgegeben.
}
fetchData().then((x) => console.log(x));  // Promises mit then auflösen

// Code ist nicht blockiert, Hello kommt zuerst
setTimeout(() => console.log('Timer is done'),1000);
console.log('Hello');

```

#### Functional Programming

##### map _doc_(https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)_
```
let a = [1,2,3];
let b = a.map(x => x + 1);

// oder
let add = x => x + 1;
let b = a.map(add);

```

##### reduce _doc_(https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)_
```
let a = [1,2,3];
let add = x => x + 1;
let sum = (A,I) => A + I;  // A = Accumulator, I = Item
let x = a.map(add).reduce(sum,9);
console.log(x);
```

#### Modules (ES6)

 Der exportierende Module muss kann irgendwo in der Hierarchie stehen, das importierende Module irgendwo anders in der Hierarchie, aber ganz oben (index.html, index.php) muss das importierende Modul an seinem Platz mit dem script-tag deklariert werden. 

```
In index.html:
<script type="module" src="./dir2/b.js"> </script>

In dir1/a.js
export let x = 44;

in dir2/b.js
import { x } from './../dir1/a.js';


