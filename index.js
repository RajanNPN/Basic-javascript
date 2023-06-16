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

//OOP(object oriented programming)
//  function Person(name,age){
//      this.name = name ;
//      this.age = age;

//      this.greet = function(){
//           console.log('hello everyone my name is:${this.name}.and my age is {this.age}');
//      };
//  }
//  const person1 = new Person("Ram",23);
//  const person2 = new Person("shyam",24);
//  const person3 = new Person("hari",25);

//  console.log(person1,person2,person3);

//  person1.greet();

// function BankAccount(customerName,balance=0){
//      this.customerName = this.customerName;
//      this.accountNumber = Date.now();
//      this.balance = balance;

//      this.deposit = function(amount){
//           this.balance += amount;
//      };
//      this.withdraw = function(amount){
//           this.balance -= amount;
//      };
// }
// const ramAccount = new BankAccount("Ram",5000);
// const shyamAccount = new BankAccount("Shyam",6000);
// shyamAccount.deposit(3000);
// shyamAccount.withdraw(2000);

// console.log(ramAccount,shyamAccount);

//  function BankAccount(customerName,balance=0){
//       this.customerName = customerName;
//       this.accountNumber = Date.now();
//      this.balance = balance;

//      this.deposit = function(amount){
//           this.balance +=amount
//      }

//      this.withdraw = function(amount){
//           this.balance -= amount
//      }
// }

// const addFForm = document.querySelector("#addAccount");
// const customerName = document.querySelector("#customerName");
// const balance = document.querySelector("#balance");

// const depositform = document.querySelector("#depositAccount");
// const accountNumber = document.querySelector("#accountNumber");
// const amount = document.querySelector("#amount");

// let accounts=[];
// addFForm.addEventListener("submit",(e)=>{
//      e.preventDefault()

//      const newAccount = new BankAccount(customerName.value, +balance.value)
//      accounts.push(newAccount);
//      console.log(accounts);
// });

// depositform.addEventListener("submit",(e)=>{
//      e.preventDefault();
//      const account = accounts.find((value,index)=>value.accountNumber === +accountNumber.value )

//      if(!account) return alert("account not found!")
//      account.deposit(+amount.value)

//      console.log(accounts)

// });

//  function BankAccount(customerName,balance=0){
//      this.customerName = customerName;
//      this.accountNumber = Date.now();
//      this.balance = balance;

//      // this.deposit = function(amount){
//      //      this.balance += amount
//      // };
//      // this.withdraw = function(amount){
//      //      this.balance -= amount
//      // };
//      BankAccount.prototype.deposit = function(amount){
//           this.balance += amount
//      };

//      BankAccount.prototype.withdraw = function(amount){
//           this.balance -= amount
//      };

//  }

// //  console.log(BankAccount.prototype);

//  const ramAccount = new BankAccount("Ram",4000);
//  const shyamAccount = new BankAccount("shyam",3000);
//  shyamAccount.deposit(3000);
//  console.log(ramAccount);
//  console.log(shyamAccount);

//class
// class BankAccount{
//      constructor(customerName,balance = 0){
//           this.customerName  = customerName;
//           this.accountNumber = Date.now();
//           this.balance = balance;
//      }
//      deposit(amount){
//           this.balance += amount;
//      }
//      withdraw(amount){
//           this.balance -= amount;
//      }
// }

// const ramAccount = new BankAccount("ram",4000);
// const sitaAccount = new BankAccount("sita",2000);

// sitaAccount.deposit(3000);

// console.log(ramAccount);
// console.log(sitaAccount);

// class BankAccount{
//      constructor(customerName,balance = 0){
//           this.customerName  = customerName;
//           this.accountNumber = Date.now();
//           this.balance = balance;
//      }
//      deposit(amount){
//           this.balance += amount;
//      }
//      withdraw(amount){
//           this.balance -= amount;
//      }
// }

// class SavingAccount extend BankAccounts{
//      constructor(customerName,balance= 0){
//           super(customerName,balance);
//      }
//      transactionLimit = 50000;

//      takePersonalLoan(amount){
//           console.log(`Taking personal loan is : ${amount}`);

//      }
// }

// const ramAccount = new SavingAccount("ram",4000);
// const sitaAccount = new SavingAccount("sita",2000);
// ramAccount.deposit(4000);
// ramAccount.takePersonalLoan(4000);

