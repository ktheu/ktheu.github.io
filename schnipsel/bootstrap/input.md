#### Inputs

[demo](./input_demo.html)

Beispiel 1:
```html
        <form class="form-inline" action="/eingabe" method="POST">
            <div class="form-group mb-2">
                <span> Eingabe: </span>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control" name="eingabe" placeholder="... etwas">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
```

Beispiel 2:
```html
       <form action="/eingabe" method="POST">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
```

Beispiel 3:
```html
        <form>
            <div class="form-group row">
                <label for="email" class="col-sm-1 col-form-label">Email</label>
                <div class="col-sm-5">
                    <input type="email" class="form-control" id="email">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-1 col-form-label">Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
```