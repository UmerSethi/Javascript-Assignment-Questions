 
// =====================================
    //    CHAPTER : 01 ===> ALERTS
// =====================================



// Question : 01 => Write a script to greet your website visitor using JS alert box.

// alert("Good Morning")




// Question : 02 =>  Write a script to display following message on your web page.

// alert("Error! Please enter a valid Password.")




// Question : 03 => Write a script to display following message on your web page: (Hint : Use line break)

//  alert("Welcome to JS Land...\nHappy Coding!");        ==========>>> "\n" Y mistake ki thi m ny!!!




// Question : 04 => Write a script to display following messages in sequence:

// alert("Welcome to JS Land..")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");




// Question : 05 => Generate the following message through browser’s developer console:

// alert("Hello...I can run JS through my web browser's console")




// Question : 06 => Make use of alerts in your new/existing HTML & CSS project

//  ====>>> DONE!



// Question : 07 => Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// ALERTS | JAVASCRIPT
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// a) Head ... DONE
// b) Body (Before your page's HTML) ... DONE
// c) Body (Inside your page's HTML) ... DONE
// d) Body (After your page's HTML) ... DONE
// All Worked






// ======================================================================================




// ==============================================================
    //    CHAPTER : 02 ===> VARIABLES FOR STRINGS
// ==============================================================



// Question : 01 => Declare a variable called username.

// var username;






// Question : 02 => Declare a variable called myName & assign to it a string that represents your Full Name

// var myName = "Muhammad Umer Saleem" ;






// Question : 03 => Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.


// var titleMessage = "Hello World";
// alert(titleMessage);






// Question : 04 => Declare a variable called myName & assign to it a string that represents your Full Name

// var stdName = "Muhammd Umer";
// var stdAge = "20";
// var stdCourse = "Certified Mobile Application Development";

// alert(stdName);
// alert(stdAge);
// alert(stdCourse);





// Question : 05 => Write a script to display the following alert using one JS variable:

// alert("PIZZA \nPIZZ\nPIZ\nPI\nP");



// Question : 06 =>Declare a variable called email and assign to it a string thatrepresents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: usestring concatenation)

// var email = "m.umersethi91@gmail.com";
// alert("My Email Address is" +" "+email);





// Question : 07 =>Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);





// Question : 08 => Write a script to display this in browser through JS

// document.write("Yah! I can write HTML content through JavaScript ");




// Question : 09 => Store following string in a variable and show in alert and browser through JS

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");





// ======================================================================================




// ==============================================================
    //    CHAPTER : 03 ===> VARIABLES FOR NUMBERS 
// ==============================================================





// Question : 01 => Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = "20";
// alert("I am " + age + " years old");



// Question : 02 => Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// var visits = "14";
// alert("You have visited this site " + visits + " times");





// Question : 03 => Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:”.

// var birthYear = 2001;
// document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number");





// Question : 04 => A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.



// var visiterName = "Muhammad Umer";
// var productTitle = "Watch";
// var Quantity = "5"

// document.write(visiterName + " ordered " + Quantity +" " + productTitle + " on XYZ Clothing store" )



// ======================================================================================




// ==============================================================
    //    CHAPTER : 04 ===> VARIABLE NAMES: LEGAL & ILLEGAL
// ==============================================================




// Question : 01 => Declare 3 variables in one statement

// var firstName = "Muhammad Umer" , lastName = "Saleem" , Course = "Web & Mobile App Development"




// Question : 02 => Declare 5 legal & 5 illegal variable names

// Legal Variables      // var myName;
                        // var $name;
                        // var _name;
                        // var name1;
                        // var MYNAME;

// Illegal Variables    // var 1name;
                        // var &Name;
                        // var my name;
                        // var #name;
                        // var user age;


// Question : 03 => 
// document.write("<h1>Rules for naming JS variables</h1> <br> <br> <br>");
// document.write("<p>Variables names can only contain letters, numbers, $ and _. For example $my_1stVariable</p>");
// document.write("<p>Variable must begin with a $, _ or letter. For example $name, _name or name</p>");
// document.write("<p>Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");





