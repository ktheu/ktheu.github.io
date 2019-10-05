### PHP 

_[Reference](https://www.php.net/manual/en/langref.php)_

#### Allgemeines

If a file contains only PHP code, it is preferable to omit the PHP closing tag at the end of the file. 

The type of a variable is not usually set by the programmer; rather, it is decided at runtime by PHP depending on the context in which that variable is used.

```
<?php
     
?>
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



#### Arrays

In PHP, there are three types of arrays:

- Indexed arrays - Arrays with a numeric index
- Associative arrays - Arrays with named keys  
- Multidimensional arrays - Arrays containing one or more arrays

``` 
$b = array();   // leeres array 
$a[] = 1;
$a[] = 2;       // array a erzeugen und mit zwei werten füllen
array_push($a,3);       // am Ende inserten, wie $a[] = 3;
array_unshift($a,6);    // am Anfang inserten    
count($a)               // Länge des Arrays

```

Associative arrays  
```
$m = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
array_key_exists('Ben', $m)    // existiert key?
array_keys($m)             // Array mit allen keys
foreach (array_keys($m) as $k)  // alle Keys von m durchlaufen
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

##### Verschiedenes

printf _[doc](https://www.php.net/manual/en/function.printf.php)_