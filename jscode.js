function validate() {
var fnam = document.getElementById("fname");
var lnam = document.getElementById("lname");
var mob = document.getElementById("mobno");
var emal = document.getElementById("emal");
var quer = document.getElementById("query");

if(fnam.value.length <4)
{
alert("Enter Valid FirstName: Minimum 4 Characters");
fname.focus();
fname.style.border = "solid 2px red";
return false;
}

if(mob.value.length < 10)
{
alert("Enter Valid 10 Digit Mobile Number");
mob.focus();
mob.style.border = "solid 2px red";
return false;
}

if(emal.value.length < 10)
{
alert("Enter Valid Email ID");
emal.focus();
emal.style.border = "solid 2px red";
return false;
}

if(quer.value.length < 10)
{
alert("Please enter your query!!");
quer.focus();
quer.style.border = "solid 2px red ";
return false;
}

}