## NEDB

```

a = [{name: 'Malte', score: 30}, {name: 'Sören', score: 20, {name: 'Lena', score: 15}, {name: 'Maike', score: 18}, {name: 'Thorben', score: 12}]
const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();
database.insert(a);

```