### PHP 

_[Reference](https://www.php.net/manual/en/langref.php)_

#### Allgemeines

If a file contains only PHP code, it is preferable to omit the PHP closing tag at the end of the file. 

The type of a variable is not usually set by the programmer; rather, it is decided at runtime by PHP depending on the context in which that variable is used.

```
<?php
     
?>
```

```
<?="This is another PHP example.";?>  // Shortcircuit syntax
```

```
<?
print "This is another PHP example.";  // nur wenn short_open_tag on
?>
```

#### Kommentare
```
// comment
#  comment
/*  multiple 
line comment  */   
```

#### Variablen
Variablennamen sind case-sensitiv. Variablen müssen nicht vor Gebrauch deklariert werden, sondern sind
mit der ersten Initialisierung deklariert. Mit einem & nach dem Gleichheitszeichen oder vor dem Variablennamen
werden die Variablen nicht über den Wert, sondern über eine Referenz initialisiert.
```
$a = 5;    
$b =& $a;  // oder
$b = &$a;  // so. Wenn $a sich ändert, ändert sich auch $b.
```

#### Superglobals _[doc](https://www.php.net/manual/en/language.variables.superglobals.php)_
Superglobals sind von überall zugreifbare Variablen, die Information über die Umgebung liefern

```
foreach ($_SERVER as $var => $value) {
    echo "$var => $value <br />";
}

$_GET, $_POST ...
```
#### Konstanten
Konstanten könne mit *define* oder dem Schlüsselwort *const* definiert werden. Sie beginnen nicht mit $. Sie
sind gobal verfügbar und bestehen üblicherweise aus Großbuchstaben.

```
define("PI", 3.1415);   // oder
const PI = 3.1415;
```

#### Operatoren
```
&&, AND, ||, OR, !, NOT, XOR  // boolesche Operatoren
==, !=    // gleicher, ungleicher Inhalt
===       // gleicher Inhalt und Typ

$b = ($a == 5) ? 4 : 6;   // $b wird 4, falls $a gleich 5, sonst 6
$b = ($a == 5) ? : 6;     // $b wird 5, falls $a gleich 5, sonst 6
$b = $a ?? 6;             // $b wird zu $a, falls $a einen Wert hat, sonst 6
```

#### Daten ausgeben
*echo* benötigt keine Klammern, mehrere Ausgaben können mit Komma getrennt werden.
Bei doppelten Anführungszeiten können einfache Variablen direkt in den String eingesetzt werden.
Zur Verdeutlichung nimmt man meist geschweifte Klammern.
```
echo $x , $s;
echo "$x und $s"
echo "{$x} und {$s}";
```
*printf* _[doc](https://www.php.net/manual/en/function.printf.php)_
ist gut, wenn statischer und dynamischer Inhalt formatiert gemischt werden soll.
```
printf("Der %s ist %d Jahre alt", $s, $x); 
```
*sprintf* wie *printf*, nur wird die Ausgabe als String zurückgegeben
```
$ausgabe = sprintf("Der %s ist %d Jahre alt", $s, $x); 
```

#### Booleans
*true*, *false*. 
```
if ($b) .... // false, wenn $b = false, 0, '0', null
```

#### Integers
In einer mathematischen Operation wird ein String automatisch zum Integer gecastet, wenn dies Sinn macht.
```
42      // decimal
0755    // oktal
0xa3    // hexadezimal
0b1011  // binär
```

#### Casting
z.B: (bool), (int), (float), (string)
```
$a = 3.14;
$b = (int) $a;
```

#### Typen prüfen
Skalare Typen sind bool, int, float, string
```
is_array(), is_bool(), is_float(), is_integer(), is_null(), is_numeric(),
is_object(), is_resource(), is_scalar(), is_string()
```

#### Verzweigungen
Besteht der Rumpf nur aus einer Zeile, können die geschweiften Klammern weggelassen werden.
```
if ($bool1) {

}
elseif ($bool2) {

}
else {

}
``` 

```
switch($category) {
    case "news":
       ...
       break;
    case "weather":
       ... 
       break;
    default;
       ...
}
``` 


#### Schleifen
``` 
while ($bool) {

}

do {

} while ($bool);

for ($i=0; $i<$n; $i++) {

}

$a = [1,2,3];
foreach ($a as $x) echo $x;

foreach ($a as $k => $v) echo $k . "->" . $v . "\n";  // liefert key-value Paare
``` 
#### File Inclusion
Die Klammern können auch weggelassen werden. Die Anweisung muss auch in einem php-Tag stehen.
```
include ("/usr/local/lib/php/wjgilmore/init.inc.php");
include_once (....)
require (....)        // wie include, aber Fehler wenn file nicht vorhanden
require_once (...)
```



#### Files einlesen

```
__FILE__  // den Namen der aktuellen Datei
__DIR__  wie  dirname(__FILE__)  // Name des aktuellen Directories

```

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
$a = array() // leeres Array
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

foreach ($a as $x) {
    echo $x . "<br/> ";     // für Zeilenumbruch im Browser
}
```


##### Array Functions _[doc](https://www.php.net/manual/en/ref.array.php)_


```
$a = array_map('intval', $a);    // ein string-array in int-array wandeln
$x = array_shift($a)  // pop
$a.sort();            // sortieren 
min($a), max($a), count($a) oder sizeOf($a);    // min, max und Anzahl Elemente
```

#### OOP

##### statische Variablen
Auf statische Variablen wird in der Klasse mit self:: und außerhalb der Klasse mit Klassenname:: zugegriffen.

```
class Visitor {
    public static $visitors = 0;
    function __construct() {
         self::$visitors++;
    }
}

$v = new Visitor();
echo Visitor::$visitors
``` 

#### Authentication

##### Verzeichnis mit .htaccess schützen

In das zu schützende verzeichnis die Datei *.htaccess* einfügen mit Inhalt:
```
AuthUserFile ../.htpasswd
AuthType Basic
AuthName "My Files"
Require valid-user
```

Das File .htpasswd liegt im Beispiel oberhalb des root-Verzeichnisses *htdocs*.
Die Datei .htpasswd wird erzeugt mit (die shell von Xampp öffnen)
```
htpasswd -c .htpasswd biene   # der Benutzername ist biene
```

##### Zugriff mit php und einem user/pw -Paar schützen

```
<?php
$secret = 'b658b26bee93ff47ae55410afd0e7dc70307e2a4';
if (($_SERVER['PHP_AUTH_USER'] != 'biene') || (hash('sha1', $_SERVER['PHP_AUTH_PW']) != $secret)
) {
    header('WWW-Authenticate: Basic Realm="Secret Stash"');
    header('HTTP/1.0 401 Unauthorized');
    print('You must provide the proper credentials!');
    exit;
}

```
Für den Nutzer *biene* wird der Hash für das Passwort *honig* in der Xampp-Shell durch folgendes
Kommando erzeugt:

```
php -r "echo hash('sha1', 'honig');
```

Damit dies bei dem Server von DMSolutions funktioniert, muss die folgende Zeile in der .htaccess-Datei stehen.
In dem Ordner, in dem auch das Passwort abgefragt wird.
Sonst tuen die $_SERVER-Variablen nicht.
```
SetEnvIf Authorization .+ HTTP_AUTHORIZATION=$0
```

#### Redirect
```
<?php
header("Location: http://www.informatik42.de/codingame"); /* Redirect browser */
/* Make sure that code below does not get executed when we redirect. */
exit;
?>
```

#### Date and Time
DateTime format-Parameter: __[doc](https://www.php.net/manual/en/function.date.php)__
Liste der Zeitzonen __[doc](https://www.php.net/manual/en/timezones.php)__
``` 
date_default_timezone_set("Europe/Berlin");
$CurrentTime = time();
$DateTime = strftime("%Y-%m-%d %H:%M:%S",$CurrentTime);  // SQL-Format
echo $DateTime;
```

#### htmlentities
Wenn mit echo ein String ausgegeben wird, kann so verhindert werden, dass Teile davon als
html verstanden wird.
```
<?php
$str = "Ein 'Anführungszeichen' ist <b>fett</b>";

// Gibt aus: Ein 'Anf&uuml;hrungszeichen' ist &lt;b&gt;fett&lt;/b&gt;
echo htmlentities($str);

// Gibt aus: Ein &#039;Anf&uuml;hrungszeichen&#039; ist &lt;b&gt;fett&lt;/b&gt;
echo htmlentities($str, ENT_QUOTES);
?>
```

#### Verschiedenes

Wenn man auf einer Seite submit gedrückt hat und dieselbe Seite in dem action-Attribut steht, dann kann
man so auf eine andere Seite verzweigen:
```
if ($_SERVER['REQUEST_METHOD'] == 'POST') {                              
require('process-register-page.php');
} // End of the main Submit conditional.
```
Nach Drucken des Submit-Buttons wird die js-Funktion checked() ausgeführt.
```
<form action="register-page.php" method="post" onsubmit="return checked();" name="regform" id="regform">
```
Wenn die Seite nochmal angezeigt wird, bleiben Eingaben erhalten:
```
<input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name" maxlength="40" required value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>">
```

Eine Funktion zur Erzeugung eines Passwort-Hashs ist eingebaut _[doc](https://www.php.net/manual/en/function.password-hash.php)_
```
$hashed_passcode = password_hash($password1, PASSWORD_DEFAULT);
```
Um die Fehlermeldung nach einem missglückten execute zu erhalten
```
mysqli_stmt_execute($q);
printf("Error: %s.\n", mysqli_stmt_error($q));
```

#### Sessions

Auf jeder Seite, die in einer Session benutzt wird, sollte zu Beginn: sesson_start() stehen.
Wenn vorher auf dieser Seite Output generiert wird, funktioniert die Anweisung nicht und die Session wird für
diese Seite nicht aktiviert ("headers already sent-error");


```
unset($_SESSION['name']);   // Löschen einer Session-Variable
$_SESSION = [];             // Um alle Session-Variablen zu löschen
unset($_SESSION);           // NICHT VERWENDEN - jetzt können keine neuen Session-Variablen mehr gespeichert werden.

```

Um den session_cookie