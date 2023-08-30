//  chapter 21

// // que 1
//  var userInputInp =prompt("enter string");
// var allLowerInp = userInputInp.toLowerCase();
// console.log(allLowerInp);

// que 2


//  var xInp = prompt("enter string");
//  var xInp = xInp.toLowerCase();
//  console.log(xInp);

// // que 3

// var yInp = prompt("enter string");
// var yInp = yInp.toLowerCase();
// console.log(yInp);

// que 4 


//  var userInputInp =prompt("enter string");
// var allLowerInp = userInputInp.toLowerCase();
// console.log(allLowerInp);

// que 5

// var userInputInp =["AREEB"];
// var indexToConvert = 0;
// var convertedInp = userInputInp[indexToConvert].toLowerCase();
// console.log(convertedInp);

// que 6

//  var abcInp = prompt("enter name");
//  var convertedInp = abcInp.toUpperCase();
//  alert(convertedInp);


// que 7
 
//  var cityName = "KaRaHi";
//  var converted = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
//  console.log(converted);


// chapter  22-25


// que 1 

//  var sameWords = "captain";
//  var newName = sameWords.slice(1,3);
//  console.log(newName);

// que 2


//  var sameWords = "captain";
//   var newName = sameWords.length;
//   console.log(newName);

// que 3 


//  var animal = "elephant";
//  var seg = animal.slice(2,6);
//  console.log(seg);


// que 4


//  var animal = "elephant";
//  var seg = animal.length;
//  console.log(seg);


// que 5

// var newName = "elephant";
// var numberOfElements = newName.length;
// var assign = newName[0] + newName.slice(-3);
// console.log(assign);

// que 6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);

// answer = 3


// que 7


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// answer = 16

// que 8
 

// var text = "find the word go in the store";
// var  indx = text.lastIndexOf("go");
// console.log(indx);


// que 9
//  var string = "find the word segment in the sentence";
//  var indexNum = 14;
//  if(indexNum >=0 && indexNum < string.length){
//     console.log("segment exist");
// } else{
//     console.log("segment not exist ");
// }

// que 10 

// var string = "abcde";
// var newString = string.charAt(2);
// console.log(newString);
// // the answer is c

// que 11

// var text = "abcdefghijklmnopq";
// var cha =text.charAt(9);
//  console.log( "the 10th character is " +cha);
// //   the answer is J 

// /que 12

// var str = "my favourite color is black";
// var x= str.charAt(str.length -1);
// console.log(x);

// the answer is k


// que 13

// var str = "my favourite color is black";
// var x= str.charAt(4);
// console.log("the 5th character is "+x);

// the answer is a

// qu 14 

// var text = "these color are real";
// var x = "e";
// if( text.length >=3 && text.charAt(2) === x  ){
//     console.log("the 3rd character is " +x);
// }
// else{
//     console.log("not");
// }

// que 15 

//  var variable = "abcdefghijk";
//   var arr =[];
//   for( var i=0; i<variable.length; i++ ){
//     arr[i] =variable.charAt(i);
//   }

//   console.log(arr);


// var reply = "no, I said no, not yes!";
// var revisedReply = reply.replace("no", "yes");
// console.log(revisedReply);


// // que 16

// var str = "1";
// var revised = str.replace("1","one");
// console.log(revised);

// // que 17 
// var x = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
// var y = x.replace(/a/g,"z");
// console.log(y);



//  chapter 26 


// que 1 

// var num = 5.2;
// var convertedNum = Math.ceil(num);
// console.log(convertedNum);
// // the answer is 6

// // que 2,3
// var origNum = 5.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// que 4



// que 5

// var num = 0.5;
// var numNum = Math.floor(num);
// console.log(numNum);

// chapter 27 

// que 1 
//  var randomNumber = Math.floor(Math.random()*50)+1;
//  console.log(randomNumber);


// que 2

