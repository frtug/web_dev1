
// console.log("hello I am here ")


// const party = (t)=>{
//     console.log(this.z);
//     console.log(t);
// }
// scope



// Clouser

// let z = "I am z"

// function enjoy(){
//     let z = "hello"
    
//     const party = (t)=>{
//         console.log(z);
//         console.log(t);
//     };
    

//     party("i am T ");

// }
// enjoy()
// console.log(z)



// function add(a,b){
//     console.log(a,b)
//     console.log(a+b)
//     return a+b;
// }

// let sum1 = add(1,2);

// let sum2 = add(4,3);


// function modulas(a,b){
//     console.log(a,b)
//     console.log(a+b)
//     return a%b;
// }

// console.log(modulas(12,6))



// const res = function my(a){
//     return a;
// }
// console.log(res(1))

// const arrowFu = (a,b) => a/b;

// const arrowFun = (a,b) =>{
//     return a/b;
// }

// const r = arrowFun(4,5);

// console.log(r)

// Create a function which will take 4 parameters, Two will add, two will divide and result of two numbers are going to be multiplied 


// function siva(){
//     var a=2;
//     var b=4;
//     var c=12;
//     var d=6;
//     let sum=a+b;
//     console.log(sum);
//     // return sum;
//     let div = c/d;
//     console.log(div);

//     return div*sum;
// }
// console.log(siva())


// function math(a,b,c,d){
//     let add = a+b;
//     let div = c/d;
//     console.log(add)
//     console.log(div)

//     return add*div;
// }
// console.log(math(2,4,6,3))\\


// function aa(a,b,c,d){
//     let sum=a+b+c+d;
//     console.log(sum)
//     let div = c/d;   
//     return sum*div;          
// }

// console.log(aa(1,24,5,3))


// 5 parameter, 3 values are going to be default values 10,100,1000,-67-89

// 2 3 


// result subtracted return that only 


// function sub(a,b,c=10,d=100,e=1000){
//     let sum1=a+b
//     let sum2=c+d+e
//     return sum2-sum1;
// }
// console.log(sub(2,4,3223))



// function t(a,e,b=10,c=100,d=1000){
//     let sum=(b+c+d);
//     let sum2=(a+e)
//     // console.log(sum);

//     console.log(e,a)

//     let sub = (sum-sum2);
//     return sub;
// }
// const result = t(1100,10);

// // if else
// if(result > 0){
//     console.log("positive")
//     // here you
// }
// else if(result == 0){
//     console.log("zero")

// }

// else {
//     console.log("Negative")

// }

// 


// var reminder = function (a,b){
//     console.log(a,b)
//     return a % b
//     // modulaas of a/b
// }
// re > 0 and its even number  -> console.log("possitive even")

// rem = 0 and mesaage "its zero "
// 

// var remainder=function (a,b){
//     console.log(a,b);
//     return a % b
// }
// let rem  = remainder(4,6) 
// if(rem > 0){
//     console.log("positive");
// }
// else if(rem%2 == 0){
//     console.log("even number");
// }
//  if (rem=0){
//     console.log("zero");
// }
// else{
//     console.log("integers");
// }


// var remainder = function (a,b){
//     console.log(a%b)
//     return a % b;
// }
// let c = (remainder(10,5))
// if(c == 0){
//     console.log("positive even")
// }
// else{
//     console.log("positive odd")
// }

// for(initilation,condition,i++ )


// let i=0;
// var sum=0;
// for(;i<=1000;i++){

//    var sum = 0;
//    sum =  sum+i;
//    console.log(sum)
// }
// console.log(sum)
// console.log(i)



    

// for(let i=0;i<1000;i++){
//     if(i == 500) break;
//     console.log(i)
// }

// for(let i=0;i<1000;i++){
//     if(i == 600){
       
//         console.log("I found the 600 ")
//         continue;
//     }
//     console.log(i)
//     }


// let arr = [];
// console.log(arr)



// let students = ["Adarsha","siva","teja","pooja"];
// let st1 = "Adarsha"
// let st2 = "Siva"

// let st3 = "Teja"

// console.log(students[0])
// console.log(students[1])

// let n = students.length;

// console.log(students[n-1])

// students[n] = "abhi"

// console.log(students.push("Rohan")) // adding at last

// students.shift() // adding at last

// // shift and unshift()

// n = students.length;

// for(let i=0;i<=n-1;i++){
//     console.log(students[i])
// }

// let row = 3;
// let col=2;

// // let stu_2d = Array.from({length:row},()=>Array(col).fill(null));
// let stu_2d = [];

// for(let i=0;i<row;i++){
//     stu_2d[i] = [];
//     for(let j=0;j<col;j++){
//         stu_2d[i][j] = null;
//     }
// }