// ======================================================================================




// ==============================================================
    //    CHAPTER : 05 ===> MATH EXPRESSIONS
// ==============================================================


// Question : 01 => Write a program that take two numbers & add them in a new variable. Show the result in your browser.





















// ======================================================================================




// ==============================================================
    //    CHAPTER :35-38 ===>  FUNCTION
// ==============================================================



// Question : 01 => Write a function that displays current date & time in your browser.

// function currentTime(){
//         document.write(new Date())
// }

// currentTime();






// Question : 02 => Write a function that takes first & last name and then it greets the user using his full name.

// function name(){
//     var firstName = "Muhammad Umer"
//     var lastName = "Saleem"
//     var fullName = firstName +" "+ lastName
//  document.write(fullName)
// }

// name()





// Question : 03 => Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){
//     var num1 = +prompt("Enter Num1")
//     var num2 = +prompt("Enter Num2")
//     var sum = num1 + num2
//   return(sum)

// }

// document.write(sum())


// OR


// var a = +prompt("Enter First Number :")
// var b = +prompt("Enter Second Number :")

// function sum(){
//     var c = a+b;
//     document.write(c)
// }
 
// sum()

// OR


// var num1 = +prompt("Enter First Number :")
// var num2 = +prompt("Enter Second Number :")
// function sum(){
//     var a = num1 + num2
//     return a
// }
// document.writ(sum());


// OR


// function sum(a,b){
//     var add = a+b;
//     return add
// }
// document.write(sum(num1,num2))






// Question : 04 => Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.


// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");
// var opt = prompt("Enter Operator : ");

// function calc(num1,opt,num2){
//     if(opt.trim() === "+"){
//         return("Addition of " + num1 + " and " + num2 + " = " + (num1 + num2))
//     }
//     if(opt.trim() === "-"){
//         return("Substraction of " + num1 + "and " + num2 + "= " + (num1 - num2))
//     } if(opt.trim() === "*"){
//         return("Multiplication of " + num1 + "and " + num2 + "= " + (num1 * num2))
//     } if(opt.trim() === "/"){
//         return("Division of " + num1 + "and " + num2 + "= " + (num1 / num2))
//     }
// }

// var Calculate = calc(num1,opt,num2)
// document.write(Calculate)








// Question : 05 => Write a function that squares its argument .


// function square(a){
//     return a**2
// }

// var num = +prompt("Enter a number to find its square ")
// var squared = square(num)
// document.write ("Your Number: " + num + "<br>")
// document.write("Square of your number : " + squared)







// Question : 06 => Write a function that computes factorial of a number..


// function factorial(n){
//     if(n < 0){
//         return "Factorial of negative number is not possible"
//     }
//     if(n == 0 ){
//         return 1
//     }
//     else{
//         return (n * factorial(n-1))
//     }
// }
// var num = +prompt("Enter any positive number");
// var fac = factorial(num);
// document.write("Factorial of " + num  + " is " + fac);






// Question : 07 => Write a function that take start and end number as inputs & display counting in your browser.

// var num1 = +prompt("Enter Starting Number : ");
// var num2 = +prompt("Enter Last Number : ");
// function count(){
//     if(num1 <=num2 ){
//         for(var i = num1 ; i <= num2 ; i++)
//         document.write(i + "<br>")
//     }
//     else{
//         alert("Please Enter in Ascending Order")
//     }
// }

// count()







// Question : 08 => Write a nested function that computes hypotenuse of a right angle triangle.

//          Hypotenuse^2 = Base^2 + Perpendicular^2


// var base = +prompt("Enter Base of a Right Angled Triangle");
// var perp = +prompt("Enter Perpendicular of a Right Angled Triangle")
// function calculateHypotenuse(base, perp){
//     var hypo = Math.sqrt(base**2 + perp**2)
//     return hypo
// }
// var hypotenuse = calculateHypotenuse(base, perp)

