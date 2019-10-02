#### Javascript  

Eingabe als Zahl einlesen
```
const k = parseInt(readline());  
```

#### Arrays
Arrays erzeugen
```
var a = [1,2];
a = new Array(5).fill(0);   # Länge 5, mit 0 initialisiert
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