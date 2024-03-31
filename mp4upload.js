function _(e){return document.getElementById(e)}
function niceBytes(i){let B=0,e=parseInt(i,10)||0;for(;e>=1024&&++B;)e/=1024;return e.toFixed(e<10&&B>0?1:0)+" "+["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"][B]}
function uploadFile(){_("result").style.display="block";var e=_("file").files[0],r=new FormData;r.append("file",e);var a=new XMLHttpRequest;a.upload.addEventListener("progress",progressHandler,!1),a.addEventListener("load",completeHandler,!1),a.addEventListener("error",errorHandler,!1),a.addEventListener("abort",abortHandler,!1),a.open("POST","/"),a.send(r)}
function progressHandler(e){_("loaded_n_total").innerHTML="Uploaded "+e.loaded+" bytes of "+e.total;var r=e.loaded/e.total*100,a=Math.round(r)+"%";_("progressBar").innerHTML=a,_("progressBar").style.width=a,_("status").innerHTML=Math.round(r)+"% uploaded... please wait"}
function completeHandler(e){var r=JSON.parse(e.target.responseText);if(r.errmessage){_("process").style.display="none";_("loaded_n_total").style.display="none";_("output").style.display="none";_("status").innerHTML=r.errmessage;}else{_("output").style.display="block";_("loaded_n_total").style.display="block";_("process").style.display="none";_("status").innerHTML="<b>Name:</b> "+r.name+"<br><b>Size:</b> "+niceBytes(r.size)+"<br><b>Checksum:</b> "+r.checksum+"<br><hr>";_("outputLink").value=r.link}}
function errorHandler(e){_("status").innerHTML="Upload Failed"}
function abortHandler(e){_("status").innerHTML="Upload Aborted"}
function copy(id){var c=document.getElementById(id);c.select();document.execCommand('copy');}

