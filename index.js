// type conversion

// const x = 90;
// console.log(x)
// console.log(typeof x)
// console.log(typeof String(x));


// const x = "hello world";
// console.log(x)
// console.log(typeof x)
// console.log(typeof Number(x));


//string methods
// let result="hello world";
// console.log()

//switch 

// let day= new Date().getDay();
// switch(day){
//     case 0:
//     console.log("today is a sunday");
//     break;
//     case 1:
//     console.log("today is a monday");
//     break;
//     case 2:
//     console.log("today is a tuesday");
//     break;
//     case 3:
//     console.log("today is a wenesday");
//     break;
//     case 4:
//     console.log("today is a thusday");
//     break;
//     case 5:
//     console.log("today is a friday");
//     break;
//     case 6:
//     console.log("today is a saturday");
//     break;
//     default:
//     console.log("invalid day");
//     break;       
// }


// let month = 'june';

// switch(month){
//     case"january":
//     case"feb":
//     case"march":
//     console.log("this month is in q1");
//     break;


//     case"april":
//     case"may":
//     case"june":
//     console.log("this month is in q2");
//     break;


//     case"luly ":
//     case"august":
//     case"sept":
//     console.log("this month is in q3");
//     break;
     
//     case"opt":
//     case"nov":
//     case"dec":
//     console.log("this month is in q4");
//     break;
//     default:
//         console.log("new year");
//         break;
// }




// let grade = 'a';
// switch(grade){
//     case"p":
//     case"q":
//     case"r":
//     console.log("good");
//     break;

//     case"a":
//     case"b":
//     case"c":
//     console.log("excellent");
//     break;
     
//     default:
//         console.log("you are failed bro")
//         break;
// }


// for loop


// for(i=0;i<10;i++){
//     console.log(Math.random());
// }

// for(i=0;i<=10;i++){
//     console.log("ïteration:",i)
// }



//  for(i=0;i<10;i++){
//     if(i%2===0){
//         console.log("even number",i)
//     }
// }


// let inputValue = prompt("enter your number!");
// let number = Number(inputValue);

// if(isNaN(number)){
//     alert("enter valid number");
// }
// else{
//     document.write("odd numbers are:");

//     for(let i=0;i<=10;i++){
//         if(i % 2 !==0){
//             document.write("<br>",i)

//         }
//     }
// }


//while loop

// let i = 0;
// while(i<=10){
//     console.log("iteration",i);
//     i++;
// }


//do while loop

//  let i = 10;
//  do{
// console.log("hello world");
// i++;
//  }
//  while(i<10);



//array

// const arr= [4,5,6,"shyam",7,8];

// console.log(arr[3]);

// const arr =[];
// arr[0]=90;
// arr[1] = 100;
// console.log(arr);



//  const arr = [1,2,3,4,5,6,7,8,9,0];

// console.log(arr.length);


//push
// arr.push(90);
// console.log(arr);

//pop
// arr.pop()
// console.log(arr);

//unshift
// arr.unshift(55);
// console.log(arr);


//shift
// arr.shift();
// console.log(arr);

//inslude la xa vanay boolen value provide garxa natra gardaina 
// const result = arr.includes(3);
// console.log(arr);
// console.log(result);


//splice method 2 is starting and 5 is length 5 ota del gardina 
// const result = arr.splice(2,5);
// console.log(arr);
// console.log(result);

//slice method la 1 ra 4 samma ko digit print garxa including 4
// const result = arr.slice(1,4);
// console.log(arr);
// console.log(result);

// const obj = {
//     name : "lila",
//     age : 20,
//     country : "nepal",
// };
// // console.log(obj);

// console.log(obj.name);


// const arr = new Array(1,2,3,4);
// console.log(arr);


// const arr = [];
// for(let i = 0;i<10;i++){
//     arr.push(i);// yo push la increment ko kam garxa i++
// }
// console.log(arr);

// = assign operater
// : use for property

// object
// const car = {
//     name : "toyota",
//     model : "camry",
//     color : "red",
//     runWheel : 4,
//     isElectric : false,

