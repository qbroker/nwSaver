# nwTWcSaver
Save TiddlyWiki classic in nw.js

Steps to install a TWc in nw.js environment, support for Linux and Windows.

1. Download nw.js for your OS, sdk or normal, both will work, https://nwjs.io 
2. Unzip the downloaded file, you will have a folder like: xxx/nwjs-sdk-v0.38.1-linux-x64 
3. Download the files from Github, the green button "Clone or download"
4. Unzip the downloaded nwTWcSaver-master.zip 
5. Copy package.json from nwTWcSaver-master to xxx/nwjs-sdk-v0.38.1-linux-x64
6. Create a folder named data in xxx/nwjs-sdk-v0.38.1-linux-x64, so you get xxx/nwjs-sdk-v0.38.1-linux-x64/data
7. Copy nwSaver.html and nwTWcSaver.js from nwTWcSaver-master to xxx/nwjs-sdk-v0.38.1-linux-x64/data
8. On Linux execute nw in the folder xxx/nwjs-sdk-v0.38.1-linux-x64, on windows it is nw.exe
9. The save macro can be added to SideBarOptions like ```<<nwsaver>>```
10. zzz-config provides settings for backup path and makes sure that edit options are visable, if only view options are visable reload once


Have a nice day, Okido