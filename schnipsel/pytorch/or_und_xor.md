Die OR-Funktion

```
model = nn.Sequential(
    nn.Linear(2,1),
    nn.Sigmoid()
)
x = torch.tensor([0,0,0,1,1,0,1,1]).view(4,1,2).float()
y = torch.tensor([0,1,1,1]).view(4,1,1)
 
optimizer = optim.SGD(model.parameters(), lr=0.1)
loss_fn = nn.MSELoss(reduction='mean')

for epoch in range(1000):
    yhat = model(x)
    loss = loss_fn(y, yhat)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

model(x)
```

Die XOR-Funktion

```
torch.manual_seed(42)
model = nn.Sequential(
    nn.Linear(2,3),
    nn.ReLU(),
    nn.Linear(3,1),
    nn.Sigmoid()
)
x = torch.tensor([0,0,0,1,1,0,1,1]).view(4,1,2).float()
y = torch.tensor([0,1,1,0]).view(4,1,1)
 
optimizer = optim.SGD(model.parameters(), lr=0.1)
loss_fn = nn.MSELoss(reduction='mean')

for epoch in range(2000):
    yhat = model(x)
    loss = loss_fn(y, yhat)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

model(x)
```

Überprüfung der Ergebnisse:

```
import math

def relu2(x1,x2,w1,w2,b):
    z = x1*w1 + x2*w2 + b
    return max(0,z)

def sigmoid3(x1,x2,x3,w1,w2,w3,b):
    z = x1*w1+x2*w2+x3*w3+b
    return  1/(1+math.exp(-1.0*z))

x1, x2 = 1, 1
a1 = relu2(x1,x2,2.2735,2.2736,-2.2739e+00)
a2 = relu2(x1,x2,1.4515,1.6663,1.9034e-04)
a3 = relu2(x1,x2,-1.0563,-0.8362,1.0564e+00)
a4 = sigmoid3(a1,a2,a3,-3.8567,2.1239,-1.5844,-0.5843)
 
a1, a2, a3, a4
```