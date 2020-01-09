## Perceptron mit 2 Inputs


Ein einfaches Perceptron, Gewichte und Bias gesetzt

```
class Perceptron(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(in_features=2, out_features=1)
        self.fc1.weight.data = torch.tensor([[3.0, 1.0]])
        self.fc1.bias.data = torch.tensor([2.0])
            
    def forward(self, t):
        t = self.fc1(t)
        return t
    
p = Perceptron()
x = torch.tensor([3, 2])
# x = torch.Tensor([[3,4],[1,2],[2,2]])   # geht auch
p(x)
```

#### Neuron mit 2 Inputs und Sigmoid

```
class Neuron(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(in_features=2, out_features=1)
        self.fc1.weight.data = torch.tensor([[3.0, 1.0]])
        self.fc1.bias.data = torch.tensor([2.0])
            
    def forward(self, t):
        t = self.fc1(t)
        t = torch.sigmoid(t)
        return t
    
p = Neuron()
x = torch.tensor([[0,0],[0,1],[1,0],[1,1]]).float()
p(x)

```

