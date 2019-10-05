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
const p1 = {    // Object
    name: 'Willi',
    age: 29,
    greet() {
        console.log('Hi i am ' + this.name);
    }
}

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