// stu_2d[0] = [];
// stu_2d[1] = [];

// stu_2d[0][0] = 1 
// stu_2d[1][0] = 1 



// console.log(stu_2d[0])

// for(let i=0;i<stu_2d.length;i++){
//     // console.log(stu_2d[i])
//     for(let j=0;j<stu_2d[i].length;j++){
//         console.log(stu_2d[i][j],)
//     }
// }

// for(let i=5;i>0;i--){
//     let row = "";
//     for(let j=0;j<i;j++){
//         row = row +"* ";
//     }
//     console.log(row)
// }

// let siva = {
//     name:"Siva",
//     age:23,
//     dob:"07/08/2003",
//     isMature:true
    
// }
// // console.log(siva.name)
// // console.log(siva.age)
// // console.log(siva['dob'])

// siva.gender = "Male"
// siva["education"] = "Btech"


// delete siva['education']
// // console.log(siva['gender'])

// for(key in siva){
//     console.log(key,siva[key])
// }

// --------------------------------------18 Nov 
// let students = [
//     {
//         name:"Siva",
//         age:23,
//         dob:"07/08/2003",
//         isMature:true,
//         marks:[12,34,3],
//         friends:{
//             friend1 : "Adarsha",
//             friend2: "Teja" 
//         } 
//     },
//     {
//         name:"Adarsha",
//         age:23,
//         dob:"06/08/2002",
//         isMature:true,
//         marks:[33,11,15] , 
//         friends:{
//             friend1 : "Siva",
//             friend2: "Teja" 
//         }    
//     }
// ]

// let arr = students[0].marks;
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];   
//     // sum = sum + arr[i];
// }

// for(let i=0;i<students.length;i++){
//     let marks_arr = students[i].marks;
//     let sum = 0;
//     for(let j=0;j<marks_arr.length;j++){
//         sum += marks_arr[j];   
//     }
//     console.log("Average =",sum/marks_arr.length)
// }

// students.forEach((student) => {
//     let arr = student.marks;
//     let sum =0;
//     arr.forEach(function(mark){
//         sum += mark;
//     })
//     console.log(sum/arr.length)
// });

// students.forEach((student) => {
//     for(property in student){
//         // console.log(typeof(student[property]),typeof(property))
//         if( typeof(student[property]) != "object" ){
//             console.log(property,student[property])
//         }
//         else {
//             // console.log(property,student[property])
//             console.log("object detected")
//             let v = student[property];
//             let sum = 0;
//             let friend_cat = ""
//             // if(student[property] instanceof Array){
//             if(Array.isArray(student[property])){
//                 v.forEach((mark)=>{
//                     sum += mark
//                 })
//             }
//             else{
//                 let friends = student[property];
//                 for(friend in friends){
//                     friend_cat += friends[friend]+",";
//                 }
//             }

            
//             console.log(sum)
//             console.log(friend_cat)

//         }
//     }



        // console.log(property,student[property])
    //    if(Array.isArray(student[property])){

    //     // if(student[property] instanceof Array){
    //         console.log(student[property])
    //     }
    //     else if(typeof(student[property]) === 'object'){
    //         console.log("obj",student[property] )
    //     }
    

    // let friend_ = ""
    // for(friend in obj){
    //     // console.log(friend, obj[friend])
    //     friend_ +=   obj[friend]+",";
    // }
    // console.log(friend_)
// });


// console.log(students[0].marks)
// console.log(students[1].marks)


// console.log(typeof(students[0].marks))

// let fun = function(a,b){
//     return a+b;
// }
// console.log(typeof(fun))


// console.log(1 == "1") //true
// console.log(1 === "1") // false

// console.log(true == true) // true
// console.log(true === "true") //false
// console.log(true == 0) // true

// console.log(undefined == undefined) // true
// console.log(undefined === "undefined") //false
// console.log(undefined == null) // false
// console.log(undefined === null) // f


// var togo = function (a,b){
//     let secret = "I am not a cat "+(a+b-1)
//     return function a(p){
//         return p+ secret
//     }
// }
// let t = togo(2,3)
// console.log(t("hi "))
// console.log(t("hi "))
// console.log(t("hi "))

// const add = function (a,b) {return a+b;}

// const sub = function (a,b) {return a-b;}
// const multi = function (a,b) {return a*b;}

// const operations = [add,sub,multi];

// operations.forEach((op)=>{
//     console.log(op(10,5))
// })
//     *
//    ***
//   *****
//  *******
//  *********

// let n = 5;
// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=n;j>i+1;j--){
//         row += ' ';
//     }
//     // console.log(row)
//     for(let k=0;k<2*(i+1)-1;k++){
//         row += "*"
//     }
//     console.log(row)

//     // next half
// }

