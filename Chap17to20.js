//Q.#.1

var myArray = [[],[],[]];

//Q.#.2
var myMultiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//Q.#.3

var a;
for (a=1; a<=10; a++){
  document.write(a+"<br>");
}
//Q.#.4
var tableNum = prompt("Enter the number for Multipilication Table : ");
var tableLenth = prompt("Enter the number for Lenth of Table : ");
     document.write("<h5>"+"Mulipilication Table of "+tableNum+" Lenth "+tableLenth+"</h5>");
      for (var i =1; i<=tableLenth; i++){
        document.write(tableNum+" x "+i+" = "+ +tableNum*i +"<br>");}
  
//Q.#.5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i =0; i<fruits.length; i++){
  document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

//Q.#.6


document.write("Counting : ");
for (b=1; b<=15; b++){
  
  document.write(b+" ");
}

document.write("<br>"+"Reverse Counting : ");
for (b=10; b>=0; b--){
  
  document.write(b+" ");
}

document.write("<br>"+"Odd Numbers : ");
for (b=1; b<=20; b++){
  if (b%2 != 0){
    document.write(b+" ");
  } 
  
}

document.write("<br>"+"Series : ");
for (b=1; b<=20; b++){
  if (b%2 == 0){
    document.write(b+"K ");
  } 
  
}

//Q.#.7

var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];

var item = prompt("Welcome to ABC Bakery, What do you want Mr./Ma'am");

var firstChar = item.slice(0,1);
var otherChar = item.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var CappedItem = firstChar + otherChar;
var indexA = A.indexOf(CappedItem);
for (var i =0; i<A.length; i++){
  if (CappedItem === A[i]){
    alert(CappedItem+" is available at index "+indexA+" in our bakery");
    break
  
}
else {
  alert("We are soory "+CappedItem+" is not available in our bakery ");
  break
}
}
  
//Q.#.8
var number = [24, 53, 78, 91, 12];
document.write("Array Numbers "+number);
document.write("The Largest number is : "+Math.max.apply(null, number));
 
//Q.#.9
var number = [24, 53, 78, 91, 12];
document.write("Array Numbers "+number);
document.write("The Smallest number is : "+Math.min.apply(null, number));

//Q.#.10

for (var i =1; i <= 100; i++){
  if (i%5 ==0){
    document.write(i+" , ");
  }
}



