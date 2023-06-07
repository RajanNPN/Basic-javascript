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

// DOM 
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

// dom manipulation


// document :- it provide access to dom
// method :- it help to provide access to element 


// const text = document.getElementById("hello1");
// const text1 = document.getElementsByClassName("class1");
// const mayor = document.getElementsByTagName("span");
// const btn = document.querySelectorAll("button");
// const clickBtn = document.querySelector("#click");
// clickBtn.onClick = ShowWhenClick;

// // console.log(clickBtn.getAttribute("id"));
// // clickBtn.setAttribute("class","meroClass");

// function ShowWhenClick(){
    
//  const h1 = document.createElement("h1");
//  h1.innerHTML = "Nepal has adopted non-allignance foreign policy";
//  //append print the text in last line but prepend print the text in first line.
//  document.body.append(h1);
// }

// function deleteOnes(){
//     const h1 = document.querySelector("h1");
//     h1.remove();
// }
//  clickBtn.onclick = ShowWhenClick;
//  btn[1].onclick = deleteOnes;

// clickBtn.style.backgroundColor = "red";
// clickBtn.style.color = "black";
// clickBtn.style.border ="none";
// clickBtn.style.cursor ="pointer";
// clickBtn.style.padding ="10px";
// clickBtn.style.margin ="5px";

 
// btn[1].style.backgroundColor = "green";
// btn[1].style.color = "red";
// btn[1].style.border ="none";
// btn[1].style.cursor ="pointer";
// btn[1].style.padding ="10px";
// btn[1].style.margin ="5px";



// mayor[0].innerHTML = "harka rai";
// mayor[1].innerHTML = "balen shah";


// text1.innerHTMl = "i am good what about you?";
// text1.style.background = "green";
// text1.style.color ="white";



// text.innerHTMl ="<h1>how is your day</h1>";
// text.style.background = "blue";
// text.style.color ="red";


//Advance arrary method 


     //fat arrary function
// const arr = [1,2,3,4,5,6,7,8,9];
// const myFunc=(value,index)=>{
//  if(value===6){
//     console.log("6 exist!");
//  }

//  };
// arr.find(myFunc);



// const arr = [1,2,3,4,5,6,7,8,9];
// arr.find((value,index)=>{
//      if(value===6){
//         console.log("6 exist!");
//       }
//       });



//find
// const arr = [1,2,3,4,5,6,7,8,9];
// arr.find((value,index)=>console.log(value,index));



// const arr = [1,2,3,4,5,6,7,8,9];
// const newArr = arr.find((value,index)=>value >5); // find :- it print only one number after five 
// console.log(newArr);


// const arr = [1,2,3,4,5,6,7,8,9];
// const newArr = arr.filter((value,index)=> value >5); // filter :- it filter all the number greater than 5
// console.log(newArr);


// const arr = [1,2,3,4,5,6,7,8,9];
// const newArr = arr.sort((a,b)=> a-b); // sort :- it the value small to high 
// console.log(newArr);


// const SubArr = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
// ];
// const newArr = SubArr.flat(); //flat:- it combine all the array to one 
// console.log(newArr);


//some
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.some((value,index)=> value > 6); // some :- it result true if 6 is exist (boollen value)
// console.log(result);

//every
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.every((value,index)=> value > 6); // every :- it 
// console.log(result);

//forEach :-it doesnot return new array (it doesnot display the updated value of array)
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.forEach((value,index)=> (value += 5));
// console.log(result);
// console.log(arr);

//map :- it update the value (after adding 5 it return new array)
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.map((value,index)=> (value += 5));
// console.log(result);
// console.log(arr);


//reduce
// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.reduce(
//    (prevValue,currentValue)=> prevValue+currentValue);
// console.log(result);




//onclick
// const dance = document.getElementsByClassName("p2");

// dance[0].innerHTML = "CAN YOU PLEASE!";

// dance[0].style.backgroundColor ="black";
// dance[0].style.color = "white";
// dance[0].style.padding = "20px";

// console.log(dance);


//  dance[0].onclick = Showme;
//  function Showme(){
//     const h1 = document.createElement("h1");
// h1.innerHTML = "play lazzy song";
// document.body.prepend(h1);
//  }
//  function deleteOnes(){
// const h5 = document.querySelector("h1");
// h5.remove();
//  }
//  dance[1].onclick = deleteOnes;