// var student1 = {
//     name:"aa",
//     age: 22
// }
// var student2 = {
//     name:"ss",
//     age: 21
// }

// var createStudent = function(name,age){
//     var student = {
//         name:name,
//         age:age,
//         birthday:function(){ this.age =this.age+1}
//         // TODO-Student :: age instead of this.age and see what happens  
//     }
//     return student
// }
// var student1 = createStudent("darling",22)
// console.log(student1)
// student1.birthday()
// console.log(student1)

// var student2 = createStudent("babe",33)

// // console.log(student2)

// var Student = function(name,age){
//     this.name =name
//     this.age = age
//     this.birthday = function(){
//         this.age++;
//     }
// }
// let st1 = new Student("Siva",22)
// console.log(st1)
// st1.birthday()
// console.log(st1)

// pallendrome


// siva
// avia  
// let s = "siva" // 

// if(s.split("").reverse().join("") === s)
//     console.log("pallendrome")
// else 
// console.log("not a pallendrome")


// let ss = "siis"

// let i=0;
// let j=ss.length-1;
// let isPallen = true
// while(i < j){
//     if(ss[i] !== ss[j]) {
//         isPallen = false;
//         break;
//     }
//     i++;
//     j--;
// }

// function isPallendrome(str){
//     for(let i=0,j=str.length-1;i<j;i++,j--){
//         if(str[i] !== str[j]) return false;

//     }
//     return true;
// }
// if(isPallendrome("saat"))  console.log("pallendrome")
// else console.log("not a pallendrome")

// let c = "man"
// let m = c.length;
// let rev='';
// console.log(m)
// for(let p=m-1;p>=0;p--){
// //   console.log(c[p]) 
//     rev = rev + c[p];
// }
// console.log(rev)

// if(rev===c) console.log(c,"is a palindrome")
// else console.log(c,"is not a palindrome")
// function fact(n){
//     let fa = 1 ;
//     for(let i=n;i>0;i--){
//         console.log(i);
//         fa = fa*i;
//     }
//     return fa
// }

// console.log(fact(5))

// function arr_fact(arr){
//     let a = [];
//     //  write your code here which will calc. factorial of a number and save it in array
//     return a
// }
// let arr = [1,2,3,4,5,5,6,6,3,5,6,2,5,6,36,63] 
// console.log(arr_fact(arr))

// Q2
// write a pallendrome function which will get an array and your are going
// to return true or false in an array in an same order of the string 

// q#

// console.log(Math.round(Math.random()*255))

// function which will return 100 random values in an Array. and later pass that array to a sum function which will calculate sum of that array... 

// function  will check the prime number from a given range or maybe first 100 naturals numbers, and give in list in array.

// 1 to 100








// function isPrime(n){
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n % i == 0) return false; 
//     }
//     return true;

// }
// console.log(isPrime(11))

// LCM (2,10)

// function sum(a,b){
//     console.log(a+b)
// }
// console.log(sum(2,4))

// let a = 1;

// console.log(a)
// console.log(console.log(a));

// if(console.log(a)){
//     console.log("hello")
// }
// else console.log("Bye")


// let a = 6;
// switch(a){
//     case 0:
//     case 1:
//     console.log("zero one",a) 
//     break;
//     case 2:
//     console.log("two",a) 
//     break;
//     case 3:
//     console.log("three",a) 
//     break;
//     default:
//         console.log("all values after 3",a) 
       
