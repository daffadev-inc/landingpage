var main=document.createElement("script");main.src='static/js/main.js';main.type='text/javascript';document.getElementsByTagName("body")[0].appendChild(main);window.onload=function(){if(typeof jQuery=='undefined'){var jquery_library=document.createElement("script");jquery_library.src='static/js/jquery.js';jquery_library.type='text/javascript';jquery_library.onload=function(){jquery_onload();};document.getElementsByTagName("head")[0].appendChild(jquery_library);}else{jquery_onload();}}