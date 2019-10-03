### Python

##### Einlesen von Daten

Zwei Zahlen, die in einer Zeile stehen.

```
width, height = [int(k) for k in f.readline().split()]
# width, height = [int(k) for k in input().split()]
```
oder so:
```
width, height = map(int, f.readline().split())
# width, height = map(int, input().split())
```

#### Zahlen in eine Liste einlesen, eine Zeile pro Zahl

```
heights = [int(input()) for x in range(8)]
```