// let n = 5
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=0;j<n-i;j++){
//         row += " "
//     }
//     row += '*';
// // --------------------
//     if(i != 1){
//         // spaces in middle with 2n-1 function 
//         for(let j=0;j<2*(i-1) -1;j++){
//             row += " "
//         }
//         row += "*"
//     }


//     console.log(row)
// }
// let a = "Hello"
// (a.length > 6) ? console.log("helo") : console.log("bye")

// cal

// 3 conditions 

// const modes = ["ready","onMove","reached"];

// function randomMode(n){
//     return Math.round(Math.random()*(n-1));
// }

// switch(randomMode(mode.length)):


// -----------
//           /
//          /
// const subjects = {
//     "tel":"A+",
//      "hin":"A",
//      "kan":"A+",

// }

// const marks = {
//     "A+": 95, 
//     A : 90,
//     "B+": 85, 
//     B : 80,
//     "c+": 75, 
//     c : 70,
//     d : 0
// }
// function findMarks(lan){
//     switch(lan){
//         case "kan":
//             console.log("language is Kannada and marks", marks[subjects[lan]]  )
//             return marks[subjects[lan]];
//         case "tel":
//             console.log("language is Telugu and marks", marks[subjects[lan]]  )
//             return marks[subjects[lan]];
          
//         case "hin":
//             console.log("language is Hindi and marks", marks[subjects[lan]]  )
//             return marks[subjects[lan]];
        
//         default:
//             console.log("language is not available", subjects[lan] )

//     }
    

// }
// var lan = ["kan","tel","tel","kan","hin","en"]
// lan.forEach((l)=>{
//     console.log(findMarks(l))
// })
// let i = 6; // 0110   -> 2^1*1+2^2*1
// let j = 2; //0010

// console.log(i & j) //0010 ->2 
// console.log(i | j) //0110 -> 6
// console.log(i ^ j) // 0100 -> 4 -> 00001 0000

// console.log(~i) // 1001 -> 9 -> 11111111 11111111 11111111 111111001 -> second's complemement rule 


// // 00000000 00000000 00000000 00000110 + 00000000 00000000 00000000 00000001 -> 00000000 00000000 00000000 00000111

// // // left shift
// console.log(i << 3) //0110 -> 01100 -> 11000 ->110000
// // console.log(i << 1) //0110 -> 1100 

// // //right shift
// console.log(i >> 2) //0110 ->0011 -> 0001  // 1
// // console.log(i >> 1) //0110 -> 0011  3



// let str = "hello world"

// let obj = {}

// for(let c of str){
//     if(obj[c]){
//         obj[c]++;
//     }
//     else {
//         obj[c] = 1
//     }
// }
// console.log(obj)

// a to z

// let arr = [];
// for(let i=0;i<26;i++){
//     arr[i] = 0;
// }



// function test(n){
//     let charCount=[];
//     for(let char in n){
//         // console.log(char)
//         charCount[str.charCodeAt(char) - 97 ] =(charCount[str.charCodeAt(char) - 97 ] || 0) + 1;
//     }
//     return charCount;
// }

// let arr = [];
// let str="hello world";

// for(let i=0;i<25;i++){
//   arr[i] = 0;
// }
// let con = 97;

// for(let i=0;i<str.length;i++){
//   // console.log(str[i])
//   if(str.charCodeAt(i) != 32)
//     arr[str.charCodeAt(i)-con]++;
//   // arr[i] = arr[i]++;
// }
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//   if(arr[i] != 0){
//     console.log(String.fromCharCode(i+con),arr[i])
//   }
// }


// for(let i=0;i<str.length;i++){
//     console.log(arr[str.charCodeAt(i)-con],str[i])
  
// }
// console.log(arr)





// console.log("\\")

// --sorting, increaing and decreasing

// let arr = [3,52,55,252,52,52]

// arr.sort((a,b)=>b-a)
// console.log(arr)

// 10101 -> 21
// let str = "10101"

// function binaryTodecimal(bin){
//     let sum = 0;
//     let n =str.length;
//     for(let i=0;i<n;i++){
//         sum += str[n-i-1]* Math.pow(2,i)  
//     }
//     return sum
// }
// console.log(binaryTodecimal(str))
// console.log(parseInt(str,2))

//-------------------------------
// let deci = 22;
// function decimalToBinary(d){
//     let str =""
    // let count = 0
//     while(d > 0){
//         let last = d%2; // if d = 3 , 1
//         str = last + str;
//         d = Math.floor(d/2)
// count++;
//     }
//     return str;
// }   
// console.log(decimalToBinary(deci))

// binray to decimal

// let bin = 101010 %2  = 0

// get a decimal 42
// let i = 1
// console.lo(i)
// let si = new Error("Siva doe's match");
// try{
//     // write any piece of code which will give an error
//     let i ="sivaa"
//     if(i !== "siva") throw si;
//     try{
//         console.lo("Pint it")
//     }
//     catch(err){
//         console.log("error of console handled",err)
//     }
// }
// catch(err){
//     console.log("i got an error",err)
// }
// finally{
//     console.log("Handled the error")

// }


// function reverseNumber(n){
//     let rev = 0;
//     while(n >0){
//         let r = n%10;
//         rev = rev*10 + r;
//         n = Math.floor(n/10);
//     }
//     return rev
// }
// console.log(reverseNumber(1000232))


// function bToD(n){
//     let d = 0;
//     let i=0;
//     while(n > 0){
//         let r = n%10;
//         d += r*Math.pow(2,i);
//         n = Math.floor(n/10);
//         i++
//     }
//     return rev
// }
// console.log(bToD(100100))


// function rec_sum(n){
//     if(n == 0 || n == 1) return n;
//     return n + rec_sum(n-1)
// }
// console.log(rec_sum(10)) 


// function rec_fac(n){
//     if(n == 0 || n == 1) return 1;
//     return n * rec_fac(n-1)
// }
// console.log(rec_fac(5)) 

// // rec_sum(10) = rec_sum(9)+10
// // rec_sum(9) = rec_sum(8)+9


// function rec_pal(str){
//     if(str.length == 0 || str.length == 1) return true 
//       if(str[0] == str[str.length-1]) {
//         return true && rec_pal(str.substring(1,str.length-1))
//     }
//     else return false
// }

// console.log(rec_pal("jijd")) 


// binrary to decimal conversion using recursion method 

// decial to binrary recursion 

// function rbd(str,i){
//     if(str.length == 0) {
//         return 0
//     }
//     return str[str.length-1]* Math.pow(2,i) + rbd(str.substring(0,str.length-1),i+1)


// }
// console.log(rbd("1000",0))

// global function 
// let str = "10111"
// console.log(str.substring(0,str.length-2))   
// {
//     let i=0
// }
// var i = 0;


// function hello(){

//     console.log("hello I am here")  
//     function abc(){
//         console.log("I am here abc")
//     } 
//     abc()
// }

// const greet = function ()=>{
//     // function expression 
// }
// hello()

// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },2000)
// }
// var i=0;
// console.log("hello Start",i)

// setTimeout(function(){
//     console.log("hello I am ",i)
//     i++
// },0)

// console.log("hello i am done",i)

// setTimeout(function(){
//     console.log("hello I am 2 ",i)
    
// },1000)
// function abc(){
//     console.log("Hello")
// }
// abc()


// // ss()
// console.log(ss)
// var ss = function(){
//     console.log("hello ss")
// }

// function abc(s,...a){
//     console.log(a)
//     console.log("Hello")
// }
// abc(1,2)

// Pass By value / Pass by Reference 

// let a = 1;
// let b = 2;
// console.log("a= ",a)
// console.log("b= ",b)

// b = a; // coping the value 

// a++
// b = a;

// console.log("a= ",a)
// console.log("b= ",b)

// let s = {
//     name:"Siva",
//     hobbies:{
//         coding:7,
//         garderning:3
//     }
// }
// let p = {
//     name:"Pooja",
//     hobbies:{
//         coding:2,
//         IT:7,
//         maths:3
//     }
// }

// console.log("s = ",s)
// console.log("p = ",p)

// // s = p; // call by reference 
// // s = {...p}
// // s = Object.assign({},p) // shallow cloning
// // s = JSON.parse(JSON.stringify(p)) // deep cloning
// // s =  JSON.parse(JSON.stringify())
// s = structuredClone(p) // deep cloning


// // structuredClone
// p.name = "Teja"
// p.hobbies.coding = 10

// console.log("s = ",s)
// console.log("p = ",p)

// clousers


// function abc(){
//     let i = 0;
//     return function(){
//         console.log("Value of I is ",++i)
//     }
// }
// let s = abc();
// s()
// s()
// s()
// s()


// const  NuclearLaunchCode = function(){
    
//     let timepassed = 200;
//     function launch(){
//         console.log("BOOOM 🔥🔥🔥🔥")
//     }
//     function whatTime(){
//         console.log("timepassed = ",timepassed)
//     }
//     setInterval(()=>{timepassed--},1000)

//     return{
//         whatTime
//     }
// }
// let fun = NuclearLaunchCode()
// console.log(fun.whatTime)

// function aa(){
//     console.log("hhe")
// }
// aa()
// aa.age = 32;
// console.log(aa)


// let specialObject = {
//     name:aa,
//     age:22
        // ()=> {console.log("hee")}
// }

// let hero = {
//     name:"Thor",
//     attack(){
//         console.log("this is attack from",this.name)
//     }
// }
// let p = Object.create(hero)
// // p.name = "KL Rahul"
// // p.batting = function(){
// //     console.log("Batting by ",this.name)
// // }

// // Array.__proto__ = hero


// console.log(p)
// console.log(Object.isPrototypeOf(Array))
// for(key in p){
//     // if(p.hasOwnProperty(key))
//         console.log(key,p[key])
// }

// high order function
// let ar = [1,2,3,4,2]
// "1 🚀","2 🚀","3 🚀","4 🚀","2 🚀"
// let i = ar.map((p)=>p*p)
// console.log(ar)
// console.log(i)


// --------
// [1,2,3]
// let sum =0
// for i to n 
// sum += a[i]

// let sum = ar.reduce((total,current)=>total+current,0)


// let ar = [1,2,3,4,2]
// // "1 🚀","2 🚀","3 🚀","4 🚀","2 🚀"
// Array.prototype.map = function(){
//         let a =[];
//         console.log(this)
//         for(let i=0;i<this.length;i++){
//             a.push(this[i]+'🚀')
//         }
//         return a;
// }
// Date.prototype.lastYear = function(){
//     return this.getFullYear() -1
// }
// console.log(ar.map())

// let d = new Date("2022-03-25")
// console.log(d.lastYear())
// console.log(d.getFullYear()-1)


// let ironMan = {
//     name:"IronMan",
//     weapon:"Suit with blasters",

//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     }
// }
// let thor = {
//     name:"Thor",
//     weapon:"Hammer with Thunder",
//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     }
// }


// function marvelCharacter(name,weapon){
//     return {
//         name:name,
//         weapon:weapon,
//         attack(){
//             return this.name+" is attacking by its "+this.weapon;
//         }
//     }
// }
// const thor = marvelCharacter("Thor","Hammer")
// const ironMan = marvelCharacter("IronMan","Suit")
// const captionAmerica = marvelCharacter("CaptionAmerica","Sheld")


// console.log(ironMan)
// console.log(thor)

// console.log(ironMan.attack())
// console.log(thor.attack())

// const powers ={
//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     },
//     flying(){
//         return this.name+" is flying with "+this.weapon;
//     }
// }

// function marvelCharacter(name,weapon){
//     return {
//         name:name,
//         weapon:weapon,
//     }
// }
// const thor = marvelCharacter("Thor","Hammer")
// thor.attack = powers.attack
// thor.flying = powers.flying

// const ironMan = marvelCharacter("IronMan","Suit")
// ironMan.attack = powers.attack

// const captionAmerica = marvelCharacter("CaptionAmerica","Sheild")
// captionAmerica.attack = powers.attack


// console.log(thor.flying())
// console.log(thor)

// console.log(ironMan.attack())
// console.log(thor.attack())
// console.log(captionAmerica.attack())




// const powers ={
//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     },
//     flying(){
//         return this.name+" is flying with "+this.weapon;
//     }
// }

// function marvelCharacter(name,weapon){
//     let obj = Object.create(powers) 
//     obj.name = name;
//     obj.weapon = weapon;
//     return obj;
// }
// const thor = marvelCharacter("Thor","Hammer")

// const ironMan = marvelCharacter("IronMan","Suit")

// const captionAmerica = marvelCharacter("CaptionAmerica","Sheild")


// console.log(thor.flying())
// console.log(thor)

// console.log(ironMan.attack())
// console.log(thor.attack())
// console.log(captionAmerica.attack())



// const powers ={
//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     },
//     flying(){
//         console.log(this) // object who is calling this
//         // let self = this
//         // return function(){
//         //     console.log(this) // global
//         //     return self.name+" is flying with "+self.weapon;
//         // }

//         // ---------------------
//         // return function(){
//         //     console.log(this) // global
//         //     return this.name+" is flying with "+this.weapon;
//         // }.bind(this)

//         // ----------------
//         let f = function(){
//             console.log(this) // global
//             return this.name+" is flying with "+this.weapon;
//         }
//         return f.bind(this);
//     }
// }

// function MarvelCharacter(name,weapon){
        // this.i = 1;
//     this.name = name;
//     this.weapon = weapon;

// }

// MarvelCharacter.prototype = {...MarvelCharacter.prototype,...powers}
// // MarvelCharacter.prototype.flying = powers.flying

// const thor = new MarvelCharacter("Thor","Hammer")

// const ironMan = new MarvelCharacter("IronMan","Suit")

// const captionAmerica = new MarvelCharacter("CaptionAmerica","Sheild")


// console.log(thor.attack())
// console.log(thor)

// let t = {}

// for(prop in thor){
//     console.log(prop, thor[prop])
// }

// console.log(ironMan.attack())
// console.log(thor.attack())
// console.log(thor.flying()())

// let a = 10;
// let n = new Number(4)

// String 
// Boolean 
// Symbol('')
// BigInt()

// class MarvelCharacter{
//     constructor(name,weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }
//     attack(){
//         return this.name+" is attacking by its "+this.weapon;
//     }
// }

// let thor = new MarvelCharacter("Thor","Hammer")
// let ironMan = new MarvelCharacter("ironMan","Suit")

// console.log(thor instanceof(MarvelCharacter))


// console.log(thor.attack())

//  create A Car class with dynamically creating object with values color, engine, type

// Car 
// let lightCar = new Car("red","VZIII","Light Duty Veichle")
// let HeavyCar = new Car("red","XBWW","Heavy Duty Veichle")


// class Car{
//     #chasis = "XXXIIIV" // private 

//     constructor(name,color,engine,type){
//         this.name=name;
//         this.color=color;
//         this.engine=engine;
//         this.type=type;
//     }
//     #getChasisNumber(){
//         return this.#chasis
//     }
//      AuthorizedAccessChasis(s){
//         if(s === "778083"){
//             return this.#getChasisNumber();
//         }
//         else {
//             return "Secret Value is not right, try again"
//         }
//     }
//     // CustomizeTire(tire){
//     //     console.log(tire)
//     // }
//     CustomizeTire(tire,...args){
//         if(args.length == 2){
//             console.log(tire,args)
//         }
//         else if(args.length == 1){
//             console.log(tire,"second value",args)
//         }
//         else console.log(tire);
//     }

//     static setColor(color){
//         this.color = color
//         return "setting the color Successfully "+ this.color;
//     }
//     getColor(){
//         return this.color;
//     }
// }
// class Truck extends Car{
//     constructor(name,color,engine,type,drive){
//         super(name,color,engine,type)
//         this.drive =drive
//     }
//     setDrive(drive){
//         console.log(super.getColor())
//         this.drive = drive;
//     }
    
    
// }

// let t1 = new Truck("audi","Green",5,"Heavy","4x4")
// Truck.setColor("Black")
// t1.setDrive("2x2")
// // console.log(t1.#chasis)
// t1.CustomizeTire("LargeTire")
// t1.CustomizeTire("Large Tire","6x6")

// console.log(t1.AuthorizedAccessChasis("778083"))
// console.log(t1)


// let c1 = new Car("audi","red",4,"light")
// console.log(c1.#getChasisNumber())
// console.log(Truck.CustomizeTire("heavy ...."))
// console.log(c1.#chasis)
// // c1.color = "black"
// console.log(c1.getColor())
// console.log(c1.setColor("Blue"))
// console.log(c1.getColor())

// let c2 = new Car("suzuki","red",2,"heavy")

// console.log(c1)
// console.log(c2)

// 
// let s=[1,2,4,2,42]
// // function fp(a,b){
// //     return a*b
// // }

// let parrot = true;
// function ss(s,parrot){
//     parrot = false;
//     console.log(parrot)
//     // let a= []

//     for(let i=0;i<10;i++){
//         console.log(s[i])
//     }
    

//     s.forEach((element,i) => {
//         console.log(element)
//         s[i] *= element
//     });

//     let a = s.map((element) => {
//        return element *= element
//     });
//     console.log(a)
//     return a
// }
// // s = fp(2,5);
// let p = ss(s,parrot)
// console.log(s)
// // let [a,b] = [3,4]


// console.log("aa")
// setTimeout(()=>console.log("hello"),100)
// console.log("bb")

 


// catch 
// promise


// moveSiva("right","10",function(){
//     return moveSiva("left","10",function(){
//         return true
//     } )
// })


// insta('/posts', ()=>{
//     if(error){
//         console.log("error")
//         throw Error;
//     }
//     return function insta('/posts/users', ()=>{
//         if(error){
//             console.log("error")
//             throw Error;
//         }

//     })
// })

// console.log("Hello Start")
// setTimeout(()=>{console.log("Hello setTImeout start")},1000)
// let promise = new Promise((resolve,reject)=>{
//     if(true)
//         resolve("I accept your promise")
//     else resolve("I accept your promise")

// })
// // promise.then((res)=>console.log(res))

// // setTimeout(()=>{console.log("Hello setTImeout Middle")},0)


// promise
// .then((d)=> d+"!")
// .then((r)=> d+"!!")
// .then((r)=>console.log(r))
// .catch((err)=>{console.log("Opps error"); return -1})
// .then((f)=>{ console.log(f)})
// .finally(()=>console.log("i am ending this promise"))

// async

// let p1 = new Promise((resolve,reject)=>
//     setTimeout(resolve,1000,"Hi I am p1")
// )
// let p2 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,"Hi I am p1")
// )
// let p3 = new Promise((resolve,reject)=>
//     setTimeout(reject,4000,"Hi I am p1")
// )

// Promise.all([p1,p2,p3]).then((result)=> console.log(result))
// // await 

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=> res.json())
// .then((data)=> console.log(data))


