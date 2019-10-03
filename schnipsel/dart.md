### Dart Schnipsel

#### Allgemeines

Version: im cmd: dart --version

```
void main() {    // hier beginnts
    .... 
}

print(x.runtimeType) // den Typ von x ausdrucken
```

#### Einlesen von Daten

##### stdin 
Mehrere ints in einer Zeile in eine Liste speichern
```
var line1 = stdin.readLineSync().split(' ').map((x) => int.parse(x)).toList();
```

##### File _[doc](https://api.dartlang.org/stable/2.5.1/dart-io/File-class.html)_

Für kleine Dateien kann man auch ohne asynchrones Lesen auskommen. Beispiel: die erste Zeile wegwerfen, dann
alle übrigen als ints in eine Liste speichern.
```
import 'dart:io';
File f = File('input2.txt');
var b = f.readAsLinesSync();
b.removeAt(0);
var a = (b.map((x) => int.parse(x))).toList();
```

#### Strings _[doc](https://api.dartlang.org/stable/2.5.1/dart-core/String-class.html)_

String-Interpolation: die geschweiften Klammern können weggelassen werden, wenn einfache Variablen ausgewertet werden.
```
String s  = 'hello';
print('$s hat ${s.length} zeichen');  // -> hello hat 5 zeichen
```

#### Random _[doc](https://api.dartlang.org/stable/2.5.1/dart-math/Random-class.html)_
```
import 'dart:math';  
final r = Random();
int k = r.nextInt(100);  //  0 <= k < 100
```

#### Lists _[doc](https://api.dartlang.org/stable/2.5.1/dart-core/List-class.html)_
```
List<String> a = ['a', 'b', 'c'];
var b = List<int>.filled(10,0);     // Liste mit 10 Nullen
var c = List<int>(5);               // Liste mit 5 null
var d = List<int>()..length = 5;    // Liste mit 5 null
```

List.generate() _[doc](https://api.dartlang.org/stable/2.5.1/dart-core/List/List.generate.html)_

```
List.generate(10, (i) => 2*i + 1);  // die ersten 10 ungeraden Zahlen
List.generate(5, (i) => 10 + 5*i);  // die ersten  Vielfachen von 5 ab 10
List.generate(5, (i) => r.nextInt(100)); // r = Random()             // Liste mit 5 null
List.generate(8, (i) => int.parse(stdin.readLineSync()));  // 8 Zeilen mit Zahlen einlesen

```

Methoden der Liste _[doc](https://api.dartlang.org/stable/2.5.1/dart-core/List-class.html#instance-methods)_
```
a.indexOf(x)      // Index eines Elements 
maxVal = a.reduce(max)  
minVal = a.reduce(min)
```

#### Asynchrone Programmierung _[doc](https://dart.dev/codelabs/async-await)_

#### Futures

Ein Future ist das Ergebnis einer asynchronen Operation, es kann zwei Zustände haben: uncompleted oder completed.
Wenn man eine async-Funktion aufruft, wird zunächst ein uncompleted Future zurückgegeben. Erst wenn die async Funktion ihr
Ergebnis ermittelt hat, wird daraus ein completed Future mit einem Wert oder es wird ein Fehler geworfen.

An einem Future-Objekt kann man die Methode then aufrufen, die eine Funktion erhält, die dann 
aufgerufen wird, wenn das Future-Objekt gefüllt wurde, mit dem gefüllten Objekt als Argument.

Statt die Verarbeitung mit *then* weiterzumachen kann man auch mit dem Schlüsselwort *await* warten, bis das Future completed ist.

Wenn man ein Future erhält, kann man an das Ergebnis also mit then kommen oder mit await. 
Wenn mehrere Futures ineinandergewickelt sind, kann man auch mehrere thens hintereinanderschalten.

Wenn man mehrere asyncrone Ergebnisse verarbeiten will, dann kann man mit await die genaue Reihenfolge
steuern, mit then nicht. 

##### Ein Future erzeugen


```
main() {
  Future<void> doit() {
    return Future.delayed(Duration(seconds: 3), () => print('Hello'));
  }
  doit();
  print('end');
}

Ausgabe: 
end     (sofort)
Hello   (nach 3 Sekunden)
```


```
main() async {
  Future<void> doit() {
    return Future.delayed(Duration(seconds: 3), () => print('Hello'));
  }

  await doit();   // das await macht die Methode async
  print('end');
}

Ausgabe: 
Hello     (nach 3 Sekunden)
end   
```

Wenn ein Methode, die einen String zurückgibt, asynchron gemacht wird, dann ändert sich der return Type zu Future\<String\>.
Das wait-Keywort wickelt dann den String aus dem Future-Objekt wieder raus.

#### Streams and Futures

Streams kann man als ansehen als asyncronen Iterator. 

A Future represents the result of a single computation, a stream is a sequence of results. You listen on a stream to get notified of the results (both data and errors) and of the stream shutting down. You can also pause while listening or stop listening to the stream before it is complete. You can:

- Transforming existing streams.
- Creating a stream from scratch by using an async* function.
- Creating a stream by using a StreamController.


Um die Elemente eines Streams zu verarbeiten gibt es zwei Möglchkeiten.
1. Mit einer await-for Schleife durch die ankommenden Elemente gehen.
2. Mit .listen() einen Listener beim Stream anmelden. Der wird immer durchlaufen, wenn
ein Element auftaucht. Die listen-Funktion gibt eine Streamsubscriptiom-Objekt zurück, mit dem
man das listening pausieren, resumen oder canceln kann. 


##### Streams für IO
Den sink eines streams kann man sich als den Endpunkt eines streams vorstellen, für eine IO-Operation wäre
das dann das File, in das man schreiben will.
Wenn man ein File liest, bekommt man einen Stream von Bytes. Ein Byte ist eine Liste von ints. Also bekommt
man beim Lesen einen Stream von int-Listen zurück.

Eine Datei mit einem Eingabestrom einlesen:
```
import 'dart:convert';
import 'dart:io';

main() async {
  Stream<List<int>> content = File('input1.txt').openRead();
  List<String> lines =
      await content.transform(utf8.decoder).transform(LineSplitter()).toList();
  lines.forEach(print);
}
```

##### Einen Stream erzeugen:

```
var counterStream = Stream<int>.periodic(Duration(seconds: 1), (x) => x).take(15);
counterStream.forEach(print);      // Print an integer every second, 15 times.
```



Ein Generator ist eine async* Funktion, die mit yield statt mit return zurückgibt.

#### OOP

Das Schlüsselwort Interface gibt es nicht. Jede Klasse kann als Interface genommen werden.

#### Duration

Ein Duration Objekt repräsentiert den Zeitraum zwischen zwei Zeitpunkten

```
Duration d = Duration(hours:2, minutes:3, seconds:2);
print(d.inSeconds);  // d.inMinutes ...
```

#### Systembefehle absetzen
```
import 'dart:io';
main() {
  Process.run('cmd',["/c", 'dir']).then((ProcessResult results) {
    print(results.stdout);
  });
}

```

#### Externe Programme starten
```
import 'dart:io';
main() {
  Process.start('cmd',['/c', 'c:/Program Files/Just Great Software/EditPad Pro 7/EditPadPro7.exe' , 'text.txt']) ;
  Process.start('cmd',['/c', 'C:/Program Files/IrfanView/i_view64.exe' , '20180626_131334.jpg']) ;
}
```