## Python

### Einlesen von Daten

Mehrere Zahlen, die in einer Zeile stehen.

```
width, height = [int(k) for k in f.readline().split()]
width, height = [int(k) for k in input().split()]
```
oder so:
```
width, height = map(int, f.readline().split())
width, height = map(int, input().split())
```

#### Zahlen in eine Liste einlesen, eine Zeile pro Zahl

```
heights = [int(input()) for x in range(8)]
```

#### Zahlen in eine Liste einlesen und noch was hinzufügen
```
a = [0, *map(int, input().split()), w]   # oder
a = [0] + map(int, input().split()) + [w]
```

### Listen

#### Mit zwei versetzen Schleifen durch eine Liste laufen
```
for i in range(len(a)-1):
    for j in range(i+1,len(a)):
        print(a[j]-a[i],end = ' ')
    print()
```
oder so:
```
for i, x in enumerate(a[:-1]):
    for y in a[i+1:]:
        print(y-x,end=' ')
    print()   
```

### Dictionaries

#### In einem dict abspeichern, wie häufig Werte in einer Liste vorkommen
```
m = {}
for x in a:
    if x in m:
        m[x]+=1
    else:
        m[x]=1
```
oder so:
```
m = {}
for x in a:
    m[x] = m.get(x,0) + 1
```
oder mit der Klasse Counter _[doc](https://docs.python.org/3.8/library/collections.html#collections.Counter)_

```
from collections import Counter
m = Counter(a)
# m = dict(Counter(a))
```