// let urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/albums"
// ]
// let data;
// // Promise.all(urls.map((url)=>
// //     fetch(url).then(result => result.json()).then((e)=> data = e))
// // )
// Promise.allSettled
// Promise.race()
// Promis
// let p = Promise.all(urls.map((url)=>
//     fetch(url))
// )
// p.then((result) => JSON.stringify(result)).then((res) => console.log(res))
// console.log(p)

// fetch from api's


// async function fetchPromise(){
//     let promise = new Promise((resolve,reject)=>{
//         if(true)
//             resolve("I accept your promise")
//         else resolve("I accept your promise")
//     })
//     let p = await promise;
//     console.log(p)
// }
// fetchPromise();
// let promise = new Promise((resolve,reject)=>{
//     if(true)
//         resolve("I accept your promise")
//     else resolve("I accept your promise")

// })



// let urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/albums"
// ]
// async function fetchPromises() {
//     try{
//         let [posts,comments,albums] =  await Promise.all(urls.map( async function (url){
//             let res = await fetch(url);
//             // console.log(res.json())
//             return res.json()
//         }))
//         console.log("posts",posts)
//         console.log("comments",comments)
//         console.log("albums",albums)
//     }
//     catch(error){
//         console.log("Error occcoured here ",error)
//     }
// }

