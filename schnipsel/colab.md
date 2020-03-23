## Colab

### Google Drive mounten

*Google Drive, New, More, Google Colaboratory*

```
from google.colab import drive
drive.mount('/content/gdrive')
```

Auf den Link gehen, das Google-Konto wählen und den Authorization Code kopieren.

Dann erscheint die Meldung

```
Mounted at /content/gdrive
```

Liste der Files anschauen mit:

```
!ls  
gdrive	sample_data

```

Liste der Files anschauen, die in Google Drive zu sehen sind:

```
!ls gdrive/'My Drive'
```

### Eine Datei vom lokalen Dateisystem importieren

```
from google.colab import files
uploaded = files.upload()
```
Es erscheint ein File-Chooser, über den man ein lokales File auswählen kann. Das wird in das Colab-Filesystem geladen, erscheint aber nicht im Google-Drive. Es kann dann mit *open* geöffnet und gelesen werden.

```
f = open('maze02.txt')
lines = f.read().splitlines()
for x in lines:
  print(x)
```

### Eine Datei aus Google-Drive öffnen
```
f = open("gdrive/My Drive/data/maze01.txt")    
lines = f.read().splitlines()
f.close()

```


#### Die Flower Daten importieren:
Die Datei liegt außerhalb von Google-Drive, ist aber mit *!ls* zu sehen.

```
!wget -cq https://s3.amazonaws.com/content.udacity-data.com/courses/nd188/flower_data.zip
!unzip -qq flower_data.zip
```

Die Daten dann nach Google-Drive importieren (braucht man in der Regel nicht)
``` 
!cp flower_data gdrive/'My Drive' -r
```

Einen Ordner mit Inhalt löschen
```
!rm -rf 'data/bears/grizzly'
```