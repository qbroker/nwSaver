/***
|Title |nwSaver-Plugin.js |
|Description |This is a saver plugin for [[TiddlyWikiClassic]] running with [[NW.js]] |
|Documentation | |
|Version |2.2.14 |
|Version library | |
|Plugin type |systemConfig |
|Source |nwSaver-Source |
|Author |Okido |
|Original author | |
|License |See the license section |
|Core version |≥2.9.4 |
|Browser |A modern browser supporting ES6 or [[NW.js]] |
|Status |EXPERIMENTAL - SUBJECT TO CHANGE |
|Build date - time |08-11-2025 - 10:40, build with [[pluginBuilder-Plugin.js]] |

!!!Documentation
<<<
The [[nwSaver-Plugin.js]] provides a saver for [[TiddlyWikiClassic]] that is running in a [[NW.js]] environment.
Besides saving the plugin also provides some basic I/O functions.
When running in a browser the default [[TiddlyWikiClassic]] saver is used.
<<<
!!!Usage
<<<
!Available functions in this plugin
config.macros.nwsaver.direntries(folderPath) >> returns an object with the key/value for folder path and the entries in an array, in Posix style "/"
config.macros.nwsaver.direntriesattr(folderPath, "posix") >> returns an object with the file and folder attributes, default is Posix style with "/", alternative is Windows with "\\", invoked with "win32"
config.macros.nwsaver.direntriesattrfilter(folderPath, "dir" || "file" || "") >> filter by dir, file or no filter
config.macros.nwsaver.load(fullPath) >> load a file from disk, returns the content
config.macros.nwsaver.loadAsync(fullPath) >> load a file from disk async, returns the content or false
config.macros.nwsaver.save(fullPath, content, message = true or false) >> save a file to disk, existing files are overwritten
config.macros.nwsaver.saveAsync(fullPath, content, message = true or false) >> save a file to disk async, existing files are overwritten
config.macros.nwsaver.copy(fullPathSource, fullPathTarget) >> copies a file
config.macros.nwsaver.delete(fullPath) >> delete a file or folder
config.macros.nwsaver.openfile(fullPath) >> open a file with the default application, starts from the commandline
config.macros.nwsaver.exist(fullPath) >> check if the file/folder exist
config.macros.nwsaver.rename(fullPathSource, fullPathTarget) >> rename a file
config.macros.nwsaver.normalizepath(fullPath) >> normalize a path following os rules, Posix "/" and Windows "\\" 
config.macros.nwsaver.mkdir(fullPath) >> create a path, replacement for config.macros.nwsaver.createpath(fullPath)
<<<
!!!Configuration
<<<
Put following code in [[SideBarOptions]] <nowiki><<nwsaver>></nowiki><<nwsaver>>.
The default backup pattern for [[TiddlyWikiClassic]] is the filename + a date part: -YYYY.html, -MMM.html, -ddd.html and -latest.html.
For a different backup pattern create a system tiddler with the title [[zzzz-config]] and tag it with systemConfig.
Put the following code in the system tiddlers:
{{{
 // Possible settings for nwSaver backup pattern
 // [ ["YYYY"], ["MMM"], ["ddd"], ["d0DD"], ["m0mm"], ["latest",0], ["h0hh"], ["m0mm"], ["s0ss"] ];
 config.options.nwSaver = [ ["YYYY"], ["MMM"], ["ddd"], ["d0DD"], ["m0mm"], ["latest",0] ]; 
}}}
To assure that the [[TiddlyWikiClassic]] is loaded in edit mode all the time add following code to SystemSettings:
{{{
chkHttpReadOnly: false;
}}}
<<<
!!!Revisions
<<<
08.11.2025 2.2.14 Optimized all functions, changed the internal save and load functions for TWC to async
17.07.2025 2.2.12 Optimized code and proper returns in case of errors
18.03.2025 2.2.11 Fixed a problem with the return value of ...direntriesattr(folderPath, "win32"), now it correctly returns with "\\"
22.12.2023 2.2.10 Removed some console.log() messages
04.11.2023 2.2.9 Fix a load and save bug when there are spaces in the path
28.10.2023 2.2.8 Change this reference for button onclick handlers  
10.09.2023 2.2.7 Added message if file save is successful
25.06.2023 2.2.6 Changed the build process to the latest pluginBuilder format
22.04.2023 2.2.5 Renamed all variations of TiddlyWiki... to [[TiddlyWikiClassic]]
06.10.2022 2.2.4 Fix bug, function normalize does not exist when the native saver macro is used
27.08.2022 2.2.2 Paths are now build with path.resolve to ensure proper paths on Windows
20.08.2022 2.2.0 To open files from windows command line "&" needs to be escaped to "^&", this is added
12.12.2021 2.1.0 Path separators are by default Posix "/" style, optional is Windows "\\" style, use "win32" to invoke this 
13.11.2021 2.0.9 Fixed a problem with special characters in path and filenames that give a normalization error
07.08.2021 2.0.8 Added path normalization to all functions, to prevent problems on windows systems
16.07.2021 2.0.7 Checked possible several spaces issue in windows filenames, files can not be opened with the default application, no problems found
28.05.2021 2.0.6 Fixed spaces problem on windows, no limit anymore for number of spaces in a path 
23.05.2021 2.0.5 Fixed some typos
16.05.2021 2.0.4 Fixed opening of paths with more than two spaces once more
04.05.2021 2.0.3 Fixed opening of paths with spaces
26.04.2021 2.0.2 Added folder deletion to the delete function, folders must be empty
27.10.2020 2.0.1 Added a two functions, check if a file/folder exist and rename
29.08.2020 2.0.0 Renamed functions and added filter options for folders, the old function names can still be used
16.07.2020 1.2.8 Changed windows path regex to <nowiki>path.win32.normalize(nw.__filename)</nowiki>
29.06.2020 1.2.7 If tiddler.text starts with \n it is eaten up during saving, escapeLineBreaks() is required, set config.options.chkUsePreForStorage to false
26.06.2020 1.2.6 Added "createpath" as an I/O function
26.05.2020 1.2.5 Fixed "openfile" with default aplication, spaces are handled different on the Linux and Windows command line
17.05.2020 1.2.4 Fixed saving issue when there are spaces %20 in the filename, use process.platform to detect the platform, name changed to nwSaver-Plugin.js
10.05.2020 1.2.3 Added a function to open a file with the default application 
05.05.2020 1.2.2 Fixed the texts used for error warnings
05.04.2020 1.2.1 Modified and created bug removed, mtime and ctime are properly mapped now
28.03.2020 1.2.0 Renamed function names, added functions to copy and delete files
10.03.2020 1.1.8 Added decodeURI, special characters need special encoding
08.03.2020 1.1.7 Added basic I/O functions
16.02.2020 1.1.6 Removed save function encapsulation, the saver can be used by other functions too
03.01.2020 1.1.5 Fixed the first load view/edit mode problem 
10.11.2019 1.1.4 Made some minor changes and added remarks to the source
19.10.2019 1.1.3 Added tags to make distribution with the [[LoadTiddlersPlugin]] easy
15.09.2019 1.1.2 Minified the plugin code includding the TiddlyWikiClassic macro code
16.06.2019 1.1.1 Made backup sequence definable in systemConfig tiddler
13.06.2019 1.1.0 Moved the code in the external nwTWcSaver.js into this plugin
17.04.2019 1.0.6 Added win path coding in nwTWcSaver.js
02.04.2019 1.0.5 Removed hard coded paths for <nowiki>WinXX</nowiki>
10.03.2019 1.0.4 Updated documentation and fixed date format
25.02.2019 1.0.3 Removed moment.js dependency
22.02.2019 1.0.2 Added win32 path fix
21.02.2019 1.0.1 Merged all files to nwTWcSaver.js
<<<
!!!License
<<<
!!License for the TiddlyWikiClassic plugin code
MIT License

Copyright (c) 2025 Okido

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Backup logic based on the code from [[LessBackupsPlugin]] by Simon Baird, http://mptw.tiddlyspot.com/#TheBSDLicense.
<<<
!!!Code
***/
//{{{
/* JavaScript CODE STARTS HERE */
/* Minified with Terser.js - 08-11-2025 */
"use strict";config.options.chkUsePreForStorage=!1,"object"==typeof nw?("object"!=typeof config.macros.nwsaver?config.macros.nwsaver={}:config.macros.nwsaver,config.macros.nwsaver={init:function(){this.os=process.platform},os:"linux",fs:require("fs"),path:require("path"),exec:require("child_process").exec,pathresolve:function(e){return this.path.resolve(nw.__dirname,this.normalizepath(e))},commandline:function(){return{darwin:"open",win32:"start"}[this.os]||"xdg-open"},openfile:function(e){let t=this.pathresolve(e);const s=this.fs.existsSync(t);s?("win32"===this.os?t=t.replace(/(\s+)/g,e=>`"${e}"`).replace(/&/g,"^&"):"linux"===this.os&&(t=`"${t}"`),this.exec(`${this.commandline()} ${t}`)):this.error("openfile",`${t} not found`)},handler:function(e,t,s,i,r,n){createTiddlyButton(e,"Save","Save your TiddlyWikiClassic with the development code",this.onclick,"button saveChangesButton")},onclick:async function(){const e=!1,t=config.macros.nwsaver,s=new Date,i=config.options.nwsaver||[["YYYY"],["MMM"],["ddd"],["latest",0]];try{const r=t.normalizepath(nw.__filename),n=t.normalizepath(getBackupPath(r));e;const o=await t.loadAsync(r),a=locateStoreArea(o),c=updateOriginal(o,a,r);await t.saveAsync(r,c,!1);const h=i.map(([e])=>n.replace(/(\.)([0-9]+\.[0-9]+)(\.html)$/,`$1${s.formatString(e).toLowerCase()}$3`));for(const e of h)await t.saveAsync(e,c,!1);displayMessage(`File and backups saved @ ${s.formatString("0hh:0mm")}`,void 0,{use:!0,color:"green",duration:"3000"})}catch(e){t.error("onclick handler",e),displayMessage(`File and backups saving failed @ ${s.formatString("0hh:0mm")}`,void 0,{use:!0,color:"red",duration:"3000"})}},save:function(e,t,s=!0){const i=this.pathresolve(e),r=this.path.dirname(i);try{this.fs.existsSync(r)||this.fs.mkdirSync(r,{recursive:!0}),this.fs.writeFile(i,t,e=>{e?displayMessage(e,void 0,{use:!0,color:"red",duration:"5000"}):s&&displayMessage(`File ${i} saved`,void 0,{use:!0,color:"green",duration:"5000"})})}catch(e){this.error("save",e)}},saveAsync:async function(e,t,s=!0){const i=this.pathresolve(e),r=this.path.dirname(i);try{return await this.fs.promises.mkdir(r,{recursive:!0}),await this.fs.promises.writeFile(i,t),s&&displayMessage(`File ${i} saved`,void 0,{use:!0,color:"green",duration:"5000"}),!0}catch(e){displayMessage(e.message||e,void 0,{use:!0,color:"red",duration:"5000"}),this.error("saveAsync",e)}},direntriesattrfilter:function(e,t=""){const s=this.direntriesattr(e);return"dir"===t?s.filter(e=>e.isdir):"file"===t?s.filter(e=>e.isfile):s},direntriesattr:function(e,t="posix"){const s=!1,i=e=>this.fs.lstatSync(e),{direntries:r,dirpath:n}=this.direntries(e);try{const e=decodeURI(encodeURI(this.path.posix.normalize(n))),s="posix"===t?this.path.posix.normalize:this.path.win32.normalize;return r.map(r=>{const o=decodeURI(encodeURI(this.path.posix.normalize(n+r))),a="posix"===t?o:s(o),c="posix"===t?e:s(e),h=i(o);return{filename:r,dirpath:c,fullpath:a,accessed:h.atime,modified:h.mtime,created:h.ctime,isfile:h.isFile(),isdir:h.isDirectory(),extension:this.path.parse(r).ext}})}catch(e){this.error("direntriesattr",e)}},direntries:function(e){try{const t=this.path.posix.normalize(e),s=this.pathresolve(e);return{dirpath:decodeURI(encodeURI(t)),direntries:this.fs.readdirSync(s)}}catch(e){this.error("direntries",e)}},rename:function(e,t){const s=this.pathresolve(e),i=this.pathresolve(t);try{return!(!this.fs.existsSync(s)||this.fs.existsSync(i))&&(this.fs.renameSync(s,i),!0)}catch(e){this.error("rename",e)}},delete:function(e){const t=this.pathresolve(e);try{const e=this.fs.existsSync(t)?this.fs.lstatSync(t):null;if(!e)return!1;if(e.isFile())this.fs.unlinkSync(t);else{if(!e.isDirectory())return!1;this.fs.rmdirSync(t,{recursive:!0})}return displayMessage(`Deleted ${t}`,void 0,{use:!0,color:"yellow",duration:"5000"}),!0}catch(e){this.error("delete",e)}},load:function(e){const t=this.pathresolve(e);try{return!!this.fs.existsSync(t)&&this.fs.readFileSync(t,{encoding:"utf8"})}catch(e){this.error("load",e)}},loadAsync:async function(e){const t=this.pathresolve(e);try{await this.fs.promises.access(t);return await this.fs.promises.readFile(t,{encoding:"utf8"})}catch(e){return this.error("loadAsync",e),!1}},copy:function(e,t){const s=this.pathresolve(e),i=this.pathresolve(t);try{return!(!this.fs.existsSync(s)||this.fs.existsSync(i))&&(this.fs.copyFileSync(s,i),!0)}catch(e){this.error("copy",e)}},mkdir:function(e){const t=this.pathresolve(e);try{return!this.fs.existsSync(t)&&(this.fs.mkdirSync(t,{recursive:!0}),!0)}catch(e){this.error("mkdir",e)}},exist:function(e){try{return this.fs.existsSync(this.pathresolve(e))}catch(e){this.error("exist",e)}},error:function(e,t){alert(`An error occurred in function "${e}" of the nwSaver-Plugin.js\nError message:\n${JSON.stringify(t,null,"\t")}`)},normalizepath:function(e){return"linux"===this.os?decodeURI(encodeURI(this.path.posix.normalize(e))):decodeURI(encodeURI(this.path.win32.normalize(e)))}}):(console.log("We are in a browser!!!"),"object"!=typeof config.macros.nwsaver?config.macros.nwsaver={}:config.macros.nwsaver,config.macros.nwsaver={handler:function(e,t,s,i,r,n){createTiddlyButton(e,"Save-DEV","Save your TiddlyWikiClassic with the development code",this.onclick,"button saveChangesButton")},onclick:function(){return saveChanges(),!1}});
/* JavaScript CODE ENDS HERE */
//}}}