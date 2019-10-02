### Java Schnipsel


#### Streams

##### IntStream _[doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html)_

IntStream.range()  _[doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html#range-int-int-)_

```
int[] a = IntStream.range(0, 10).toArray();
int[] a = IntStream.range(0, 10).map(x->2*x).toArray();
```

Die erste Zahl der einzulesenden Datei gibt an, wieviele Zahl noch kommen:
```
int[] a = IntStream.range(0, sc.nextInt()).map(x->sc.nextInt()).toArray();
```