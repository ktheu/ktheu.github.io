## SignIn

app.js
```javascript
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
const param = require("./.data/param.js");

// ------------- MongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  benutzername: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});
const User = mongoose.model('User', userSchema);

// --------------- Routes --------------------

const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login');
  }
  next();
}

const router = express.Router()

router.get('/', (req, res) => {
  res.render('welcome')
});

router.get('/awesome', isAuth, (req, res) => {
  res.render('awesome');
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    errorMessage: req.flash('error')
  })
});

router.get('/login', (req, res) => {
  res.render('login', {
    errorMessage: req.flash('error')
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

router.post('/login', (req, res) => {
  const benutzername = req.body.benutzername;
  const password = req.body.password;

  const doit = async () => {
    const user = await User.findOne({
      benutzername: benutzername
    });
    if (!user) {
      req.flash('error', 'Invalid Username');
      return res.redirect('/login');
    }
    const doMatch = await bcrypt.compare(password, user.password);
    if (doMatch) {
      req.session.isLoggedIn = true;
      req.session.benutzername = user.benutzername;
      // await req.session.save();
      res.redirect('/');
    } else {
      req.flash('error', 'Invalid Password');
      res.redirect('/login');
    }
  }

  doit().catch(err => {
    console.log(err);
    res.redirect('/login');
  })

});

router.post('/signup', (req, res) => {
  const benutzername = req.body.benutzername;
  const password = req.body.password

  const doit = async () => {
    let user = await User.findOne({
      benutzername: benutzername
    });
    if (user) {
      req.flash('error', 'Benutzername ' + benutzername + ' schon vergeben.');
      return res.redirect('signup');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    user = new User({
      benutzername: benutzername,
      password: hashedPassword,
    });
    await user.save();
    res.redirect('/login');
  }

  doit().catch(err => {
    console.log(err);
  })

});

// ------------ app setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(
  session({
    secret: param.MYSECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.benutzername = req.session.benutzername;
  next();
});

app.use(flash());
app.use('/', router);

let port = process.env.PORT ? process.env.PORT : 3000; // Glitch or localhost

const doit = async () => {
    await mongoose.connect(param.MONGODB_URI);
    app.listen(port);
}

doit().catch(err => {
  console.log(err);
});
```

in welcome.ejs
```html

        <p class="h2 mt-4">Welcome</p>

        <p>To view the awesome page, you have to login.</p>

        <div class="my-4"><a href="/awesome" class="btn btn-warning">Awesome Page</a></div>

        <% if (isAuthenticated) { %>
        <div>
            <div class="my-4"><a href="/logout" class="btn btn-danger">Logout</a></div>
            <p>You are logged in as: <%=benutzername %></p>
        </div>
        <% } else { %>
            <div class="my-4"><a href="/login" class="btn btn-primary">Login</a></div>
            <p>You are not logged in</p>
        <% }  %>
    </div>
```

in login.ejs
```html
        <p class="h2 mt-4">Login</p>

        <form action='/login' method='POST'>
            <div class="form-group row">
                <label for="benutzername" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="benutzername" name="benutzername">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="d-flex my-4 justify-content-start ">
            <p class="mx-4">If you don't have a Username: </p>
            <a href="/signup" class="btn btn-success mx-4">Signup</a>
        </div>

        <div>
            <% if (errorMessage && errorMessage.length > 0) { %>
            <button type="button" class="btn btn-outline-danger" disabled>
                <%= errorMessage %>
            </button>
        </div>
        <% } %>
     
```

in signup.html
```html
      <form action='/signup' method='POST'>
            <div class="form-group row">
                <label for="benutzername" class="col-sm-2 col-form-label">Benutzername</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="benutzername" name="benutzername" value="">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" id="password" name="password" value="">
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>

        <% if (errorMessage && errorMessage.length > 0) { %>
            <button type="button" class="btn btn-outline-danger" disabled>
            <%= errorMessage %>
        </button>
        <% } %>
```

in awesome.html
```html
      <div class="jumbotron">
            <h1 class="display-4">Awesome</h1>
            <p class="lead">This is an awesome jumbotron.</p>
       </div>
```