// var num = Math.random();
// var areeb = num;
// console.log(areeb);

// que 3


// var num = Math.floor(Math.random()*6)+1;
// var newNum= num;
// if( newNum === 1){
//     console.log("the number is "+ newNum);
// }
// else if (newNum === 2){
//     console.log("the number is "+ newNum);
// }
// else if (newNum === 3){
//     console.log("the number is "+ newNum);
// }
// else if (newNum === 4){
//     console.log("the number is "+ newNum);
// }
// else if (newNum === 5){
//     console.log("the number is "+ newNum);
// }
// else if (newNum === 6){
//     console.log("the number is "+ newNum);
// }
// else{
//     console.log("error");
// }

// we can also do it with the help of function 

// function rollDice(numSide){
//     return Math.floor(Math.random()*numSide)+1;
//     }
//     var numSide = 6;
//     var diceRoll = rollDice(numSide);
//     console.log("you rolled:",diceRoll );
 

// que 4

//   function coinToss(){
//     var randomNum = Math.random();

//     return randomNum <0.5 ? 'Heads' : 'tails';
//   }
//   var result = coinToss();
//   console.log("you've got:", result);

//  chapter 28,29


// //  que 1 
//  var areeb = prompt("enter any number");
//  var newNum = Number(areeb);
//  console.log(newNum);

// // que 2
// function convert(string){
//     return parseInt(string);
//   }
//   var string = "123";
//   var newValue = convert(string);
//   console.log(newValue);

// que 3

//  var num = "3.12345";
//  var newNum = parseFloat(num);
//  console.log(newNum);

// que 4

//  var string = "123";
//   var newName = parseInt(string) || parseFloat(string);
//   console.log(newName);

// que 5

// var num = 30;
//  var string = num.toString();
//  console.log(typeof string);

// que 6

//  function convert(num){
//     return num.toString();
//  }
//  var num =42;
//  var newNum = convert(num);
//  console.log(newNum);


// que 7

//  var num = "3.14";
//  var newNum = parseInt(num);
//  console.log(newNum);

// chapter 30 

// que1 

// var num = 3.12568906;
// var newNum = num.toFixed(4).toString();
// console.log(newNum);

// que 2

// var num = 3.145678;
// num = parseFloat(num.toFixed(2));
// console.log(num);

// que 3
//  var num = 3.2456732940;
//  var newNum = num.toFixed(2).toString();
// if( newNum.length>5){
//     console.log("the number has more than 4 character " + newNum);
// }
// else{
//     console.log("the number has not mor than 4 character "+ newNum);
// }

// que 4

// var num = 3.124589;
// var newNum = num.toFixed(2).toString();
// alert("the number is round of to two numbers "+newNum);

// chap 38

// que 1

// function calculate(a,b){
//     var result = a + b;
//     console.log(result);
// }
// calculate(4,7);

// // que 2
//  var a= 10;
//   function global(){
//     console.log("the global variable is ",a);
//   }
//   global();

//  chap 39,40

// // que 1 
// var day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("It's the start of the workweek.");
//     break;
//   case "Tuesday":
//     console.log("Another day at work.");
//     break;
//   case "Wednesday":
//     console.log("Halfway through the week!");
//     break;
//   case "Thursday":
//     console.log("Almost there, one more day!");
//     break;
//   case "Friday":
//     console.log("TGIF! It's the end of the workweek.");
//     break;
//   default:
//     console.log("It's a weekend day or an unknown day.");
//     break;
// }

// que 2

// var cityName = prompt("Enter a city name:"); 

// switch (cityName.toLowerCase()) {
//   case "new york":
//     alert("You entered New York!");
//     break;
//   case "los angeles":
//     alert("You entered Los Angeles!");
//     break;
//   case "chicago":
//     alert("You entered Chicago!");
//     break;
//   default:
//     alert("City not recognized or not in the list.");
//     break;
// }

//  chapter 35-37

// que 1