// async function fetchPromises2(){
//     const arrayOfPromises  = urls.map((url)=> fetch(url))
//     for await(let req of arrayOfPromises){
//         const data = await req.json()
//         console.log(data)
//     }
// }




// let p1 = new Promise((resolve,reject)=>
//     setTimeout(resolve,1000,"Hi I am p1")
// )
// let p2 = new Promise((resolve,reject)=>
//     setTimeout(resolve,1000,"Hi I am p2")
// )
// let p3 = new Promise((resolve,reject)=>
//     setTimeout(resolve,4000,"Hi I am p3")
// )

// async function fetchPromises2(){
//     const arrayOfPromises  = [p1,p2,p3]
//     for await(let req of arrayOfPromises){
//         const data = await req
//         console.log(data)
//     }
// }

// fetchPromises2()


// function promisify(item,delay){ 
//     return new Promise((resolve,reject)=>
//     {
//             if(item == "Teja"){
//                 return setTimeout(()=>reject(item),delay)
//             }
//         else return setTimeout(()=>resolve(item),delay)

//     }
//     )
// }

// const a = ()=> promisify('adarsh',1000) // deduct the money  from the sender 

// const b = ()=> promisify('Siva',100) // // send the money  from the reciver  
// const c = ()=>  promisify('Teja',4000) // update the entries of their bank 


