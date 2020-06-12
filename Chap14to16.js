//Q#.1

var studentName = [];
//Q#.2
var studentsName = new Array();
//Q#.3
var names = ["Ahmed", "Ali", "Muhammmad"];
//Q#.4  
var numbers = [1,2,3,4];
//Q#.5
var booleanArray = ["true", "false"];
//Q#.6
var mixedArray = ["Ahmed", 1 ,2,"true"];

//Q#.7

var digree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>"+"Qualifications:"+"</h2>"+"<br>");
for (var i = 0; i < digree.length; i++){
  document.write(i+1+")"+digree[i]+"<br>");
}


//Q#.8

studentsName = ["Ahmed", "Ali", "Umar"];
var score = [320 , 230, 480];
var marks = 500;

for (var i = 0; i < studentsName.length; i++){
  
  for (var x = 0; x < score.length; x++){
    var percentage = score[x]/marks*100;
    document.write("Score of "+studentsName[i]+" is "+score[x]+" Percentage: "+percentage+"%"+"<br>");
    
  }
}


//Q#9.
var colorNames = ["Red", "Blue", "Green"];
document.write(colorNames+"<br>");

var addColorB = prompt("What color do you want to add in Bigning of array");
colorNames.unshift(addColorB);
document.write(colorNames+"<br>");

var addColorE = prompt("What color do you want to add in End of array");
colorNames.push(addColorE);
document.write(colorNames+"<br>");

colorNames.unshift("White", "Black");
document.write(colorNames+"<br>");

colorNames.shift();
document.write(colorNames+"<br>");

colorNames.pop();
document.write(colorNames+"<br>");

var indexF = prompt("Which position/idex do you want to add color");
var addColorF = prompt("What color do you want to add in desired position");
colorNames.splice(indexF,0,addColorF);
document.write(colorNames+"<br>");

var indexP = prompt("Which position/idex do you want to delet the color");
var indexD = prompt("How many colors do you want to delet");
colorNames.splice(indexP,indexD);
document.write(colorNames+"<br>");

//Q#10.

var studentScore = [320,230,480,120];
studentScore.sort();
document.write(studentScore);

//Q#11.

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(3);
document.write(cities+"<br>");
document.write(selectedCities);

//Q#12.

var arr = ["This", "is" , "my", "cat"];
var singleString = arr.join(" ");
document.write("Array : "+arr);
document.write("String : "+singleString);


//Q#13.
var devices = ["Keyboard","Mouse","Printer","Monitor"];
for(var i =0; i < devices.length; i++){
  document.write("Out :"+devices[i]+"<br>");
}

//Q#14.
var devices = ["Keyboard","Mouse","Printer","Monitor"];
for(var j =devices.length-1; j >= 0; j--){
  document.write("Out :"+devices[j]+"<br>");
}


//Q#15.

var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
for (var i =0; i < company.length; i++){
  if(i==0){
    document.write("<select>"+"<Option>"+company[i]+"</Option>");
    }
    else if(i >0 && i<5){
      document.write("<Option>"+company[i]+"</Option>");
    }
    else{
      document.write("<Option>"+company[i]+"</Option>"+"</select>");
    }
  }
  
//OR

var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>"+"<Option>"+company[0]+"</Option>");
document.write("<Option>"+company[1]+"</Option>");
document.write("<Option>"+company[2]+"</Option>");
document.write("<Option>"+company[3]+"</Option>");
document.write("<Option>"+company[4]+"</Option>");
document.write("<Option>"+company[5]+"</Option>"+"</select>");