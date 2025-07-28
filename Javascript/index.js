//to declare a variable we use let, var and const

const { deflate } = require("zlib");

// //declaring a variable
// let num = 23;
// const num1 = 23;
// var num3 = "AMit";

// //declaration
// let name1;
// //assignment
// name1 = 34;

// //in case var (redeclaration,reassinment  is allowed)
// var a = 34;
// var a = 78;
// //console.log(a);

// var a = 78;
// a = 90;
// // console.log(a);

// var b;
// b = 90;
// // console.log(b);

// //(in case of let)=>redeclaration is not allowed but reassignment is allowed
// // let c = 45;
// // let c = 89;
// // console.log(c);

// let c = 90;
// c = 78;
// // console.log(c);

// let d;
// d = 78;
// console.log(d);

// //in case of const=>redeclaration,reassignemt is not allowed
// // const e=45;
// // const e=90;

// // const e = 6;
// // e = 90;
// // console.log(e);

// const r = 90;
// // r=90;
// console.log(r);

//hoisting=>its a concept in which variable are move on the top
// console.log(a); //a is not defined
// var a;
// console.log(b);
// var b = 89;//only variables are hoited not their assignment

// hoisting in case of let and const
// console.log(a); //temporal dead zone
// let a;

// declaration
// reassignment
// declared first and assign latter
// hoisting

//declaration
// var a;
// var a;
// a = 90;
// console.log(a);

// let b;
// let b;

// reassignment
// var a = 90;
// a = 89;
// console.log(a);

// let a = 78;
// a = 45;
// console.log(a);

// const a = 78;
// a = 56;
// console.log(a);
// const a;
// a=89

// scope -> Area in which variable is accessble

// {
//   const a = 7;
//   console.log(a);
// }

// conditional statement

// let age = 12;
// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// if(condition){

// }

// let marks = 45;
// if (marks >= 90) {
//   console.log("Grade A ");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

// switch

// let day = "Monday";

// if (day == "Monday") {
//   console.log("it's first working day");
// } else if (day == "Tuesday") {
//   console.log("its second working day");
// } else if (day == "Wednesday") {
//   console.log("its second working day");
// } else if (day == "Thursday") {
//   console.log("its second working day");
// } else {
//   console.log("is weekend");
// }

// let day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("first workind day");
//     break;
//   case "Tuesday":
//     console.log("second working day");
//     break;
//   case "Wednesday":
//     console.log("Third working day");
//     break;
//   default:
//     console.log("Weekend");
// }

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// for(initization,condition,updation){

// }

// for (let i = 1; i <= 10; i++) {
//   //   console.log("2 X ", i, "=", i * 2);
//   console.log(`2 X ${i} = ${i * 2}`);
// }

// *****
// *****
// *****
// *****

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// *        ->0
// **
// ***
// ****
// *****

//     *
//    **
//   ***
//  ****
// *****

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5 - i; j++) {
//     str = str + " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

//while loop

// while(condition){
//   // statement
// }

// let i = 5;
// while (i > 0) {
//   console.log("hello world");
//   i--;
// }

// do {
//   statement;
// } while (condition);
// let i = 0;
// do {
//   console.log("hello world");
//   i++;
// } while (i < 0);

// loops
// 1. for();
// 2. whiile()
// 3. do while()

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue; //skip even no.
//   }
//   console.log(i); //prints only odd no.
// }

// functions

// 1. Normal function
// function declaration/defination
// function functionName() {
//   //body/statments
// }

// //function invoking/calling
// functionName();

// function printName(name) {
//   console.log("My name is ", name);
// }

// printName("Amit");

// 2. Function Expression
// function declaration/defination
// let sum = function (a, b) {
//   return a + b;
// };

// //function invoking/calling
// let result = sum(4, 5);
// console.log(result);

//3. Arrow Function
// function declaration/defination

// let multiply = (a, b) => {
//   return a * b;
// };

// console.log(multiply(4, 4));

// flat Arrow funtion
// let multiply = (a, b) => a * b;
// console.log(multiply(3, 5));

// let printName = (name) => name;

//4. Immidiate invoke function (IIF)

// (function (name) {
//   console.log("hello! ", name);
// })("Amit");



//Noramalfunctions

// function functionName(a,b){
//     return 
// }

// arrow function 
// let sum =()=>{
//    return 
// }

//functions are treated as first class object
// let sum=function(){
//     return  function(){}
// // }


// *****
// *****
// *****
// *****
// *****




// function matrix(n){
//     for(let i=0;i<n;i++){
//         let str=''
//         for(let j=0;j<n;j++){
//             str =str+"*"
//         }
//         console.log(str)
//     }
// }

// matrix(5)
// matrix(7)


// function sum(){
//     var a=6;
// }

// console.log(a)
// var a;
// console.log(a)


// let a=9;
// let b=9;

// console.log(a==b);

// let ar=[1]
// let arr1=[1]

// console.log(ar==arr1)
// console.log({}=={})


// let arr=[]

// arr.map(()=>{})