// async function parallel(){
//     const promises = [a(),b(),c()];
//     const [o1,o2,o3] = await Promise.all(promises)
//     console.log(` result of the parallel execution is ${o1}, ${o2}, ${o3}`)
// }


// async function Racing(){
//     const promises = [a(),b(),c()];
//     const o1 = await Promise.race(promises)
//     console.log(` result of the race condition is ${o1}`)
// }

// async function Sequence(){
//     const promises = [a(),b(),c()];
//     const o1 = await a();
//     const o2 = await b();
//     const o3 = await c();

//     console.log(` result of the sequence condition is ${o1}, ${o2}, ${o3}`)
// }
// Sequence() // user data -> user profile -> send a message 
// Racing()
// parallel()

// Promise.allSettled



// async function allSettledPromise(){
//     try{
//         const promises = [a(),b(),c()];
//         const [o1,o2,o3] = await Promise.allSettled(promises)
//         if(o1.value === 'adarsh'){
//             throw Error("I can't have this value for now");
//         }
//         console.log(o1)
//         console.log(o2)
//         console.log(o3)
//     }
//     catch(err){
//         console.log("Found an error",err)

//     }
    


// }
// allSettledPromise()


// let e = new Error("Message is secret, i can't share");
// console.log(e.message)
// console.log(e.name)
// console.log(e.stack)