// console.log(ramAccount);
// console.log(sitaAccount);

// class BankAccount{
//      constructor(customerName,balance = 0){
//           this.customerName = customerName;
//           this.accountNumber = new Date();
//           this.balance = balance;
//      }
//      deposit(amount){
//           this.balance += amount;
//      }
//      withdraw(amount){
//           this.balance -= amount;

//      }
// }

//  class CurrentAccount extends BankAccount{
//      constructor(customerName,balance = 0){
//           super(customerName,balance);
//      }
//      transactionLimit = 100000;

//      takePersonalLoan(amount){
//           console.log('Loan:{amount}');
//      }
//  }

//  const ramAccount = new CurrentAccount("ram",4000);
// const sitaAccount = new CurrentAccount("sita",2000);
// ramAccount.deposit(4000);
// ramAccount.takePersonalLoan(4000);

// console.log(ramAccount);
// console.log(sitaAccount);

// class BankAccount{
//      customerName;
//      accountNumber;
//      #balance  = 0;
//      constructor(customerName,balance = 0){
//           this.customerName = customerName;
//           this.accountNumber = Date.now();
//           this.#balance = balance;
//      }
//      deposit(amount){
//           this.#balance += amount;
//      }
//      withdraw(amount){
//           this.#balance -= amount;
//      }
//      setBalance(newbalance){
//          if(isNaN(newbalance)){
//           throw new Error("number must be valid!");
//          }
//          this.#balance = newbalance;
//      }
//      getBalance(){
//           return this.#balance
//      }

// }

// class CurrentAccount extends BankAccount{
//      transitionLimmit = 50000;
//      constructor(customerName,balance = 0){
//           super(customerName,balance);
//      }

//      #calculateInterest(amount){
//           console.log(`calculating amount interest is :${amount}`);

//           const interest = amount *0.05;
//           console.log(`Calculated interest is : ${interest}`)
//      }

//      takeBusinessLoan(amount){
//           this.#calculateInterest(amount);
//           console.log(`Taking Business loan is : ${amount}`);
//      }
// }

// const ramAccount = new CurrentAccount("Ram",5000);
// // ramAccount.balance = 5500;
// // ramAccount.setBalance("Keshab")
// // console.log(ramAccount.getBalance());
// ramAccount.takeBusinessLoan(40000);
// // ramAccount.calculateInterest();

// console.log(ramAccount);

// static property and method

// class Auth{
//      static dbEmail ="email@gamil.com";
//      static dbPassword = "password";
//      static dbToken = "uuyyyyyy"
// }

// console.log(Auth.dbEmail);

// class Person{
//      constructor(name,age){
//           this.name = name;
//           this.age = age;
//      }
//      static compareByAge(a,b){
//           return a.age - b.age;
//      }
// }

// const user1 = new Person("Ram",34);
// const user2 = new Person("Hari",44);
// const user3 = new Person("Sita",24);

// const users = [user1,user2,user3];
// // console.log(users,user2,user3);
// // console.log(users);
// // const result = users.sort((a,b)=> a.age - b.age);
// const result = users.sort(Person.compareByAge);
// console.log(result);

// class Person{
//      constructor(name,age,income){
//           this.name = name;
//           this.age = age;
//           this.income = income;
//      }
//      static compareByAge(a,b){
//           return a.age - b.age;
//      }
//      static compareByIncome(a,b){
//           return a.income - b.income;
//      }
//      static compareByFilter(value,index){
//           return value.income>10000;
//      }
// }

// const user1 = new Person("Ram",34,40000);
// const user2 = new Person("Hari",44,5000000);
// const user3 = new Person("Sita",24,10000);

// const users = [user1,user2,user3];
// // console.log(users,user2,user3);
// // console.log(users);
// // const result = users.sort((a,b)=> a.age - b.age);
// // const result = users.sort(Person.compareByIncome);
// const result = users.filter(Person.compareByFilter);

// console.log(result);

//next
// setTimeout(()=>{
// alert("hello world")
// },3000);
// console.log("first");
// console.log("second");
// console.log("third");

//next
// function add(a,b,callBack){
//      const result = a+b;
//      callBack(result);
// }

// function displaySum(ans){
//      console.log(`The sum of two number is : {ans}`);
// }
// // const ans = add(4,8);
// // console.log(ans); //call back function

