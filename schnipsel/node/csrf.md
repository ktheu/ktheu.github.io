## CSRF Protection

CSRF = Cross-Side Request Forgery

```
npm install csurf

const csrf = require('csurf');
const csrfProtection = csrf();

//  nach dem init der session:
app.use(csrfProtection);
 
```

Für jeden nicht get-Request schaut die middleware, ob der richtige csrf-Token im request-body vorhanden ist.

Dazu müssen wir in alle views, die einen Post-request generieren können (und der die Existenz einer Session voraussetzt, also z.B. dass wir angeloggt sind), beim rendern des views
einen weitere Paramter mitgeben:

```javascript
router.get('/tuwas', (req, res) => {
  res.render('tuwas', {
    errorMessage: req.flash('error')
    csrfToken: req.csrfToken()
  });
});
```

Wir können den Token auch generell jedem view, den wir rendern mitgeben. Dann braucht man das
nicht in jeder render-Anweisung machen. Mittels locals vor den anderen app.use Anweisungen.
Aber in den views muss man überall bei post-requests den hidden-value einfügen (siehe unten).


```javascript
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

```






In den views müssen wir überall dort, wo post-requests abgeschickt werden ein hidden-field mit
dem csrf-token einfügen, am besten direkt beim submit-Button. Der Name muss `_csrf` sein.


```html
        <form action='/tuwas' method='POST'>
                <!-- ... -->
                <div class="col-sm-1">
                    <input type="hidden" name = "_csrf" value="<%=csrfToken %>">
                    <button type="submit" class="btn btn-primary">Login</button>
                    
                </div>
            </div>
        </form>
```

