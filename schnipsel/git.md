### Git - Schnipsel

Um das log-Kommando zu variieren wird ein alias logline eingeführt

```
$ git config --global alias.logline "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
$ git logline
```

VSCode als Editor nutzen
```
$ git config --global core.editor "code --wait"
```

### Sonstiges
```
$ git branch -d name   # delete brach
$ git checkout -b name  # neuen branch erstellen mit checkout
$ git commit -am 'msg'  # alles stagen und committen
```

### Git-UseCases

#### Auf 2 PCs abwechselnd am gleichen Code in Directory D arbeiten.

1. Mit Explorer nach D gehen, rechte Maustaste, Git Bash Here
2. $git init, $git commit -am 'initial commit'
3. Auf GitHub ein Repo anlegen: RD und http-url kopieren.
4. $git remote add origin url, git push -u origin master



#### Ein lokales und remote Repo wieder auf den Zustand des initial commit setzen

Bsp. initial commit = 8ec0, im lokalen repo:

```
$ git reset 8ec0 --hard
$ git push -f 
```

