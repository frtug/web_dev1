
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
let students = [
    {
        name:"Siva",
        age:23,
        dob:"07/08/2003",
        isMature:true,
        marks:[12,34,3],
        friends:{
            friend1 : "Adarsha",
            friend2: "Teja" 
        } 
    },
    {
        name:"Adarsha",
        age:23,
        dob:"06/08/2002",
        isMature:true,
        marks:[33,11,15] , 
        friends:{
            friend1 : "Siva",
            friend2: "Teja" 
        }    
    }
]

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


console.log(Math.round(Math.random()*255))