// throw ReferenceError('')
// class AuthenticationError extends Error{
//     constructor(msg,group,info){
//         super(msg)
//         // this.message = msg
//         this.group = group
//         this.info = info
//     }
// }
// let ae = new AuthenticationError('I am a Authentication Error',["siva","Adarsha","Teja","pooja"],
//     "Whenever You find some Authentication Error related problem")

// console.log(ae)




// Regx 

// let text = " I am hare I am B HI";
// let pattern = /a+/i;
// let result = text.match(pattern);

// console.log(result)


// let text2 = "Hello world!";

// // look for "Hello"
// let result1 = /Hello/.exec(text2);

// // look for "W3Schools"
// let result2 = /W3Schools/.exec(text2);

// console.log(result1)


// let text3 = "Mr.Blue has a blue house";
// let position = text3.search(/e\b/);

// console.log(position)


// match() []
// search() indexno or -1

// pattern.exec() []
// test() -> true false 

// const text = "SDJHSJ#^&#$aie"
// const pattern = /b*/;
// const myArray =text.match(pattern);

// let text = "1, 100 or 1000 43 3400 3440 200?"; 
// let pattern = /10*/g;
// let result = text.match(pattern);

// let pattern1 = /10*/g;
// let result2 = pattern1.exec(text)

// // let result = pattern.test(text);
// console.log(result)
// console.log(result2)

// #78@saving_ryan$

// right email and will password regulation 0-9 1sp, 16 character 
// let s="listen"
// let str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
// console.log(str)


// fetch('https://jsonplaceholder.typicode.com/posts',{})
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// // const url = 'https://api.tomorrow.io/v4/weather/forecast?location=Bangalore&timesteps=1d&apikey=H61vqaWSocSafnAPtlUNgudEorDPGenL';
// // const options = {method: 'GET', headers: {accept: 'application/json',}};

// fetch(url,option)

