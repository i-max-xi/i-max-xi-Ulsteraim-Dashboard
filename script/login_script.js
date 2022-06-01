// for login

var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;
var unArray = ["Maxwell", "4805189275", "username3", "username4"]; 
var pwArray = ["mypassword", "ULSBK275X", "password3", "password4"];  
for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}
if (valid) {
alert ("Login sucessfull.");
window.location.href = "./sign_in/index.html";
return false;
}
var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

}
// for forgot