//Add event listener
// const header = document.querySelector("#header");
// const box = document.querySelector("#box");
// const btn = document.querySelector("#listen");
// const Input = document.querySelector("input");
// Input.addEventListener("change",(e)=>{
//      console.log(event.target.value);
// });

// btn.classList.add("classForDiv");

// //add.eventlistener :- takes event and function
// btn.addEventListener("click",()=>{
//      // console.log("Clicked!");
//      header.innerHTML ="pranchanda la india bata baishi layrw aayo!"
//      Box.classList.add("classForBox");
// });

// btn.addEventListener("contextmenu",(e)=>{
//      e.preventDefault();
//      btn.style.backgroundColor="purple";
// });

// box.addEventListener("mouseover",()=>{
//      header.style.backgroundColor="orange";
//      header.style.Color="white";
//      btn.style.transform="scale(1.3)";
// });
// box.addEventListener("mouseout",()=>{
//      header.style.backgroundColor="";
//      header.style.Color="";
//      btn.style.transform="";
//      // btn.style.filter="";
// });

// // window.addEventListener("contextmenu",(e)=>{
// //      e.preventDefault();
// //      btn.style.filter="blur(10px)";
// // });
// box.addEventListener("dblclick",()=>{
//      document.body.style.backgroundColor="black";
// });
// box.addEventListener("click",()=>{
//      document.body.style.backgroundColor="#fff";
// });

//Math Object
// to generate a OTP code
// const result =Math.round(4.5);
// document.write(result);
// console.log(result);

// const result =Math.floor(4.5); //it return the floor value
// document.write(result);
// console.log(result);


// const result = Math.ceil(4.5);//it return celling(greater value like 4.1 it return 5) value
// document.write(result);
// console.log(result);

// const result =Math.trunc(4.5); // it remove and display first  digit (without decimal)
// document.write(result);
// console.log(result);

// const result =Math.pow(4,2); // it display the sq.of digit
// document.write(result);
// console.log(result);



// const result =Math.sqrt(16);
// document.write(result);
// console.log(result);


// const result =Math.random(); // it generate random number
// document.write(result);
// console.log(result);


// const result =Math.sin((90*Math.PI)/180);
// document.write(result);
// console.log(result);



// const result =Math.tan((45*Math.PI)/180);
// document.write(result);
// console.log(result);
// alert(result); // it display the result by sending msg like alert


// const result =Math.log2(8); // it display result that 3 because three two are need to make 8
// document.write(result);
// console.log(result);

// const result = new Date();
// document.write(result.toISOString());
// console.log(result.toISOString());

// const result = new Date();
// document.write(result.getDay());
// console.log(result.getDay());


// const result = new Date();
// document.write(result.getDate());
// console.log(result.getDate());

// const result = new Date();
// document.write(result.getFullYear());
// console.log(result.getFullYear());   


// const Input = document.querySelector("input");
// const AddBtn = document.querySelector("#add");
// const BtnLogout = document.querySelector("#clear");


// const AddWebStorage = ()=>{
//      sessionStorage.setItem("key",Input.value);

// };
// AddBtn.addEventListener("click",AddWebStorage);
// BtnLogout.addEventListener("click",()=>{
//      sessionStorage.clear();
// });

// if(sessionStorage.getItem("key")){
//      alert(sessionStorage.getItem("key"));
// }

// AddBtn.addEventListener("click",AddWebStorage);
// alert(sessionStorage.getItem("key"));


// const Input = document.querySelector("input");
// const AddBtn = document.querySelector("#add");
// const BtnLogout = document.querySelector("#clear");


// const AddWebStorage = ()=>{
//      localStorage.setItem("key",Input.value);

// };
// AddBtn.addEventListener("click",AddWebStorage);
// BtnLogout.addEventListener("click",()=>{
//      localStorage.clear();
// });

// if(localStorage.getItem("key")){
//      alert(localStorage.getItem("key"));
// }



// const Input = document.querySelector("input");
// const AddBtn = document.querySelector("#add");
// const BtnLogout = document.querySelector("#clear");


// const AddWebStorage = ()=>{
//      localStorage.setItem("key",
//      JSON.stringify({
//           name:"rajan",
//           age:21,
//           gender:"male",
//           isMarried: false,

//      })
        
//      );

// };
// AddBtn.addEventListener("click",AddWebStorage);
// BtnLogout.addEventListener("click",()=>{
//      localStorage.clear();
// });

// if(localStorage.getItem("key")){
//      // alert(localStorage.getItem("key"));
//      console.log(JSON.parse(localStorage.getItem("key")));
// }