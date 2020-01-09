

#### Lineare Auswertung mit einem Input
```
p = nn.Linear(1,1)
p.weight.data = torch.tensor([3.0])
p.bias.data = torch.tensor([2.0])
list(p.parameters())
x = torch.tensor([2,3,4]).view(3,1,1).float()
p(x)
```

#### Lineare Auswertung mit einem Input
Wenn man sich den Input als Spaltenvektor vorstellt, ist die letzte Zahl im view
die Anzahl der Inputs
```
p = nn.Linear(2,1)
print(list(p.parameters()))
x = torch.tensor([[[2.0, 3.0]]])
# x = torch.tensor([2,3]).view(1,1,2).float()
p(x)
```

#### Gewichte und Bias für einen Input mit zwei Werten vorgeben
```
p = nn.Linear(2,1)
p.weight.data = torch.tensor([[3.0, 1.0]])
p.bias.data = torch.tensor([2.0])
print(list(p.parameters()))
#x = torch.tensor([[[2.0, 3.0]]])
x = torch.tensor([2,3]).view(1,1,2).float()
p(x)
```


 

#### Gewichte und Bias für mehrere Inputs mit zwei Werten vorgeben
```
p = nn.Linear(2,1)
p.weight.data = torch.tensor([[3.0, 1.0]])
p.bias.data = torch.tensor([2.0])
print(list(p.parameters()))
#x = torch.tensor([[[2.0, 3.0]]])
x = torch.tensor([[2,3],[3,3]]).view(2,1,2).float()
# x = torch.tensor([2,3,3,3]).view(2,1,2).float()
p(x)
```

Bei `view(k,c,r)` bedeuten die Zahlen: k - Anzahl Datenpunkte,
c - Anzahl Spalten, aus denen eine Datenpunkt besteht, r - Anzahl Zeilen,
aus denen ein Datenpunkt besteht. In unseren Beispielen ist c immer 1.

#### Ein Neuron mit zwei Inputs, und vorgegebenen Gewichten für die vier 0-1 Datenpunkte

```
p = nn.Linear(2,1)
p.weight.data = torch.tensor([-1.0, 1.0])
p.bias.data = torch.tensor([-1.5])
net = torch.nn.Sequential(
    p,
    torch.nn.Sigmoid()
)
x = torch.tensor([0,0,0,1,1,0,1,1]).view(4,1,2).float()
net(x)
```