console.log("javascript test")

$(document).ready(function() {  
$('a[href=#blurb]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#blurb"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 500);  
return false;  
});  
});


$(document).ready(function() {  
$('a[href=#web]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#web"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 500);  
return false;  
});  
});

$(document).ready(function() {  
$('a[href=#music]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#music"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 500);  
return false;  
});  
});

$(document).ready(function() {  
$('a[href=#connect]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#connect"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 500);  
return false;  
});  
});

$(document).ready(function() {  
$('a[href=#home]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#home"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 500);  
return false;  
});  
});