// function calculateSquare(){
//     var squared = hypotenuse**2
//     return squared
// }

// var squareHyp = calculateSquare()

// document.write("Hypotenuse of your Right Angled Triangle is : " + hypotenuse)
// document.write("<br> Square of the Hypotenuse is : " + squareHyp)








// Question : 09 => Write a function that calculates the area of a rectangle.
//                            A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// var width = +prompt("Enter Width")
// var height = +prompt("Enter height")
// function calculateArea(width,height){
//     var area = width * height
//     return area
// }

// var varArea = calculateArea(width , height)
// var valArea = calculateArea(5,6)
// document.write("Area calculated from user's input i.e Arguments as Variables : " + varArea + "<br><br>")

// lArea = calculateArea(5,6)
// document.write("Area calculated from already given i.e Arguments as Variables : " + valArea + "<br><br>")








// Question : 10 => Write a JavaScript function that checks whether a passed string is palindrome or not? palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.



var input = prompt("Enter any word to check if its a Palindrome")
function checkPalindrome(input) {
    var string = input.toLowerCase().replace(" ","")
    var count = 0;
    if (string === "") {
        alert("Nothing Found!")
    }
    if ((string.length) % 2 === 0){
        count = (string.length) / 2
    }
    else if (string.length === 1) {
        document.write("Entered String is a Palindrome")
    }
    else {
        count = (string.length - 1) / 2
    }
    var flag = true
    for (var i = 0 ; i < count ; i++) {
        if (string[i] != string.slice(-1-i)[0]) {
            flag = false
        }
    }
    if(flag === false) {
        document.write("Entrered String is not a Palindrome")
    }
    else if(flag === true) {
    document.write("Entered String is a Palindrome")
    }
}
checkPalindrome(input)







// Question : 11 => Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// var string = prompt("Enter any string")
// function capitialize(string) {
//     var arr = string.split(" ")
//     for(var i = 0 ; i < arr.length ; i++){
//         var word = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
//         document.write(word + " ")
//     }
// }
// capitialize(string)








// Question : 12 => Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//      EXAMPLE STRING : 'Web Development Tutorial'
//      EXPECTED OUTPUT : 'Development'



// var string = prompt("Enter any string")

// function longestWord(string) {
//     var arr = string.split(" ")
//     var largest = ""
//     for(var i=0 ; i < arr.length ; i++){
//         if(arr[i].length > largest.length){
//             largest = arr[i]
//         }
//         else if (arr[i].lenght == largest.length){
//             largest = largest + ", " + arr[i]
//         }
//     }
//     return largest
// }

// var longLength = longestWord(string)
// document.write("Entered String: " + string + "<br>")
// document.write("Longest Word(s) in this String: " + longLength)







// Question : 13 => Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'



// var string = prompt("Enter string")
// var letter = prompt("Enter the letter to be counted")
// function letterCount(string, letter) {
//     var count = 0
//     for (var i = 0 ; i < string.length ; i++) {
//         if(string[i] == letter) {
//             count += 1
//         }
//     }
//     return count
// }
// var noOfAppereance = letterCount(string , letter)
// document.write("Given String is => " + string)
// document.write("<br> No. of " + letter + "(s) appeared in this string => " + noOfAppereance) 








// Question : 14 => 

                            //  The Geometrizer


// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:

// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".

// Create a function called calcArea:

// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr
// Area of circle = πr2





// ANSWER : 



// var radius = prompt("Enter Radius")

// function calcCircumference(radius){
//     var circum = 2 * Math.PI * radius
//     return circum
// }

// function calcArea(radius){
//     var area = Math.PI * radius**2
//     return area
// }

// var circumference = calcCircumference(radius)
// var area = calcArea(radius)
// document.write("The circumference is " + circumference)
// document.write("<br> The area is " + area)