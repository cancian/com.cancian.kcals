if(!navigator.userAgent.match(/IEMobile/i)) { newDate = '?' + new Date().getTime(); }
//CSS
document.write("<link rel='stylesheet' type='text/css' href='" + hostLocal + "css/index.css" + newDate + "' />");
document.write("<link rel='stylesheet' type='text/css' href='css/mobiscroll.2.9.0.css' />");
//RE-CHECK
setTimeout(function(){
	if(typeof updateTimer != 'function' && document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1) {
		window.localStorage.removeItem("config_debug");
		window.location.reload();
	}
},7500);
//CDV
if(document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1 && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
	document.write("<script type='text/javascript' src='js/cordova.js'><\/script>");
	document.write("<script type='text/javascript' src='js/cdv-plugin-fb-connect.js'><\/script>");
	document.write("<script type='text/javascript' src='js/facebook-js-sdk.js'><\/script>");
} else {
	document.write("<script type='text/javascript' src='js/facebook-js-sdk.min.js'><\/script>");
}
//JS
document.write("<script type='text/javascript' src='js/jquery-2.0.3.min.js'><\/script>");
document.write("<script type='text/javascript' src='js/jquery-ui-1.10.3.min.js'><\/script>");
document.write("<script type='text/javascript' src='js/mobiscroll.2.9.0.js'><\/script>");
document.write("<script type='text/javascript' src='js/jquery.nicescroll.min.js'><\/script>");
document.write("<script type='text/javascript' src='js/jquery.color-2.1.0.min.js'><\/script>");
document.write("<script type='text/javascript' src='js/jquery.mobileCheckbox.js'><\/script>");
document.write("<script type='text/javascript' src='js/jquery.touchSwipe.js'><\/script>");
//nprogress
document.write("<script type='text/javascript' src='js/nprogress.js'><\/script>");
document.write("<script type='text/javascript' src='js/spin.min.js'><\/script>");
if(!navigator.userAgent.match(/(MSIE)/)) {
	document.write("<script type='text/javascript' src='js/quo.js'><\/script>");
}
document.write("<script type='text/javascript' src='js/html5sql.js'><\/script>");
document.write("<script type='text/javascript' src='js/UserVoice.js'><\/script>");
document.write("<script type='text/javascript' src='js/calculator.js'><\/script>");
//APP
document.write("<script type='text/javascript' src='" + hostLocal + "js/localstoragedb.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/carpe_slider.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_lang.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_setup.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_build.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_static.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_dynamic.js" + newDate + "'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_custom_core.js" + newDate + "'><\/script>");
//FONT
//document.write("<style type='text/css'>@font-face { font-family: 'FontAwesome'; src: url('css/font/fontawesome-webfont.eot'); src: url('css/font/fontawesome-webfont.eot') format('embedded-opentype'), url('css/font/fontawesome-webfont.woff') format('woff'), url('css/font/fontawesome-webfont.ttf') format('truetype'), url('css/font/fontawesome-webfont.svg') format('svg'); font-weight: normal; font-style: normal; } </style>");
document.write("<style type='text/css'>@font-face { font-family: 'FontAwesome'; src: url('css/font/fontawesome-webfont.ttf') format('truetype'); font-weight: normal; font-style: normal; -webkit-backface-visibility: hidden; } </style>");