//     startEngine : function()
//     {
//         console.log("start engine!");
//         return true;
//     },
//     closeEngine : function(){
//         console.lolg("close engine!");
//         return false;
//     }
// };


// console.log(car);
// if(car.startEngine()){
//     console.log("your car is ready to start");
// }else
// {
//     console.log("your car is not start")
// }




// function myFunc(){
//     let x = 89;
//     let y = 90;
//     let ans = x+y;
//     console.log(ans);
// }
// myFunc();


// function myFunc(a,b){
//     return a+b;

// }
// const result = myFunc(6,7);
// console.log(result);


// function myFunc(a,b,c=90){
//     console.log(c);
//     return a+b+c;
// }
// const result = myFunc(4,5);
// console.log(result);


// function sumArr(arr=[]){
//     let total = 0;
//     for(let i = 0;i<arr.length;i++){
//         // total = total+arr[i]
//         console.log(arr[i])
//         total += arr[i]
//     }
//     return total;
// }
// const ans = sumArr(4,7,5,9,3,5,6)
// console.log(ans);


// scoping


// let x = 90;  //gobally scope
// console.log(x);


// let and cons isnot use outside the block scope
// block is under the curly bracket
//only var can use inside the bracket(block) and outside 
//block scope is let and cons
// var is function scope


// let x = 90;
// {
//     let y = 9+9;
//     console.log(x);
//     console.log(y);
// }



// var x = 90;
// function myVar(){
//     if(true){
//         var x = 9+9;
//     }
//     console.log(x);
// }
// console.log(x);
// myVar();


// function myLet(){
//     if(true){
//         let x = 8+8;
//         console.log(x);
// }
//     }
    
// myLet();

//DOM 
// const header = document.getElementById("fees");
// console.log(header);
// header.innerHTML = "haina k ho yesto!";
// header.style.background = "red";
// header.style.color = "white";

// const func = document.getElementById("honey");
// func.style.color = "blue";
// func.style.background = "grey";
// console.log(func);


// const real = document.getElementsByClassName("grey");
// real[0].innerHTML = "Bina dhewake free visa mili";

// function myFunc(a,b){
//     return a*b;
// }
// const ans = myFunc(5,6);
// console.log(ans);

// console.log(document.body);

//dom manipulation


//document :- it provide access to dom
//method :- it help to provide access to element 


const text = document.getElementById("hello1");
// const text1 = document.getElementByClassName("class1");
const mayor = document.getElementsByTagName("span");
const btn = document.querySelectorAll("button");
const clickBtn = document.querySelector("#click");
clickBtn.onClick = ShowWhenClick;

// console.log(clickBtn.getAttribute("id"));
// clickBtn.setAttribute("class","meroClass");

function ShowWhenClick(){
    
 const h1 = document.createElement("h1");
 h1.innerHTML = "Nepal has adopted non-allignance foreign policy";
 //append print the text in last line but prepend print the text in first line.
 document.body.append(h1);
}

function deleteOnes(){
    const h1 = document.querySelector("h1");
    h1.remove();
}
 clickBtn.onclick = ShowWhenClick;
 btn[1].onclick = deleteOnes;

clickBtn.style.backgroundColor = "red";
clickBtn.style.color = "black";
clickBtn.style.border ="none";
clickBtn.style.cursor ="pointer";
clickBtn.style.padding ="10px";
clickBtn.style.margin ="5px";

 
btn[1].style.backgroundColor = "green";
btn[1].style.color = "red";
btn[1].style.border ="none";
btn[1].style.cursor ="pointer";
btn[1].style.padding ="10px";
btn[1].style.margin ="5px";



mayor[0].innerHTML = "harka rai";
mayor[1].innerHTML = "balen shah";


text1[0].innerHTMl = "<h2>i am good what about you</h2>";
text1[0].style.backgroundcolor = "green";
text1[0].style.color ="white";



text.innerHTMl ="<h1>how is your day</h1>";
text.style.backgroundcolor = "blue";
text.style.color ="red";


