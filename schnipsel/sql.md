### SQL

_[W3School](https://www.w3schools.com/sql/)_

#### Tabelle anlegen 

SQLite:
```
"CREATE TABLE student (name TEXT, ort TEXT, fach TEXT, semester INTEGER)"
```


https://www.w3schools.com/sql/sql_create_table.asp


#### Große MySQL Datenbank laden
```
cd xampp/mysql/bin
mysql -u root -p
set global net_buffer_length=1000000;      --Set network buffer length to a large byte number
set global max_allowed_packet=1000000000;  --Set maximum allowed packet size to a large byte number
SET foreign_key_checks = 0;          --Disable foreign key checking to avoid delays,errors and unwanted behaviour
use DATABASE_NAME;                   -- Das steht eventuell schon im sql-dump file
source G:\file.sql;                  --Import your sql dump file
SET foreign_key_checks = 1;          --Remember to enable for
```

