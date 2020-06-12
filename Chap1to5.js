// Chapter 1
function checkpassword(feildId){
    if (document.getElementById(feildId).value === ""){
    alert("Err! Please enter a valid Password");
  }
}

alert("Welcome to JS Land... \n Happy coding");
alert("Welome to JS Land...");
alert("Happy coding");
alert("hello.... I can run JS throuh my web browser's console");

// Chapter 2

var username;
var myName = "Abdul Samad Khan"
var message = "Heloo World";
alert(message);


var name = prompt("Enter your name :");
var age = prompt ("Enter your age :");
var qul = prompt ("Enter your qualification :")
alert("Your name is :" +name);
alert ("Your age is :" +age);
alert("Your Qualification is :" +qul);


var p = "PIZZA";
alert(p  +'\n' +p.slice(0,4) + '\n' + p.slice(0,3) + '\n' + p.slice(0,2) + '\n' + p.slice(0,1) );

var email = "asamadnqb@gmail.com";
alert("May Email Address is : " + email);
 
var book = "A smarter way to learn JavaScript";
alert("I am trying learn from the book " + book);

var scriptToDisplay = "Yah! I can write HTML content throuh Java Script";
document.write("<h1>" + scriptToDisplay + "</h1>");

var symbols = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(symbols);

// Chapter 3

var age = 40;
alert("I am "+age+" years old.");


var N = 14;
alert("You have visited my site " + N + " Times");


var birthYear = 1978;
document.write("<p>"+"May Birth year is "+birthYear+"</p>");

var visitorName = "John Doe";
var productTitle = "T-Shirts";
var quantity = 5;
var store = "XYZ Clothing Store"

document.write("<h5>"+visitorName+" ordered "+ quantity +" "+productTitle +"(s) on "+store+"</h5>");


/// Chapter 4

var a, b, c ;
//Leagl variables
var userName, mayVar, eamil$Address, pass_Words, name1;
// Illegal variables
// var user name, &var, 2mail, alert, "NB";


document.write("<h2>"+"Rules for naming JS variables"+"</h2>");
document.write("<p>"+"Variable names can only contain Letters, Numbers, Dolar Sign and Underscore. For Exmaple $my_1stVariable"+"</p>");
document.write("<p>"+"Variables must begin with a letter, underscore or dollarsign . For Exmaple $name, _name or name"+"</p>");
document.write("<p>"+"Variable names are case sensitive"+"</p>");
document.write("<p>"+"Variable names should not be JS Keywords. For Exmaple var, alert"+"</p>");


// Chapter 5

var num1 = 3;
var num2 = 5;
var num3 = num1+num2;
var num4 = num1*num2;
var num5 = num1/num2;
var num6 = num1%num2;
var num7 = num1-num2;
document.write("Sum of "+num1+" and " +num2+ " is " + num3 +"<br>");
document.write("Mulipilication of "+num1+" and " +num2+ " is " + num4+"<br>");
document.write("Division of "+num1+" and " +num2+ " is " + num5+"<br>");
document.write("Modulus of "+num1+" and " +num2+ " is " + num6+"<br>");
document.write("Subtraction of "+num1+" and " +num2+ " is " + num7);



var num;
document.write("Value after variable declaration is: ??"+"<br>");
num = 5;
document.write("Initial value: "+num+"<br>");
num = ++num;
document.write("Value after increment is: "+num+"<br>");
num = num+7;
document.write("Value after addition is: "+num+"<br>");
num = --num;
document.write("Value after decrement is: "+num+"<br>");
num = num%3;
document.write("The remainder is: "+num+"<br>");


var ticket= 600;
var cost = ticket * 5;
document.write("Total cost to buy 5 tickets to a movie is "+cost+" PKR");


var tableNum = prompt("Enter the number for Table : ");
document.write("<h5>"+"Table of "+tableNum+"</h5>");
for (var i =1; i<=10; i++){
  document.write(tableNum+" x "+i+" = "+ +tableNum*i +"<br>");

}



var tem = 100;
var temC = (tem-32)*5/9;
var temF = (tem*5/9)+32;
temF = temF.toFixed(2);
temC = temC.toFixed(2);
document.write("Temperature of "+tem+"&#176;"+"C is =  "+temF+"&#176;"+"F"+"<br>");
document.write("Temperature of "+tem+"&#176;"+"F is =  "+temC+"&#176;"+"C");

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var orderQty1 = 3;
var orderQty2 = 7;
var shippingCharges = 100;
var cost1 = priceOfItem1*orderQty1;
var cost2 = priceOfItem2*orderQty2;
var tCost = cost1+cost2+shippingCharges;

document.write("<h1>"+"Shipping Cart"+"</h1>");
document.write("<p>"+"Price of Item 1 is "+priceOfItem1+"</p>");
document.write("<p>"+"Quantity of Item 1 is "+orderQty1+"</p>");
document.write("<p>"+"Price of Item 2 is "+priceOfItem2+"</p>");
document.write("<p>"+"Quantity of Item 2 is "+orderQty2+"</p>");
document.write("<p>"+"Shipping Charges is "+shippingCharges+"</p>");
document.write("<p>"+"The total cost of your order is  "+tCost+"</p>");


var totalMarks = 980;
var obtainedMarks = 804;
var pernentage = obtainedMarks/totalMarks*100;
pernentage = pernentage.toFixed(0);

document.write("<h1>"+"Marks Sheet"+"</h1>");
document.write("Total Marks : "+totalMarks+"<br>");
document.write("Obtained Marks : "+obtainedMarks+"<br>");
document.write("Percentage : "+pernentage+"%");

var USD = 10;
var KSR = 25;
var PKR = (USD*104.8)+(KSR*28);
document.write("Total Currency in PKR is "+PKR);


var inum = 5;
var tnum = (inum+5)*10/2;
document.write(tnum);

var now = new Date();
var currentYear = now.getFullYear();
var birthYear = 1978;
var age = currentYear-birthYear;

document.write("Your age is : "+age);

var radius = 20;
const pi = 3.142;
var cirum = (2*pi)*radius;
var area = pi*(radius*radius);
cirum = cirum.toFixed(2);
area = area.toFixed(2);
document.write("<h1>"+"The Geometrizer"+"</h1>");
document.write("<p>"+"Radius of a circle: "+radius+"</p>");
document.write("<p>"+"The Circumference of a circle is : "+cirum+"</p>");
document.write("<p>"+"The area is : "+area+"</p>");


var favSnacke = "Lays";
var currentAge = 42;
var maxAge = 100;
var consum = 2;
var tDays = (maxAge-currentAge)*365;
var tConsum = tDays*consum;
document.write("<h1>"+"The Lifetime Supply Calculator:"+"</h1>");
document.write("<p>"+"Favourite Snack : "+favSnacke+"</p>");
document.write("<p>"+"Current Age: "+currentAge+"</p>");
document.write("<p>"+"Estimated maximum age : "+maxAge+"</p>");
document.write("<p>"+"Amount of snack per day : "+consum+"</p>");
document.write("<p>"+"You will need "+tConsum+" "+favSnacke+" to last you until the rip old age of "+maxAge +"years."+"</p>");



