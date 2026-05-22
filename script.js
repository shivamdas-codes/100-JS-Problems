// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
console.log("hello JavaScript");

// 2. Print your name, age, and city using one `console.log()`.
console.log("my name is Shivam Das, my age is 21 and i live in Hyderabad")

// 3. Print a warning message using `console.warn()`.
console.warn("this is a warning message");

// 4. Print an error message using `console.error()`.
console.error("this is an error");

// 5. Use `console.table()` to display an array of 5 numbers.
console.table([1, 2, 3, 4, 5]);

// ---

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
var studentname = "shivam das";
console.log(studentname);

// 2. Create a variable `age` and print it.
var age = 21
console.log(age);

// 3. Create two variables and swap their values.
var a = 30
var b = 40
var temp = a
a = b
b = temp
console.log(a,b);

// 4. Create a constant variable for `PI` and print it.
const PI = 3.14
console.log(PI);

// 5. Declare a variable without assigning a value and print it.
var c
console.log(c);

// 6. Create a variable `score` and increase it by 10.
var score = 90
score += 10
console.log(score);

// 7. Create three variables for first name, last name, and full name.
var firstname = "shivam"
var lastname = "das"
var fullname = firstname + " " + lastname
console.log(fullname);

// ---

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
var a1 = "shivam"
var a2 = 3
var a3 = true
var a4 = null
var a5
console.log(a1, a2, a3, a4, a5);

// 2. Check the type of different variables using `typeof`.
var a1 = "shivam"
var a2 = 3
var a3 = true
var a4 = null
var a5
console.log(typeof(a1), typeof(a2), typeof(a3), typeof(a4), typeof(a5));

// 3. Store your mobile number in a variable and check its type.
var num = 939270691
console.log(typeof(num));

// 4. Create a variable with value `null` and check its type.
var val = null
console.log(typeof(val));

// 5. Create a bigint number and print it.
var bnum = 783267666216261631616n
console.log(bnum);
console.log(typeof(bnum));

// ---

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.\
var str = "33"
var numb = Number(str)
console.log(numb);
console.log(typeof(numb));
console.log(typeof(str));

// 2. Convert the number `100` into a string.
var numbe = 100
var stri = String(numbe)
console.log(stri);
console.log(typeof(stri));

// 3. Convert `"true"` into a boolean.
var str1 = "true"
var bool = Boolean(str1)
console.log(bool);
console.log(typeof(bool));
 
// 4. Check the output of:
// - `"5" + 2`
var giv1 = "5"
var giv2 = 2
var com = giv1 + giv2
console.log(com);

// - `"5" - 2`
var giv3 = "5"
var giv4 = 2
var com2 = giv3 - giv4
console.log(com2);

// - `true + 1`
var c = true
var d = 1
var com3 = c + d
console.log(com3);

// 1. Create a variable with value `"123abc"` and convert it into a number.
var  val1 = "123abc"
var val2 = Number(val1)
console.log(val2);

// 2. Use `parseInt()` on `"500px"`.

// ---

// ## Operators

// 1. Add two numbers and print the result.
var sum1 = 10
var sum2 = 20
console.log(sum1 + sum2);

// 2. Find the remainder when 25 is divided by 4.
var sum3 = 25
var sum4 = 4
console.log(sum3 % sum4);

// 3. Find the square of a number using exponent operator.
var exp = 5
console.log(exp ** 2);

// 4. Increment a variable using `++`.
var  v = 20
v++
console.log(v);

// 5. Decrement a variable using `-`.
var v1 = 30
v1--
console.log(v1);

// 6. Use `+=` operator to increase a variable by 20.
var v2 = 80
v2 += 20
console.log(v2);

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
var num1 = 10
var num2 = 20
console.log(num1 > num2, num1 < num2, num1 >= num2, num1 <= num2);

// 8. Check if two values are strictly equal using `===`.
var num3 = 25
var num4 = 35
var num5 = 33
var num6 = 33
console.log(num3 === num4);
console.log(num5 === num6);

// 9. Compare `"10"` and `10` using both `==` and `===`.
var str2 = "10"
var num7 = 10 
console.log(str2 == num7);
console.log(str2 === num7);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
var bool2 = 0
var bool3 = 1
console.log(bool2 > bool3 && bool2 < bool3);
console.log(bool2 > bool3 || bool2 < bool3);
console.log(!bool2);

// ---

// ## Strings

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

// ---

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// ---

// ## Conditionals

// 1. Check whether a number is positive or negative.
// 2. Check whether a number is even or odd.
// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.

// ---

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// 2. Check whether `0` is truthy or falsy.
// 3. Check whether `[]` is truthy or falsy.
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

// ---

// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

// ---

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces.

// ---

// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// 2. Check whether a number lies between 10 and 50.
// 3. Check whether a password length is greater than 8.
// 4. Check if a person can drive:
// - age > 18
// - has license = true
// 1. Check whether a number is divisible by 2, 3, or both.
// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// 3. Find whether a number is a multiple of 10.
// 4. Create a simple discount calculator.
// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.

// ---

// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
// 2. Reverse a 3-letter string manually.
// 3. Find the last character of a string.
// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// 6. Create a simple login validation system.
// 7. Find whether a number is a 2-digit or 3-digit number.
// 8. Create a mini ATM balance checker.
// 9. Simulate a traffic light system using `switch`.
// 10. Build a small marksheet generator using variables and conditionals.

