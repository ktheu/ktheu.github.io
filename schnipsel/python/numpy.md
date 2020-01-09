## Numpy

[Numpy Tutorial Stanford CS231](http://cs231n.github.io/python-numpy-tutorial/)

#### Random

`np.random.randn()`  erzeugt eine Zufallszahl aus der Normalverteilung mit Mittelwert 0 und Standardabweichung 1.

```
np.random.randn()        # eine Zahl
np.random.randn(5)       # ein Array aus 5 Elementen
np.random.randn(2,4)     # eine Matrix mit 2 Zeilen und 4 Spalten
```

Ein Array mischen:
```
a = np.arange(10)
np.random.shuffle(a)
``` 

#### Arange
a = np.arange(100)      # Array von 0 bis 99