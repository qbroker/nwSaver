# nwSaver
Save TiddlyWiki classic in NW.js

## Steps to install a TiddlyWiki classic in a NW.js environment

*This readme uses Linux if you are on Windows read Windows where Linux is used.*

1. Download NW.js for your OS, sdk or normal, both will work, https://nwjs.io
2. Unzip the downloaded file, you will have a folder like: xxx/nwjs-sdk-v0.70.1-linux-x64
3. Download the files from Github, the green button "Clone or download"
4. Unzip the downloaded nwSaver-master.zip
5. Copy package.json from nwSaver-master to xxx/nwjs-sdk-v0.70.1-linux-x64
6. Create a folder named data in xxx/nwjs-sdk-v0.70.1-linux-x64, so you get xxx/nwjs-sdk-v0.70.1-linux-x64/data
7. Copy nwSaver.html from nwSaver-master to xxx/nwjs-sdk-v0.70.1-linux-x64/data
8. On Linux execute nw in the folder xxx/nwjs-sdk-v0.70.1-linux-x64
9. On Windows execute nw.exe in the folder xxx/nwjs-sdk-v0.70.1-linux-x64
10. nw.js should start and give you TiddlyWiki classic

## TiddlyWiki classic information
* The [TiddlyWiki classic](https://qbroker.github.io/nwSaver/) in this repo has the plugin loaded and works out of the box
* To use your own TiddlyWiki classic download the file index.html in ./docs, you rename it and make sure that the same name is used in package.json
* The save macro can be added to SideBarOptions like ```<<nwsaver>>```
* Now you should have a TiddlyWiki classic that can save
* You need to use a TiddlyWiki classic that has already the nwSaver-Plugin.js installed during loading, else saving is not possible

### TiddlyWiki license
TiddlyWiki is Copyright 2013 UnaMesa Assocation
It is licensed under a BSD License. See [here](https://github.com/TiddlyWiki/tiddlywiki/blob/master/html/copyright.txt) for the exact terms.

### nwSaver-Plugin.js, open in browser
https://qbroker.github.io/nwSaver/

### TiddlyWiki @ Google groups
https://groups.google.com/forum/#!forum/tiddlywikiclassic

### TiddlyWiki @ Github
https://github.com/TiddlyWiki/TiddlyWiki

### TiddlyWiki classic
https://classic.tiddlywiki.com/

## NW.js
* In package.json the path to the wiki is defined in "main": "./data/nwSaver.html"
* If you edit package.json make sure to be accurate, any typo causes a failure during startup

## nwHive
nwHive moved to its own repo https://github.com/qbroker/nwHive, this is under development.


Have a nice day, Okido
