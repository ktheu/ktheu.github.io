## Pytorch

[docs](https://pytorch.org/docs/stable/torch.html)


#### Version
```
print(torch.__version__)
```

#### übliche imports

```
import torch
import torch.optim as optim
import torch.nn.functional as F
import torch.nn as nn
import numpy as np
```

oder

```
import torch
import torch.optim as optim
import torch.nn.functional as F
import torch.nn as nn
from torch.utils.data import Dataset, TensorDataset
from torch.utils.data import DataLoader
from torch.utils.data.dataset import random_split
import numpy as np
torch.set_printoptions(linewidth=120)
```

#### Anmerkungen
Die `Variables-API` ist deprecated seit 0.4.0
Die Methode `backward` veranlasst die Berechnung der lokalen Gradienten.
`retain_grad` sorgt dafür, dass der Gradient des Zwischenergebnisses nicht weggeworfen wird.


#### Tensor

Shape (2,3) : 1.Achse hat Länge 2, 2.Achse hat Länge 3, d.h. der erste Index kann 2 Werte annehmen, 
der 2. Index 3 Werte. Die Daten in einem Tensor müssen vom gleichen Typ sein. Operationen mit mehreren
Tensors verlangen meist den gleichen Typ. Sie müssen auch auf der gleichen device sein.


### Tensor Datentypen

```
datatype                dtype           cpu                 gpu
32-bit floating point	torch.float32	torch.FloatTensor	torch.cuda.FloatTensor
64-bit floating point	torch.float64	torch.DoubleTensor	torch.cuda.DoubleTensor
16-bit floating point	torch.float16	torch.HalfTensor	torch.cuda.HalfTensor
8-bit integer (unsigned)	torch.uint8	torch.ByteTensor	torch.cuda.ByteTensor
8-bit integer (signed)	torch.int8	torch.CharTensor	torch.cuda.CharTensor
16-bit integer (signed)	torch.int16	torch.ShortTensor	torch.cuda.ShortTensor
32-bit integer (signed)	torch.int32	torch.IntTensor	torch.cuda.IntTensor
64-bit integer (signed)	torch.int64	torch.LongTensor	torch.cuda.LongTensor

```


#### Tensor erzeugen
Für den täglichen Gebrauch ist `torch.tensor()` die erste Wahl, wenn auf memory efficiency Wert gelegt
wird, nehmen wir `torch.as_tensor`.
```
data = np.array([1,2,3])
torch.Tensor(data)     #  gibt eine Float-Tensor, Ursprungsdaten werden kopiert
torch.tensor(data)     #  erhält den Datentyp des inputs, Ursprungsdaten werden kopiert
torch.as_tensor(data)  #  erhält den Datentyp des inputs, Ursprungsdaten werden geshared
torch.from_numpy(data) #  erhält den Datentyp des inputs, Ursprungsdaten werden geshared  

```
```
t = torch.Tensor(2, 3)                   # 2 Zeilen, 3 Spalten - Nullen
t = torch.Tensor(2, 3).uniform_(-1, 1)   # Werte uniform zwischen -1 und 1
t = torch.rand(2, 3)                     # Werte uniform zwischen 0 und 1  

t = torch.tensor([2,3],dtype=torch.double)  # shape = 2, Typ = float64
t = torch.tensor([1,2,3],dtype=torch.float64)
```

#### Tensor kopieren
x = t.clone().detach()
x = t.clone().detach().requires_grad_(True)

#### Indexing und Slicing

```
t[0][0].item()            # Auf den Wert zugreifen
```
#### Tensor-Attribute
t.dtype      # Type - z.B: int64 ...
t.device     # z.B. device(type='cpu')
t.layout     # z.B. strided
t.shape      # shape of Tensor
len(t.shape) # rank of Tensor (Dimension)

#### Tensor-Methoden
```
t.type()     # Type of Tensor - z.B. Long
t.size()     # shape of Tensor
t.dim()      # dimension of Tensor
t.view(1,6)  # reshape Tensor
t.reshape(1,6)   # reshape Tensor
t.t()        # transpose Tensor
t.numel()    # number of elements
```


#### Reduction Tensor Ops

```
t.sum()
t.prod()
t.mean()
t.std() 
```

Mit `dim=0` summieren wir über die erste Achse. d.h. der resultierende Tensor ist die Summe aller
Tensoren der 1.Achse
```
t = torch.tensor([
    [1,1,1,1],
    [2,2,2,2],
    [3,3,3,3]
])
t.sum(dim=0)    # tensor([6, 6, 6, 6])   = t[0]+t[1]+t[2]
t.sum(dim=1)    # tensor([ 4,  8, 12])   = t[0].sum, t[1].sum(), t[2].sum()

```

#### reshape, squeeze, unsqueeze


```
t.tensor.rand(3,4)
t.reshape(2,6)              # reshape ohne den rang (dimension) zu ändern
t.reshape(2,2,3)            # reshpae mit rang-änderung
t.squeeze()                 # macht aus shape (1,12) den shape 12
t.unsqueeze()               # macht aus shape 12 den shape 1,12

```
squeeze wird zum flatten benutzt. wenn ein input von einem convolutional layer in einen fully-connected layer geht,
muss er zuvor geflattened werden.

```
def flatten(t):
    t = t.reshape(1,-1)
    t = t.squeeze()
    return t
```
Die flatten-Operation kann man auch so durchführen
```
t.reshape(1,-1)[0]
t.reshape(-1)
t.view(t.numel())
t.flatten()
```


#### Torch-Methoden
```
torch.manual_seed(42)
torch.cuda.is_available()        # ist GPU verfügbar
torch.eye(2)                     # identity-matrix dim 2
torch.zeros(2,2)                 # 0-Matrix  
torch.ones(2,2)                  # 1-Matrix
torch.rand(2,2)                  # Zufallszahlen 0-1
torch.set_printoptions(linewidth=120)

```

#### Numpy Bride  (shared memory von numpyarray and tensor)

```
na = np.random.randn(2,2)
# t = torch.from_numpy(na)         # DoubleTensor
t = torch.from_numpy(na).float()   # FloatTensor
na1 = t.numpy()                    # Numpy-Array

X = torch.from_numpy(X).type(torch.FloatTensor)
```

#### Gradient ausgeben

```
x = torch.tensor([3.0],requires_grad=True)
y = x * x 
y.backward()
print(x.grad)

Ausgabe: tensor([6.])
```

```
# Gradient auch der Zwischenschritte ausgeben
x = torch.tensor([3.0],requires_grad=True)
y = x * x
z = 3 * y 
y.retain_grad()
z.backward()
print(x.grad, y.grad)

Ausgabe: tensor([18.]) tensor([3.])
```

#### Computation Graph plotten

```
import os
from torchviz import make_dot, make_dot_from_trace
os.environ["PATH"] += os.pathsep + 'c:/SonstigeProgramme/graphviz/release/bin/'    
make_dot(yhat) 
```

#### Cast

```
x = x.type(torch.FloatTensor)     # Double-Tensor nach Float casten
```

#### Optimizer

Der Optimizer ist für den Update der Parameter verantwortlich, als wichtigen Hyperparameter erhält er die learning_rate.
Der Update wird durch die step-Methode durchgeführt. Nach dem Update müssen für den nächsten Durchlauf die
lokalen Gradienten der Parameter wieder mit zero_grad auf 0 gesetzt werden.



#### Loss
`nn.MSELoss` erzeugt die loss-Funktion für den MSE. Wir können den Durchschnitt nehmen oder die Summe 
(reduction=’sum’/'mean')


#### Model
Um Predictions zu machen, benötigen wir ein Model. Dazu müssen wir von der `Module`-Klasse erben.
Die Methode `forward` berechnet die Prediction. Die Methode rufen wir nicht selbst auf, sondern wir rufen 
eine Instanz der Klasse auf. In der train-Methode des Models wird kein Trainigsstep durchgeführt, sondern das
Model wird in den Trainingsmodus versetzt. Manche Mechanismen, wie z.B. Dropout, verhalten sich bei Training anders
als bei Prediction.


#### Sequentielle Modelle
Für Modelle, bei denen der Output des einen layers der input des nächsten Layers ist, können wir das Sequential-Model
nutzen.


#### Dataset Classes
werden dafür benutzt, um das Training in Mini-Batches zu organisieren.

#### CNN
Der shape eines CNN hat typischerweise die Länge 4. D.h. der Input besteht aus einem rank-4 Tensor, also einem Tensor mit
4 Achsen. Die Bilddaten kommen in Form von Pixeln, z.B. 24x24 (in Fashion-DS) oder 224x224  . Üblicherweise sind die beiden letzten Achsen die Height und Width
Koordinaten des betreffenden Pixels
[?,?,H,W]. 

Die 2. Achse ist der Color Channel [?,C,H,W] mit typischen werten 1 (Grau) oder 3 (RGB). Die Interpretation dieser
Achse ändert sich, wenn der Input durch einen convolutional Layer gegangen ist. Die Länge des ersten Kanals ist die
Batch-Size. Jeder Input des Batches bekommt hier eine fortlaufende Nummmer.
[B,C,H,W].

Um einen Tensor dieses Typs zu flatten, nutzen wir 
`t.flatten(start_dim=1)`

#### Broadcasting

```
t = torch.tensor([[1,2],
                 [3,4]])

t + 2
```
Das skalare 2 wird broadcasted zum shape von t, anzsehen mit:

```
np.broadcast_to(2,t.shape)
```