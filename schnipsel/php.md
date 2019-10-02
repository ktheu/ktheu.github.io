### PHP-Schnipsel

If a file contains only PHP code, it is preferable to omit the PHP closing tag at the end of the file. 

The type of a variable is not usually set by the programmer; rather, it is decided at runtime by PHP depending on the context in which that variable is used.


_[Reference](https://www.php.net/manual/en/langref.php)_

Nützliche Links:

_[printf](https://www.php.net/manual/en/function.printf.php)_

#### Arrays

``` 
$b = array();   // leeres array 
$a[] = 1;
$a[] = 2;       // array a erzeugen und mit zwei werten füllen

```

##### Ein Array durchlaufen
``` 
for ($i = 0; $i < count($a); $i++) {
    echo $a[$i] . "\n";
}

foreach ($a as $x) {
    echo $x . "\n";
}
```


##### Array Functions _[doc](https://www.php.net/manual/en/ref.array.php)_


```
$a = array_map('intval', $a);    // ein string-array in int-array wandeln
$x = array_shift($a)  // pop
$a.sort();            // sortieren 
min($a), max($a), count($a) oder sizeOf($a);    // min, max und Anzahl Elemente
```

#### Files einlesen

```
$lines = file('input1.txt');
foreach ($lines as $line) {
    echo $line;
}
```
oder: 
```
$fh = fopen("input1.txt", "r");
while (!feof($fh)) {
    $line = fgets($fh);
    echo $line;
}
fclose($fh);
```