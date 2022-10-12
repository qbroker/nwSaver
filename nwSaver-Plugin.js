/***
|Name|nwSaver-Plugin.js |
|Version|2.2.4 |
|Version library| |
|Description|This saver is for usage with NW.js |
|Source|nwSaver-Source |
|Documentation| |
|Author|Okido |
|License|See below under license |
|~CoreVersion| |
|Type| |
|Status|EXPERIMENTAL - SUBJECT TO CHANGE |

!!!Documentation
<<<
This plugin provides save and I/O functions for <nowiki>TWc</nowiki> when used as a NW.js application.
<<<
!!!Usage
<<<
!Besides saving <nowiki>TWc</nowiki> this plugin provides basic I/O functions:
config.macros.nwsaver.direntries(folderPath) >> returns an object with the key/value for folder path and the entries in an array, in Posix style "/"
config.macros.nwsaver.direntriesattr(folderPath, "posix") >> returns an object with the file and folder attributes, default is Posix style with "/", alternative is Windows with "\\", invoked with "win32"
config.macros.nwsaver.direntriesattrfilter(folderPath, "dir" || "file" || "") >> filter by dir, file or no filter
config.macros.nwsaver.load(fullPath) >> load a file from disk, returns the content
config.macros.nwsaver.save(fullPath, content) >> save a file to disk
config.macros.nwsaver.copy(fullPathSource, fullPathTarget) >> copies a file
config.macros.nwsaver.delete(fullPath) >> delete a file or folder
config.macros.nwsaver.openfile(fullPath) >> open a file with the default application
config.macros.nwsaver.createpath(fullPath) >> create a path
config.macros.nwsaver.exist(fullPath) >> check if the file/folder exist
config.macros.nwsaver.rename(fullPathSource, fullPathTarget) >> rename a file
config.macros.nwsaver.normalizepath(fullPath) >> normalize a path following os rules, Posix "/" and Windows "\\" 
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
!!License for the TiddlyWiki plugin code
MIT License

Copyright (c) 2022 Okido

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
/* Minified with Terser.js - 06-10-2022 */
"use strict";config.options.chkUsePreForStorage=!1;const nwSaverType="nwsaver";config.macros.nwsaver={openfile:function(e){const r=require("fs"),n=require("path"),i=require("child_process").exec;function t(){switch(process.platform){case"darwin":return"open";case"win32":case"win64":return"start";default:return"xdg-open"}}if("win32"===process.platform){const s=r.existsSync(e);e=(e=(e=n.resolve(nw.__dirname,e)).replace(/(\s+)/g,(e=>`"${e}"`))).replace(/&/g,"^&"),s?i(t()+" "+e):this.error("openfile",`${s} not found`)}else{e=n.resolve(nw.__dirname,e);let s=r.existsSync(e);s?i(t()+' "'+e+'"'):this.error("openfile",`${e} not found`)}},handler:function(e,r,n,i,t,s){createTiddlyButton(e,"Save","You are going to save your TWc",this.onclick,"button saveChangesButton")},onclick:function(){if(!("object"==typeof nw))return saveChanges(),!1;{require("fs"),require("path");const e=new Date,r=(process.platform,config.options.nwSaver||[["YYYY"],["MMM"],["ddd"],["latest",0]]),n=config.macros.nwsaver.normalizepath(nw.__filename);let i=config.macros.nwsaver.normalizepath(getBackupPath(n));const t=config.macros.nwsaver.load(n),s=locateStoreArea(t),o=updateOriginal(t,s,n);config.macros.nwsaver.save(n,o);let a=r.map((r=>i.replace(/(\.)([0-9]+\.[0-9]+)(\.html)$/,"$1"+e.formatString(r[0]).toLowerCase()+"$3")));a.forEach((e=>config.macros.nwsaver.save(e,o))),displayMessage(`File and backups saved @ ${e.formatString("0hh:0mm")}`,void 0,{use:!0,color:"green",duration:"3000"})}},save:function(e,r){const n=require("fs"),i=require("path");e=i.resolve(nw.__dirname,e);let t=i.dirname(e);try{n.existsSync(t)||n.mkdirSync(t,{recursive:!0}),n.writeFile(e,r,(e=>{e&&displayMessage(e,void 0,{use:!0,color:"red",duration:"3000"})}))}catch(e){this.error("save",e)}},direntriesattrfilter:function(e,r=""){const n=config.macros.nwsaver.direntriesattr(e);switch(r){case"dir":return n.filter((e=>e.isdir));case"file":return n.filter((e=>e.isfile));default:return n}},direntriesattr:function(e,r="posix"){const n=require("fs"),i=require("path"),t=e=>n.lstatSync(e),s=(i.resolve(nw.__dirname,e),this.direntries(e));try{return s.direntries.map((e=>{let n=decodeURI(encodeURI(i.posix.normalize(s.dirpath+e))),o=decodeURI(encodeURI(i.posix.normalize(n))),a=decodeURI(encodeURI(i.posix.normalize(s.dirpath)));return"win32"===r&&(n=i.win32.normalize(n),o=i.win32.normalize(n),a=i.win32.normalize(s.dirpath)),{filename:e,dirpath:a,fullpath:o,accessed:t(n).atime,modified:t(n).mtime,created:t(n).ctime,isfile:t(n).isFile(),isdir:t(n).isDirectory(),extension:i.parse(e).ext}}))}catch(e){this.error("direntriesattr",e)}},direntries:function(e){const r=require("fs"),n=require("path");try{return{dirpath:decodeURI(encodeURI(n.posix.normalize(e))),direntries:r.readdirSync(n.resolve(nw.__dirname,e))}}catch(e){this.error("direntries",e)}},rename:function(e,r){const n=require("fs"),i=require("path");let t=i.resolve(nw.__dirname,e),s=i.resolve(nw.__dirname,r);try{return!(!n.existsSync(t)||n.existsSync(s))&&(n.renameSync(t,s),!0)}catch(e){this.error("rename",e)}},delete:function(e){const r=require("fs");let n=require("path").resolve(nw.__dirname,e),i=r.existsSync(n)&&r.lstatSync(n).isDirectory(),t=r.existsSync(n)&&r.lstatSync(n).isFile();try{if(t)return r.unlinkSync(n),!0;if(i)return r.rmdirSync(n,{recursive:!0}),!0}catch(e){this.error("delete",e)}},load:function(e){const r=require("fs");let n=require("path").resolve(nw.__dirname,e);try{return r.readFileSync(n,"utf8")}catch(e){this.error("load",e)}},copy:function(e,r){const n=require("fs"),i=require("path");let t=i.resolve(nw.__dirname,e),s=i.resolve(nw.__dirname,r);try{return n.copyFileSync(t,s)}catch(e){this.error("copy",e)}},createpath:function(e){const r=require("fs");let n=require("path").resolve(nw.__dirname,e);try{!1===r.existsSync(n)&&r.mkdirSync(n,{recursive:!0})}catch(e){this.error("createpath",e)}},exist:function(e){const r=require("fs"),n=require("path");try{return!!r.existsSync(n.resolve(nw.__dirname,e))}catch(e){this.error("exist",e)}},error:function(e,r){alert(`An error occured in function ${e} of the nwSaver-Plugin.js\n${JSON.stringify(r,2,"\t")}`)},normalizepath:function(e){const r=require("path");return"win32"===process.platform?decodeURI(encodeURI(r.win32.normalize(e))):decodeURI(encodeURI(r.posix.normalize(e)))}};
/* JS CODE ENDS HERE */
//}}}