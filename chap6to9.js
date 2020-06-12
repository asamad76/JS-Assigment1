//Q#1
var a = 10;
document.write("The value of a is: "+ a+"<br>");


a = ++a;
document.write("The value of ++a is : "+a+"<br>");
document.write("Now the value of a is: "+ a+"<br>");
a = a++;

document.write("The value of a++ is : "+a+"<br>");
a = ++a;
document.write("Now the value of a is: "+ a+"<br>");

a = --a;
document.write("The value of --a is : "+a+"<br>");
document.write("Now the value of a is: "+ a+"<br>");
a = a--;
document.write("The value of a-- is : "+a+"<br>");
a= --a;
document.write("Now the value of a is: "+ a+"<br>");

//Q#2

var a = 2, b = 1;
document.write("a is : "+a+"<br>");
document.write("b is : "+b+"<br>");
var result = --a - --b + ++b + b--;
//               1  -  0  +   1 + 1 = 3

document.write("The result is : "+result+"<br>");
// --a = 1
// --a - --b = 1 -0 = 1
// --a - --b + ++b = 1 -0 +(0+1=1) = 2
// --a - --b + ++b + b--= 1 -0 +(0+1)1+1 = 3

//Q# 3.
var userName = prompt("Please Enter your name : ");
alert("Welcome to my Page Mr."+userName);

//Q#4

  var tableNum = prompt("Enter the number for Table : ");

  if (tableNum <=0){
    document.write("<h5>"+"Table of "+5+"</h5>");
      for (var i =1; i<=10; i++){
        document.write(5+" x "+i+" = "+ +5*i +"<br>");}
  }
  else{ 
    document.write("<h5>"+"Table of "+tableNum+"</h5>");
      for (var i =1; i<=10; i++){
        document.write(tableNum+" x "+i+" = "+ +tableNum*i +"<br>");}
  }


  //Q# 5.
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

  document.write("<table>"+"<tr>"+"<th>Subject</th>"+"<th>Total Marks</th>"+"<th>Obtaind Marks</th>"+"<th>Percentage</th>"+"</tr>");
  document.write("<tr>"+"<td>"+subj1+"</td>"+"<td>"+marks+"</td>"+"<td>"+obtaindMarks1+"</td>"+"<td>"+subj1perc+"%"+"</td>"+"</tr>");
  document.write("<tr>"+"<td>"+subj2+"</td>"+"<td>"+marks+"</td>"+"<td>"+obtaindMarks2+"</td>"+"<td>"+subj2perc+"%"+"</td>"+"</tr>");
  document.write("<tr>"+"<td>"+subj3+"</td>"+"<td>"+marks+"</td>"+"<td>"+obtaindMarks3+"</td>"+"<td>"+subj3perc+"%"+"</td>"+"</tr>");
  document.write("<tr>"+"<th>"+" "+"</th>"+"<th>"+totalMarks+"</th>"+"<th>"+totalObtaindMarks+"</th>"+"<th>"+totalPercentage+"%"+"</th>"+"</tr>"+"</table>");

  


  