// function abc(a,b){
//     return a+b;
// }
// var result = abc(2,3);
// alert(result);

// que 2

// function askName(){
//     var userName =prompt("enter name:");
//     return userName;
// }
// var userName=askName();
// console.log("enter username: "+userName);


// que 3

// function hello(name){
//     console.log("Hello,"+ name + "!");
// }
// function askName(){
//     var userName = prompt("enter username..");
//     return userName;
// }
// function result(){
//      var name = askName();
//      hello(name); 
// }
// result();

// que 4

// function callName(name){
//     alert("The entered name is " + name);
// }
// function userName(){
//     var enterName =prompt("enter your name");
//     return enterName;
// }
// function result(){
//     var name = userName();
//      callName(name);
// }
// result();

// que 5

// function concat(a,b,c){
//     return a+b+c;
// }
//  var a = "areeb is good at javascript ";
//  var b = "HAHHAHAHAH ,";
//  var c =  42;
//   var result= concat(a,b,c);
//   console.log(result);

// que 6

// function concat(a,b){
//     var result = a + b;
//     return result;
// }
// var a ="hello";
// var b = " world";
// var ans= concat(a,b);
// console.log(ans);

// que 7

// function multiplication(result){
//     alert("the result of multiplication is: "+ result);
// }
// function variable(a,b,c){
//     return a*b*c;}
//     var a = +prompt("enter any number");
//     var b = +prompt("enter any number"); 
//     var c = +prompt("enter any number"); 
// function reserved(){
//     var result=variable(a,b,c);
//      multiplication(result);
// }
// reserved();

// que 9

// function sum(result){
//     console.log("the sum of two parameters are "+ result);
// }
// function variable(a,b){
//     return a+b;}
//     var a = +prompt("enter any number");
//     var b = +prompt("enter any number");
//     function answer(){
//         var result=variable(a,b);
//         sum(result);
//     }
//     answer();

// que 8

// function calculateAvg(array){
//     if(array.length ===0){
//         return 0;
//     }
//     var sum = 0;
//     for( var i=0; i<array.length;i++){
//         sum +=array[i];
//     }
//     return sum / array.length;
// }
// var array =[1,2,3,4,5,6,7,8,9];
// var result = calculateAvg(array);
// console.log("Average:", result);


// que 11

// function sum(a,b){
//     return a+b;
// }
// var a=+prompt("enter any number");
// var b=+prompt("enter number two");
// var result= sum(a,b);
// console.log(result);

// que 12

// function countLetter(word){
//     var letterCount ={};
//     for(var i =0; i<word.length; i++){
//         var result= word[i];
//         if(letterCount[result]){
//             letterCount[result]++;
//         }
//         else{
//             letterCount[result]=1;
//         }

//     }
//     return letterCount;
// }
// var word =prompt("enter letter");
// var real= countLetter(word);
// console.log(real);

// que 13

// function setYearInDate(date, year) {
//     date.setFullYear(year);
//     return date;
//   }
  
//   var date = new Date();
//   var year = 2023;
//   var dateWithYear = setYearInDate(date, year);
//   console.log(dateWithYear);
  
// que 14

// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
  
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var dateOfBirth = "2001-04-19"; 
//   var age = calculateAge(dateOfBirth);
//   console.log("Age:", age);
  

// que 15

// function checkWord(array,word){
//     for(var i=0;i <array.length; i++){
//         if(array[i] === word){
//             return true;
//         }
//     }
//     return false;
// }
// var array=['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
// var word = 'haris';
// var result = checkWord(array,word);
// console.log(result);

// que 16

// function repeat(letter){
//     return letter.repeat(10);
// }
// var input = "a";
// var result= repeat(input);
// console.log(result);

// que 17


// function reverse (letter){
//     return letter.reverse();
// }
// var letter= ['a','b','c','d','e'];
// var result= reverse(letter);
// console.log(result);
