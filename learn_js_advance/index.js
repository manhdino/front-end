/**JS Advance
   strict mode
   1.Hositing:
      + Khi khai báo 1 function nhưng câu lệnh gọi hàm để chạy thì
      mình khai báo ở trên phần khai báo hàm thì hàm có chạy hay không?
       --> Kết quả là vẫn chạy bình thường
      + Do function kia chỉ là "KHAI BÁO", do cơ chế của JS khi chạy nếu nó thấy
      có "KHAI BÁO" thì sẽ tự động đẩy hết lên đầu
      + còn đối với biến thì chỉ đúng khi áp dụng với var còn let thì là phiên
      bản mới hơn của var nên chặt chẽ hơn và sẽ sinh ra luôn lỗi
  2.Scope:Phạm vi hoạt động của biến
     + Hãy coi cả 1 file .js chính là 1 hàm
     + let,const: giống nhau
     + var vs let:
         + let: hoạt động trong {}
         + var: hoạt động trong 1 function
  3.Nested function: function được khai báo  trong 1 function khác,giống như biến
  không thể gọi nested function không thể gọi bên ngoài function bọc nested function 
  4.Closure: bao đóng cho private biến
  5.Context:ngữ cảnh
     + this: thay đổi dựa trên ngữ cảnh, môi trường, nơi mà nó được gọi...
  6.Arrow function: 
  7.Prototype:
     +  Object Prototype: Nguyên mẫu tạo ra 1 đối tượng
     + 

  8.Class: phát triển dựa trên prototype
  9.OOP:
    + Tính kế thừa:
        + 
 */
/*Hositing:

sum(1,4); //5
function sum(a,b){
    console.log("Sum 2 số là",a + b);
}

console.log(x);
var x;//undefined
var x = 9;//undefined vì JS chỉ đưa phần khai báo var x lên đầu thôi chứ ko thực hiện phép gán x = 9
let x; //error vì JS phiên bản đời đầu là sử dụng var thôi
let sinh ra để chặt chẽ hơn var(phải khai báo trước thì mới được sử dụng)
Chốt: Nên sử dụng let cho an toàn
Cần phân biệt:
f1();//Error vì đưa lên trước là biến f1 chứ ko phải function f1()
f2();//OK 
function f2() { };//Khai báo function f2()
var f1 = function (){};//gán function vào 1 biến
*/
/*Scope

var number1 = 9;//Phạm vi là toàn bộ file//global scope

function demo(){
    //local 
    // var number2 = 10;
    // let number3 = 11;
   // console.log(number1);

    if(true){
        var number2 = 10;
        let number3 = 11;
    }
    console.log(number2);
    console.log(number3);
}
console.log(number2);//error do phạm vi chỉ trong function
console.log(number3);//error do phạm vi chỉ trong function
console.log(number1);//9

demo();//10 sau đó là lỗi number3 is not defined
Giải thích vì:
  + let: hoạt động trong {} block
  + var: hoạt động trong 1 function
 do var hoạt động trong 1 function gần nhất nên sau khi hositing thì nó sẽ lên khai
báo đầu tiên còn let ko sử dụng hoisting nên sẽ xảy ra lỗi
let chỉ hoạt động trong {} VD: for(){...}
function scop -> var: hoisting
block scope -> let

*/
/*Closure
function createPlannet(){
    var human = 0;//chỉ hoạt động trong hàm createPlannet
    return function(){
       human++;
       console.log('human trong returned function createPlannet', human);
    }
}

var earth = createPlannet();//human = 0; trong function return 
earth();//human = 1;
earth();//human = 2;

var mat_trang = createPlannet();
mat_trang();//1

//Ứng dụng của Closure

function student(){
    var money = 0;
    return {
        getMoney: function(){ return money; },
        setMoney: function(soTienTangThem){
            soTienTangThem = soTienTangThem < 0 ? 0 : soTienTangThem;
            money += soTienTangThem;
        }
    }
}

var st = student(); //st sẽ là 1 object gồm 2 hàm getMoney function và setMoney function
//var tien = st.money;//error không thể truy xuất được giá trị money
//Nghĩa là giá trị money bị bao đóng private(Closure)
//Trừ khi trong hàm getMoney{return money}
st.setMoney(100);
var tien = st.getMoney();
console.log(tien);//100
*/
/* Context

console.log(this);//{} do toàn bộ file .js là 1 object, this ở đây sẽ là file.js

function logThis(){
    console.log(this);
}
logThis();

var person = {
    name:'John',
    logThis: function(){
        console.log(this);
    }
}

person.logThis();//chính là object person

Thay đổi giá trị của this bằng cách sử dụng bind,call,apply

function demo(){
    console.log(this);
}
var demo2 = {
    name:'Demo',
    logThis: demo
}
demo();//Global this
demo2.logThis(); //person
*/
/*Bind Call Apply
bind: chế tạo ra 1 hàm khác để sau này sử dụng
function demo(name) {
    console.log(this.myObj + name);
}

// var hamDaDuocBind = demo.bind({myObj: 'My name is '},'Dinomanh');//Tham số đầu sẽ gán vào this,tham số 2
//sẽ làm tham số của demon function - kết quả là My name is Dinomanh
// hamDaDuocBind();

//call sẽ ko tạo ra hàm nữa giống bind mà thực thi luôn
//demo.call({myObj: 'My name is '},'Dinomanh');

//apply: 
function demoApply(name1,name2,name3,name4){//name1 là object, name2 là mảng
  console.log(this.number + ': ' + name1 + ' ' +  name2 + ' ' + name3 + ' ' + name4);
}
demoApply.apply({number:4},["Dinomanh","Dinomanh2","Dinomanh3","Dinomanh4"]);

//apply là cách cổ xưa để rải từng phần tử vào trong 1 hàm
var diemSo = [1,2,3,5,6,7];
var max = Math.max.apply(null, diemSo);
console.log(max);
//VD: chúng ta muốn tạo ra 1 sự kiện mà khi nhấn vào 1 nút nhấn thì 
//màn hình chuyển sang đỏ
function thayDoiMauWindows(){
    this.classList.add('red');//this lúc này sẽ là windows vì nó là tham
    //số đầu tiên của hàm bind, sử dụng bind vì mình ko muốn màn hình đổi
    //màu luôn mà phải khi nhấn thì mới đổi màu 
}
button.addEventListener('click',thayDoiMauWindows.bind(window));
//nhưng nếu như dưới thì chỉ thay đổi màu cho button thôi
//vì this lúc này chính là button
button.addEventListener('click',thayDoiMauWindows);
*/
/*Sự khác nhau giữa function bình thường và arrow function
var f1 = () =>{//không có this, this bị fix cứng
    //khai báo arrow function ở đâu thì this được xác nhận ngay lúc ấy
   console.log(this)
}

function f2(){//gọi ở đâu thì this chính là cái đấy
   console.log(this)
}

var person = {
    name: 'John',
    f1:f1,
    f2:f2,
}
person.f1();//in ra person
person.f2();//ko in ra person là {} thì khi khai báo ở đâu thì this ở đấy
//tức là this trong function f2
*/

