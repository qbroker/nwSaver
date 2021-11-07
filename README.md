# nwSaver
Save TiddlyWiki classic in nw.js

## Steps to install a TWc in nw.js environment

*This readme uses Linux if you are on Windows read Windows were Linux is used.*

1. Download nw.js for your OS, sdk or normal, both will work, https://nwjs.io 
2. Unzip the downloaded file, you will have a folder like: xxx/nwjs-sdk-v0.38.1-linux-x64 
3. Download the files from Github, the green button "Clone or download"
4. Unzip the downloaded nwSaver-master.zip 
5. Copy package.json from nwSaver-master to xxx/nwjs-sdk-v0.38.1-linux-x64
6. Create a folder named data in xxx/nwjs-sdk-v0.38.1-linux-x64, so you get xxx/nwjs-sdk-v0.38.1-linux-x64/data
7. Copy nwSaver.html from nwSaver-master to xxx/nwjs-sdk-v0.38.1-linux-x64/data
8. On Linux execute nw in the folder xxx/nwjs-sdk-v0.38.1-linux-x64
9. On Windows execute nw.exe in the folder xxx/nwjs-sdk-v0.38.1-linux-x64
10. nw.js should start and give you TWc

## TWc information
* The TWc nwSaver.html in this repo has the plugin loaded and works out of the box
* To use your own TWc import all tiddlers into nwSaver.html, if you rename it, rename "main" in package.json too
* The save macro can be added to SideBarOptions like ```<<nwsaver>>```
* Now you should have a TWc that can save
* You need to use a TWc that has already the nwSaver-Plugin.js installed during loading, else saving is not possible

### Tiddlywiki license
TiddlyWiki is Copyright 2013 UnaMesa Assocation
It is licensed under a BSD License. See [here](https://github.com/TiddlyWiki/tiddlywiki/blob/master/html/copyright.txt) for the exact terms.

### Tiddlywiki @ Google groups
https://groups.google.com/forum/#!forum/tiddlywikiclassic
### Tiddlywiki @ Github
https://github.com/TiddlyWiki/TiddlyWiki

## nw.js
* In package.json the path to the wiki is defined in "main": "./data/nwSaver.html"
* If you edit package.json make sure to be accurate, any typo causes a failure during startup

## nwHive
nwHive moved to its own repo https://github.com/nwOkido/nwHive, this is under development.


Have a nice day, Okido
