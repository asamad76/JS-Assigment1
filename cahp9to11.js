//Q#1

var city = prompt("Please Enter your City ");
if (city === "Karachi"){
  alert("Welcome to city of lights");
}
else if(city === "Lahore"){
  alert("Welcome to city of Parks");
}
else if(city === "Islambad"){
  alert("Welcome to The Capital of Pakistan");
}

//Q#2
var gender = prompt("Please Enter your Gender :");
if (gender === "Male"){
  alert("Good Morning Sir.");
}
else {
  alert("Good Morning Ma'am.");
}

//Q#3
var signal = prompt("Please Enter the color of traffic signal light:");
if (signal === "Red"){
  alert("Must Stop");
}
else if (signal === "Yellow"){
  alert("Ready to move");
}
else if(signal === "Green"){
  alert("Move now");
}


//Q#4.
var remainingFuel = prompt("How much fuel remained ");
if (remainingFuel <=0.25){
  alert("Please Refule your cars");
}
else {
  alert("Have a nice jurney");
}

//Q#5.


var a = 4;
if (++a === 5){
  alert("Given condition for variable is true");
}
var b = 82;
if (++b === 83){
  alert("Given condition for variable is true");
}

var c = 12;
if (++c === 13){
  alert("Condition 1 is true");
}
else if(c===13){
  alert("Condition 2 is true");
}
else if(++c === 14){
  alert("Condition 3 is true");
}
else if(c===14){
  alert("Condition 2 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = +materialCost+laborCost;
if (totalCost=== laborCost+materialCost){
  alert("The Cost is equals");
}


if(true){
  alert("True");
}

if(false){
  alert("Flase");
}


if ("car"<"cate"){
  alert("Car is samller than cate");
}


//#6.
  var subj1 = prompt("Please Enter your first Subject : " );
  var obtaindMarks1 = prompt("Please Enter Obainted Marks from your first subject: ");
  var subj2 = prompt("Please Enter your Second Subject : " );
  var obtaindMarks2 = prompt("Please Enter Obainted Marks from your second subject: ");
  var subj3 = prompt("Please Enter your Third Subject : " );
  var obtaindMarks3 = prompt("Please Enter Obainted Marks from your Third subject: ");
  var marks = 100;
  var totalMarks = 300;
  var totalObtaindMarks = +obtaindMarks1 + +obtaindMarks2 + +obtaindMarks3;
  var subj1perc = +obtaindMarks1/marks*100;
  var subj2perc = +obtaindMarks2/marks*100;
  var subj3perc = +obtaindMarks3/marks*100;
  var totalPercentage = totalObtaindMarks/totalMarks*100
  subj1perc = subj1perc.toFixed(0)
  subj2perc = subj2perc.toFixed(0)
  subj3perc = subj3perc.toFixed(0)
  totalPercentage = totalPercentage.toFixed(0)
  var grade;
  var remakrs;

  if(totalPercentage>=80){
    grade = "A-one";
    remakrs = "Excellent";
  }
  else if (totalPercentage>=70){
    grade = "A";
    remakrs = "Good";
  }
  else if(totalPercentage>=60){
    grade = "B";
    remakrs = "You need to Impove";
  }
  else {
    grade = "Fail";
    remakrs = "Soory";
  }
document.write("<h2>"+"Marks Sheet"+"</h2>");
document.write("<h5>"+"Total Marks : "+totalMarks+"</h5>");
document.write("<h5>"+"Marks Obtained : "+totalObtaindMarks+"</h5>");
document.write("<h5>"+"Percentage : "+totalPercentage+"%"+"</h5>");
document.write("<h5>"+"Grade: "+grade+"</h5>");
document.write("<h5>"+"Remarks : "+remakrs+"</h5>");

//Q#7.
var secnum = 5;
var gusnum = prompt("Guess the a secret number (from 1 to 10)");
if (gusnum == secnum){
  alert("Bingo! Correct Answer");
}
else if (gusnum<secnum){
  alert("Try higher");
}
else if (gusnum>secnum){
  alert("Try shorter");
}

//Q#8.

var dnum = prompt("Please enter a number");
if (dnum%3 ==0){
  alert("Your given number is divisible by 3")
}
else {
  alert("Your given number is not divisible by 3")
}

//Q#9.
var gnum = prompt("Please enter a number");
if (gnum%2 ==0){
  alert("Your given number is Even Number")
}
else {
  alert("Your given number is Odd Number")
}

//Q#10.
var temprature = prompt("Please Enter your room tempratue");
if (temprature > 40){
  alert("It is too hot outside");
}
else if (temprature > 30){
  alert("The today's wheather is noraml");
}
else if (temprature > 20){
  alert("Today's wheather is cool ");
}
else {
  alert("OMG! Today's wheather is too cool");
}

//Q#11.

var firstNmber = prompt("Enter First number");
var operator = prompt("Enter the Operator");
var secondNumber = prompt("Enter the second number");
var result;
if (operator == "+"){
  result = parseInt(firstNmber) + parseInt(secondNumber);
  alert("The Result is : "+result);
}
else if (operator == "-"){
  result = +firstNmber-secondNumber;
  alert("The Result is : "+result);
}
else if (operator == "*"){
  result = +firstNmber*secondNumber;
  alert("The Result is : "+result);
}
else if (operator == "/"){
  result = +firstNmber/secondNumber;
  alert("The Result is : "+result);
}
else if (operator == "%"){
  result = +firstNmber/secondNumber*100;
  result = result.toFixed(0);
  alert("The Result is : "+result+"%");
}
