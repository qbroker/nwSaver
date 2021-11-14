/***
|Name|nwSaver-Plugin.js |
|Version|2.0.9 |
|Version library| |
|Description|This saver is for usage in nw.js |
|Source|nwSaver-Source |
|Documentation| |
|Author|Okido |
|License|See below under license |
|~CoreVersion| |
|Type| |
|Status|EXPERIMENTAL - SUBJECT TO CHANGE |

!!!Documentation
<<<
This plugin makes saving <nowiki>TWc</nowiki> as a nw.js application possible.
<<<
!!!Usage
<<<
!Besides saving <nowiki>TWc</nowiki> this plugin provides basic I/O functions:
config.macros.nwsaver.direntries(folderPath) >> returns an object with the key/value for folder path and the entries in an array
config.macros.nwsaver.direntriesattr(folderPath) >> returns an object with the file and folder attributes
config.macros.nwsaver.direntriesattrfilter(folderPath, "dir" || "file" || "") >> filter by dir, file or no filter
config.macros.nwsaver.load(fullPath) >> load a file from disk, returns the content
config.macros.nwsaver.save(fullPath, content) >> save a file to disk
config.macros.nwsaver.copy(fullPathSource, fullPathTarget) >> copies a file
config.macros.nwsaver.delete(fullPath) >> delete a file or folder
config.macros.nwsaver.openfile(fullPath) >> open a file with the default application
config.macros.nwsaver.createpath(fullPath) >> create a path
config.macros.nwsaver.exist(fullPath) >> check if the file/folder exist
config.macros.nwsaver.rename(fullPathSource, fullPathTarget) >> rename a file
config.macros.nwsaver.normalizepath(fullPath) >> normalize a path name
<<<
!!!Configuration
<<<
Put following code in [[SideBarOptions]] <nowiki><<nwsaver>></nowiki><<nwsaver>>.
The standard backup pattern is twname-YYYY.html, twname-MMM.html, twname-ddd.html, twname-latest.html.
If you want a different backup pattern create a tiddler with the name [[zzzz-config]], tag it with systemConfig and put the following code in it:
{{{
 // Possible settings for nwSaver backup pattern
 // [ ["YYYY"], ["MMM"], ["ddd"], ["d0DD"], ["m0mm"], ["latest",0], ["h0hh"], ["m0mm"], ["s0ss"] ];
 config.options.nwSaver = [ ["YYYY"], ["MMM"], ["ddd"], ["d0DD"], ["m0mm"], ["latest",0] ]; 
}}}
To assure that the <nowiki>TWc</nowiki> is loaded in edit mode all the time add following code to SystemSettings
{{{
chkHttpReadOnly: false;
}}}
<<<
!!!Revisions
<<<
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
15.09.2019 1.1.2 Minified the plugin code includding the <nowiki>TWc</nowiki> macro code
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
!!License for the Tiddlywiki plugin code
MIT License

Copyright (c) 2021 Okido

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
/* JS CODE STARTS HERE */
/* Minified with Terser.js - 13-11-2021 */
"use strict";config.options.chkUsePreForStorage=!1;const nwSaverType="nwsaver";config.macros.nwsaver={debug:!1,openfile:function(r){const e=require("fs"),n=(require("path"),require("child_process").exec),i=r=>`Error occured in: nwSaver-Plugin.js\nFile ${r} not found!`;function t(){switch(process.platform){case"darwin":return"open";case"win32":case"win64":return"start";default:return"xdg-open"}}"win32"===process.platform?e.existsSync(r)?(r=(r=config.macros.nwsaver.normalizepath(r)).replace(/(\s+)/g,(r=>`"${r}"`)),n(t()+" "+r),console.log("Temp console fullpath",JSON.stringify(r," "))):alert(i(r)):(r=config.macros.nwsaver.normalizepath(r),e.existsSync(r)?n(t()+' "'+r+'"'):alert(i(r)))},handler:function(r,e,n,i,t,a){createTiddlyButton(r,"Save","You are going to save your TWc",this.onclick,"button saveChangesButton")},onclick:function(){const r="object"==typeof nw;r&&require("fs");if(!r)return saveChanges(),!1;{const r=new Date,e=(require("path"),process.platform,config.options.nwSaver||[["YYYY"],["MMM"],["ddd"],["latest",0]]),n=config.macros.nwsaver.normalizepath(nw.__filename);let i=config.macros.nwsaver.normalizepath(getBackupPath(n));const t=config.macros.nwsaver.load(n),a=locateStoreArea(t),o=updateOriginal(t,a,n);config.macros.nwsaver.save(n,o),e.map((e=>i.replace(/(\.)([0-9]+\.[0-9]+)(\.html)$/,"$1"+r.formatString(e[0]).toLowerCase()+"$3"))).forEach((r=>config.macros.nwsaver.save(r,o))),displayMessage(`File and backups saved @ ${r.formatString("0hh:0mm")}`)}},normalizepath:function(r){const e=require("path");return"win32"===process.platform?decodeURI(encodeURI(e.win32.normalize(r))):decodeURI(encodeURI(e.posix.normalize(r)))},direntries:function(r){const e=require("fs");try{return{dirpath:r,direntries:e.readdirSync(config.macros.nwsaver.normalizepath(r))}}catch(r){alert("An error occured in: nwSaver-Plugin.js\ncode part: direntries, error: "+JSON.stringify(r,2,"\t"))}},direntriesattr:function(r){const e=require("fs"),n=r=>e.lstatSync(r),i=config.macros.nwsaver.direntries(r);console.log("dirEntries: ",i);try{return i.direntries.map((r=>{console.log("filename: ",r);let e=config.macros.nwsaver.normalizepath(i.dirpath+r);return{filename:r,dirpath:i.dirpath,fullpath:e,accessed:n(e).atime,modified:n(e).mtime,created:n(e).ctime,isfile:n(e).isFile(),isdir:n(e).isDirectory()}}))}catch(r){alert("Error occured in: nwSaver-Plugin.js\nFolder entries attributes reading error: "+JSON.stringify(r,2,"\t"))}},direntriesattrfilter:function(r,e=""){const n=config.macros.nwsaver.direntriesattr(r);switch(e){case"dir":return n.filter((r=>r.isdir));case"file":return n.filter((r=>r.isfile));default:return n}},exist:function(r){const e=require("fs");try{return!!e.existsSync(config.macros.nwsaver.normalizepath(r))}catch(r){alert("Error occured in: nwSaver-Plugin.js\nFile exist function failed: "+JSON.stringify(r,2,"\t"))}},createpath:function(r){const e=require("fs");r=config.macros.nwsaver.normalizepath(r);try{e.existsSync(r)||e.mkdirSync(r,{recursive:!0})}catch(r){alert("Error occured in: nwSaver-Plugin.js\nThe createpath function failed: "+JSON.stringify(r,2,"\t"))}},rename:function(r,e){const n=require("fs");r=config.macros.nwsaver.normalizepath(r),e=config.macros.nwsaver.normalizepath(e);try{return!!n.existsSync(r)&&(n.renameSync(r,e),!0)}catch(r){alert("Error occured: nwSaver-Plugin.js\nFile renaming error: "+JSON.stringify(r,2,"\t"))}},delete:function(r){const e=require("fs");r=config.macros.nwsaver.normalizepath(r);let n=e.existsSync(r)&&e.lstatSync(r).isDirectory(),i=e.existsSync(r)&&e.lstatSync(r).isFile();try{if(i)return e.unlinkSync(r),!0;if(n)return e.rmdirSync(r,{recursive:!0}),!0}catch(r){alert("Error occured: nwSaver-Plugin.js\nFile/folder deleting error: "+JSON.stringify(r,2,"\t"))}},copy:function(r,e){const n=require("fs");try{return n.copyFileSync(config.macros.nwsaver.normalizepath(r),config.macros.nwsaver.normalizepath(e))}catch(r){alert("Error occured in: nwSaver-Plugin.js\nCopying error: "+JSON.stringify(r,2,"\t"))}},load:function(r){const e=require("fs");r=config.macros.nwsaver.normalizepath(r);try{return e.readFileSync(r,"utf8")}catch(r){alert("Error occured in: nwSaver-Plugin.js\nFolder reading error: "+JSON.stringify(r,2,"\t"))}},save:function(r,e){const n=require("fs"),i=require("path");r=config.macros.nwsaver.normalizepath(r);try{let t=i.dirname(r);return n.existsSync(t)||n.mkdirSync(t,{recursive:!0}),n.writeFileSync(r,e),!0}catch(r){alert("Error occured in: nwSaver-Plugin.js\nSaving error: "+JSON.stringify(r,2,"\t"))}}};
/* JS CODE ENDS HERE */
//}}}