## Einfache Lineare Regression mit vorgegebenen Datenpunkten

```
import torch
import torch.optim as optim
import torch.nn as nn

y = torch.tensor([20,30,40]).view(3,1).float()
x = torch.tensor([1,2,3]).view(3,1).float()

#torch.manual_seed(42)
model = nn.Sequential(nn.Linear(1, 1))
optimizer = optim.SGD(model.parameters(), lr=0.01)
loss_fn = nn.MSELoss(reduction='mean')

for epoch in range(2000):
    model.train()
    yhat = model(x)
    loss = loss_fn(y, yhat)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

#print(*model.parameters())

model.eval()
x1 = torch.tensor([4,5]).view(2,1).float()
y1 = torch.tensor([50,60]).view(2,1).float()
 
yhat = model(x1)
#print(yhat)
val_loss = loss_fn(y1, yhat)
print('loss:',val_loss.item())
```

## Einfache lineare Regression mit Zufallsdatenpunkten

```
import torch
import torch.optim as optim
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

np.random.seed(42)
x = np.random.rand(100, 1)
y = 1 + 2 * x + .1 * np.random.randn(100, 1)

idx = np.arange(100)
np.random.shuffle(idx)

train_idx = idx[:80]
val_idx = idx[80:]

x_train, y_train = x[train_idx], y[train_idx]
x_val, y_val = x[val_idx], y[val_idx]
plt.scatter(x_train,y_train,s=5)
plt.show()

plt.scatter(x_val,y_val,s=5,c="r")
plt.show()

x = torch.from_numpy(x_train).float()
y = torch.from_numpy(y_train).float()

model = nn.Sequential(nn.Linear(1, 1))

lr = 1e-1
optimizer = optim.SGD(model.parameters(), lr=lr)
loss_fn = nn.MSELoss(reduction='mean')
n_epochs = 1000

# training
for epoch in range(n_epochs):
    model.train()
    yhat = model(x)
    loss = loss_fn(y, yhat)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()


# evaluation
model.eval()
x = torch.from_numpy(x_val).float()
y = torch.from_numpy(y_val).float()

yhat = model(x)
val_loss = loss_fn(y, yhat)
print(val_loss.item())
```

### Einfache Regression mit Dataset und Minibatch

```
import torch
import torch.optim as optim
import torch.nn as nn
from torch.utils.data import Dataset, TensorDataset
from torch.utils.data import DataLoader
from torch.utils.data.dataset import random_split
import numpy as np

np.random.seed(42)
x = np.random.rand(100, 1)
y = 1 + 2 * x + .1 * np.random.randn(100, 1)

x_tensor = torch.from_numpy(x).float()
y_tensor = torch.from_numpy(y).float()

dataset = TensorDataset(x_tensor, y_tensor)
train_dataset, val_dataset = random_split(dataset, [80, 20])

train_loader = DataLoader(dataset=train_dataset, batch_size=16)
val_loader = DataLoader(dataset=val_dataset, batch_size=20)

torch.manual_seed(42)
model = nn.Sequential(nn.Linear(1, 1))

# training
lr = 1e-1
optimizer = optim.SGD(model.parameters(), lr=lr)
loss_fn = nn.MSELoss(reduction='mean')
n_epochs = 2000

for epoch in range(n_epochs):
    for x_batch, y_batch in train_loader:
        yhat = model(x_batch)
        loss = loss_fn(y_batch, yhat)
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()
        
# evaluation
model.eval()
for x_val, y_val in val_loader:
    yhat = model(x_val)
    val_loss = loss_fn(y_val, yhat)
    print(val_loss.item())
```