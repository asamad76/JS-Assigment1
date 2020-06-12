// Q#1

var inputToCheck = prompt("Please Enter any aumber or lettr");
var i = inputToCheck.charCodeAt(0)
if (i >=48 && i <=57){
  alert("Given input is a number");
}
else if (i >=65 && i <=90){
  alert("Given input is a Upper case Letter");
}
else if (i >=97 && i <=122){
  alert("Given input is a Lower case Letter");
}

//Q#2.
var num1 = prompt("Please enter 1st number");
var num2 = prompt("Please enter 2nd number");
if (num1 == num2){
  alert("Both numbers are equal");
}
else if (num1 > num2){
  alert(num1);
}
else{
  alert(num2);
}

//Q#3.
var inumber = prompt("Please enter any number");
if (inumber ==0) {
  alert("Its a Zero");
 }
 else if (inumber < 0){
   alert("Its a Negative number");
 }
 else {
   alert("Its a Positive Number");
 }

 //Q#4.
 var password = "welcome123+";
 var userPassword = prompt("Plese Enter your Password");
 if (userPassword == "") {
   alert("Please enter a your passwrod ");
   
 }
 else if (userPassword !== password){
   alert("Please enter a valid password");
 }
 else{
   alert("Correct! The password you entered matches the original password");
 }
//Q#5.

var greting;
var hour = 13;
if (hour <18){
  alert("Good Day");
}
else{
  alert("Good Evening");
}
//Q#6.
var time = prompt("Please enter the time in 24h formate");
if (time >=000 && time <=1200) {
  alert("Good morning!");
  
}
else if (time >=1200 && time <=1700){
  alert("Good afternoon!");
}
else if (time>=1700 && time <=2100){
  alert("Good Evening!");
}
else if (time >=2100 && time <=2359){
  alert("Good night!");
}