// add(4,8,displaySum);

//next
// let myArr = [7,8,3,4,9,2,1];

// function calculation(arr=[],cb){
//      let ans = [];

//      for(let i = 0;i<arr.length;i++){
//           ans.push(cb(arr[i]));
//      }
//      console.log(ans);
// }

// // function multiply(a){
// //      return a*10;
// // }
// // function divide(a){
// //      return a/10;
// // }

// calculation(myArr,(a)=> a*10);
// calculation(myArr,(a)=> a/10);
// calculation(myArr,(a)=> a+10);
// calculation(myArr,(a)=> a-10);

//next
// let personList = [];

// const fetchedData = (callBack)=>{
//      setTimeout((callBack)=>{
//      personList.push(
//      {id:1,name:"ram",age:23},
//      {id:2,name:"shyam",age:20},
//      {id:2,name:"sita",age:30},
//      {id:2,name:"hari",age:40}
//      );
//      callBack();

//      console.log(personList);
// },4000,
// callBack
// );
// };
//      // console.log(personList);
//      // console.log(personList);

//      const displayName = ()=>{
//           setTimeout(()=>{
//                for(let i = 0; i<personList.length;i++){
//                     const p = document.createElement("p");
//                     p.innerHTML = personList[i].name;
//                     document.body.append(p);

//                }
//           },1000);
//      };
//      fetchedData(displayName);

//next

// const ans = new Promise((resolve,reject)=>{
// //     let success = false;
//     let success = true;

//     if(success) resolve("Promise fulfilled");
//     else reject("internal server error!");

// });
// ans
// .then((message)=>console.log(message))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("both"));

//next
// const arr = [];

// const fetchedData =()=>{
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                arr.push({name:"ram"});
//                if(arr.length >0)resolve("Data fetched!");
//                else resolve("some technical error");
//           },4000);
//      });
// }
// fetchedData(arr)
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(err));

//next

// const URL = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1")

// const fetchedData = ()=>{
//      fetch(URL)
//      .then((res)=>res.json())
//      .then((data)=> (h1.innerHTML = data.fact))
//      .catch((err)=> (console.log(err)));
// };

// fetchedData();

//next
//  const URL = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");

//  const fetchedData=async()=>{
//      try {
//           const res   = await fetch(URL);
//           const data =   await res.json();
//           h1.innerHTML = data.fact;
//      } catch (error) {
//           console.log(error);

//      }

//  };
//  fetchedData();

//next
// console.log(navigator);

// navigator.geolocation.getCurrentPosition((a => console.log(a.coards)));

// console.log(screen);

// console.log(history);

// console.log(location.protocol);
// console.log(location.port);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.href);
// console.log(location.search);

//normal function
//  const obj = {
//      name : "Ram",
//      printName : function(){
//           console.log(this.name);
//      }
// };

// arrow function
// const obj1 = {
//      name: "Ram",
//      printName:()=>{
//           console.log(this.name);
//      }
// };
// obj1.printName();

// in normal function you can acess the argument the but not in arrow function
// in normal function we can write new function but not in arrow function

//next
const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const form = document.querySelector("form");
const input = document.querySelector(".searchField");

let target = "kathmandu";
const fetchedData = async (target) => {
 try {
     const res = await fetch(
          (URL = `https://api.weatherapi.com/v1/current.json?key=e3df55e51fa84e8a8eb92138231406&q=${target}`)
        );
        const data = await res.json();
        console.log(data);
      
        const {
          current: {
            temp_c,
            condition: { icon, text },
          },
          location: { name, localtime },
        } = data; // concept of d structure.
      
        temperatureField.innerHTML = `${temp_c}&deg;c`;
        cityField.innerHTML = name;
        emojiField.src = icon;
        weatherField.innerHTML = text;
      
        const exactTime = localtime.split(" ")[1];
        const exactDate = localtime.split(" ")[0];
      
        const currentDate = new Date();
        const currentDay = getTodayDay(currentDate.getDay());
        dateField.innerText = `${exactTime} -${currentDay} ${exactDate}`;
 } catch (error) {
     alert("location not found");
 }
};
fetchedData(target);

form.addEventListener("submit",(e)=>{
   if(!input.value){
     alert("Field must be filled!");
   }else{
     target = input.Value;
   }
})

function getTodayDay(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Invalid";
  }
}