// var today = new Date();
// console.log(today);

//Create a new object,object literal
// var mouse = {
//     weight: 0.2,
//     getWeight: function(){
//         return this.weight;
//     }
// };
// console.log(mouse.getWeight());//0.2

// //constructor function: giúp khởi tạo đối tượng 1 cách dễ dàng hơn so với object literals
// function Mouse(color){
//     this.type = 'mouse';
//     this.weight = 0.2;
//     this.color = color;
// }
// var mouse1 = new Mouse('White');//tạo object từ constructor function
// var mouse2 = new Mouse('Brown');

// console.log(mouse1);//mouse1 có kiểu là Mouse
// console.log(mouse2)


var tom = {
    name: 'Tom',
    stomach:[],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
}

function Mouse(mouse){
    this.name = mouse;
}
tom.eat(new Mouse('m1')).eat(new Mouse('m2')).eat(new Mouse('m3'));
console.log("Tom:");
console.log(tom);

/* Prototype
function Person(){
    this.name = "";
    this.age = 0;
}

Person.prototype.worked = function(){
    console.log("Worked in HN");
};

var dinomanh = new Person();
dinomanh.worked();
console.log(Person.__proto__ == Function.prototype);//true
console.log(Function.prototype.__proto__ == Object.prototype);//true

*/
//constructor function
function User(firstName, lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    };
}

//thêm thuộc tính từ bên ngoài constructor:
User.prototype.className = "F8";

//thêm phương thức từ bên ngoài constructor
User.prototype.getClassName = function(){
    return this.className;
}

var user1 = new User('Son', 'Dang','Avatar 1');
var user2 = new User('Manh', 'Dino','Avatar 2');

console.log(user1);
console.log(user2.className);
console.log(user1.getClassName());


/*Class và OOP*/


// class Person {
//     constructor(a,b){//Khi sd class thì ko cần phải quan tâm đến prototype nữa
//         this.name = a;
//         this.age = b;
//     }
// }

// Là constructor giống như trong class
// function Person(){
//     this.name = "John";
//     this.age = 18;
// }

// var per1 = new Person("Nodemy",4);
// console.log(per1);

// //Inherit:
// class Student extends Person{
//     constructor(lop,name,age){
//         super(name,age);//kế thừa constructor từ constructor của class cha
//         this.lopHoc = lop;
//     }
// }

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

/* Phân tích:
  + Object tạo bởi Rabbit có thể đồng thời sử dụng phương thức trong Rabbit
   là rabbit.hide() và phương thức trong Animal là rabbit.run().
  + Về bản chất, từ khóa extends sử dụng cơ chế kế thừa prototype thông qua
   việc gán Rabbit.prototype.[[Prototype]] bằng Animal.prototype.
    Nghĩa là nếu một phương thức không được tìm thấy trong Rabbit.animal 
    thì JavaScript sẽ tự động tìm kiếm trong Animal.prototyp
  + Ví dụ để tìm phương thức rabbit.run, JavaScript engine sẽ thực hiện tìm kiếm như sau:
     + Tìm trong đối tượng rabbit - không có run.
     + Tìm trong prototype của rabbit, đó là Rabbit.prototype - cũng không có run.
     + Tìm trong prototype của Rabbit.prototype, đó là Animal.prototype - có phương thức run.
 */