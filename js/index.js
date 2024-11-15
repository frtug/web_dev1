
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


let arr = [];
console.log(arr)



let students = ["Adarsha","siva","teja","pooja"];
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

let row = 3;
let col=2;

// let stu_2d = Array.from({length:row},()=>Array(col).fill(null));
let stu_2d = [];

for(let i=0;i<row;i++){
    stu_2d[i] = [];
    for(let j=0;j<col;j++){
        stu_2d[i][j] = null;
    }
}

// stu_2d[0] = [];
// stu_2d[1] = [];

// stu_2d[0][0] = 1 
// stu_2d[1][0] = 1 



// console.log(stu_2d[0])

for(let i=0;i<stu_2d.length;i++){
    // console.log(stu_2d[i])
    for(let j=0;j<stu_2d[i].length;j++){
        console.log(stu_2d[i][j])
    }
}




