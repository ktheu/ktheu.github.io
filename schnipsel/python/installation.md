## Python Installationen

#### Anaconda

Bei der Verwendung von Anaconda, Python nicht nochmal separat installieren, ggf. alte Sachen hier löschen:
`c:\Users\khthe\AppData\Roaming\Python`

Die Anaconda-Installation für einen einzelnen User geht nach: `c:\Users\khthe\Anaconda3\`. Dort ist
das `base`-Environment. 

#### Empfehlung

Um bei der Verwendung von VS-Code als IDE keine Probleme zu bekommen:
1. Deinstallation aller anderen Python-Installationen
2. Prüfen ob in `c:\Users\khthe\AppData\Roaming\Python` noch was altes ist
3. Anaconda-Installation für alle User
4. Bei Anaconda-Installation Aufnahme von Python in den System Pfad (auch wenn das nicht recommended ist)

Die Anaconda-Installation für alle User geht nach `c:\ProgramData` (versteckter Ordner)
und in `Path` werden folgende Einträge gemacht:

```
C:\ProgramData\Anaconda3
C:\ProgramData\Anaconda3\Library\mingw-w64\bin
C:\ProgramData\Anaconda3\Library\usr\bin
C:\ProgramData\Anaconda3\Library\bin
C:\ProgramData\Anaconda3\Scripts
```


Ein zusätzliche Environment z.b `tensorflow` kommt (vermutlich je nach conda-Version) in folgende Location:

conda 4.7.12:
```
c:\Users\khthe\.conda\envs\tensorflow             
c:\Users\khthe\.conda\envs\tensorflow\python.exe            # executor
c:\Users\khthe\.conda\envs\tensorflow\lib\site-packages     # installierten packages

```

conda 4.8.0 
```
c:\Users\ProgramData\Anaconda3\envs                         
c:\Users\ProgramData\Anaconda3\envs\tensorflow\python.exe          # executor
c:\Users\ProgramData\Anaconda3\envs\tensorflow\lib\site-packages   # installierten packages
```


#### Tensorflow mit Anaconda 

Den Anaconda-Prompt als Administrator ausführen und dann eingeben:

0. `conda update -n base -c defaults conda`             # Update conda
1. `conda create -n tensorflow python=3.7 anaconda`
2. `activate tensorflow`
3. `pip install opencv-python`
4. `pip install pygame`
5. `pip install tensorflow==2.0.0`

Test in Anaconda-Prompt:

1. `python`
2. `import tensorflow`    es darf keine Fehlermeldung kommen
3. `exit()`


#### VSCode für Python

Folgende Extensions sollten installiert sein:

`Python` und `Code-Runner`

Einstellungen: Zahnrad links unten, Settings, oben rechts neben dem Dreieck das Symbol für die JSON-Ansicht.

Den Eintrag `python.pythonPath` benötigt man nicht, da Python im Systempfad

```javascript
    "terminal.integrated.shell.windows":  "C:\\WINDOWS\\System32\\cmd.exe",
    "files.autoSave": "onFocusChange",
    "code-runner.clearPreviousOutput": true,
    "code-runner.showExecutionMessage": false,
    "code-runner.saveFileBeforeRun": true,
    "code-runner.fileDirectoryAsCwd": true,
    "code-runner.executorMap": {
        "python": "C:\\ProgramData\\Anaconda3\\envs\\tensorflow\\python.exe",
    },
 ```

 Mit `Strg+Alt+N` führt der Code-Runner dann das aktuelle Python-Programm aus.
 Unten links an dem blauen Band kann man das Python-Environment auswählen.