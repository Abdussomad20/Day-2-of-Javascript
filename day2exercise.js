// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times
const challenge = '30 Days of Javascript'
console.log(challenge)
console.log(challenge.length)
let challenge2 = challenge.toUpperCase();
console.log(challenge2)
let challenge3 = challenge.toLowerCase();
console.log(challenge3)
let another = challenge.substr(1,21)
console.log(another)
let cut = challenge.slice(11,21)
console.log(cut)
let check = challenge.includes('Script')
console.log(check)
let scatter = challenge.split()
console.log(scatter)
let scatter2 = challenge.split(' ')
console.log(scatter2)
const new1 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let newset = new1.split(', ')
console.log(newset)
const challenge9 = "30 Days of Javascript"
let challenge10 = challenge9.replace("Javascript","Phyton")
console.log(challenge10)
num = challenge9.charAt(15)
console.log(num)
num10 = challenge9.charCodeAt('11')
console.log(num10)
let sight = challenge9.indexOf("a")
console.log(sight)
let sight2 = challenge9.lastIndexOf("a")
console.log(sight2)
const findMe = "You cannot end a sentence with because because because is a conjunction"
rule = findMe.indexOf("because")
console.log(rule)
rule2 = findMe.lastIndexOf("because")
console.log(rule2)
rule3 = findMe.search("because")
console.log(rule3)

let comot = ' 30 Days Of JavaScript '
comot.trim()
console.log(comot)

challenge30 = "30 Days of Javascript"
let challenge31 = challenge30.startsWith("30")
console.log(challenge31)
let challenge32 = challenge30.endsWith("Javascript")
console.log(challenge32)
let resume = challenge30.match(/a/g)
console.log(resume)
const lastman = '30 Days of '
const lastman2 = 'JavaScript '
let lastman3 = lastman.concat(lastman2)
console.log(lastman3)
newword = lastman2.repeat(2)
console.log(newword)
