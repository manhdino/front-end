
/** Lý thuyết JS: 
  1.Kiểu dữ liệu:
     + undefined: kiểu dữ liệu không được định nghĩa
         var a; a không được khai báo kiểu dữ liệu --> undefined
     + null: là giá trị nhưng mang ý nghĩa là rỗng
     + String: chuỗi, được để trong dấu "" or '' đều có ý nghĩa như nhau
       ->Sự khác nhau là: nếu muốn hiển thị dấu "" trong xâu thì phải bọc 
       bên ngoài dấu '' và ngược lại
       ->Hoặc có thể bọc dấu `` để hiển thị biến và cả 2 dấu trên
     + Number
     + Object: cấu trúc {key:value}, -> liên quan đến tính chất của đối tượng
     + Array:
     + Boolean: sd trong hàm if
     + *phân biệt var và let: ...
     + const: khai báo bằng số
     + NaN: Not a number
     + 5 == "5" ->true
     + 5 === "5" ->false
     + false : 0 "" NaN null undefined 
     + true: số khác 0, "0",...

   2.Toán tử:
     + Thứ tự ưu tiên toán tử:(+-/*%) >(++x)(=)>(x++) >(&|~^<<>>) > (><=>=)>(true,false)>(??)
     -> "+": phép cộng, ghép chuỗi-số + chuỗi ra chuỗi
     -> ++,--
     ->
     + Note: 
        + var x = 0.1 + 0.2 --> 0.30000000000004 
           --> lỗi này xảy ra là do phần mềm code và chỉ xảy ra với
           trường hợp cộng 2 số  < 1
           --> fixed : (0.1 * 10 + 0.2 * 10)/10: tức là hãy biến ngược lại thành
           số nguyên và thực hiện như bình thường
        + arr(for in hoặc for of đều ok) - object thì chỉ for in
        + Sử dụng khi người dùng nhập 1 giá bất kì vào và mình không biết giá trị
         đó là gì thì sẽ mặc định là 0
                      var x = null;
                      var res = x || 0;// đặt giá trị mặc định
                      console.log(res);//0
    3.Function(Hàm):
        + Khi đặt 2 function trùng tên thì function mới sẽ ghi đè các function cũ
        + Khi khai báo biến trong hàm, thì phạm vi của biến chỉ ở trong hàm
        + Function ko có return sẽ trả về undefined
        + Có thể khai báo hàm trong hàm 
        + Các loại function:
           + Declaration function
           + Expression function
           + Arrow function
    
    4.Array methods:
        + push(x): thêm 1 phần tử giá trị x vào cuối array
        + pop(): bỏ phần tử cuối của array và trả về phần tử cuối đó
        + shift(): tương tự pop nhưng với phần tử đầu
        + unshift(): chỉ lấy giá trị phần tử cuối nhưng ko xóa phần tử đó trong mảng
        + splice(x,y): xóa từ phần tử vị trí x -> y - 1
        + slice(x,y): lấy phần tử từ vị trí x --> y - 1
        + indexOf(x): lấy vị trí đầu tiên tại phần tử có giá trị là x
        + lastIndexOf(x):lấy vị trí cuối cùng tại phần tử có giá trị là x(trường hợp giá trị x bị trùng)
        + incldes(x): kiểm tra xem trong mảng có chứa phần tử có giá trị x hay không
        + reverse(): đảo ngược lại array
        + join("x"): nối mảng thành 1 xâu và mỗi phần tử liên kết với nhau qua
        kí tự "x"(x có thể là dấu cách or dấu *,...)
        + map(): sử dụng khi muốn biến đổi 1 mảng cũ thành 1 mảng mới và mảng cũ 
        không bị thay đổi giá trị
        + filter(): lọc để tạo ra mảng mới theo ý mong muốn
        + sort(): 
        + eval(): cộng các số trong 1 xâu

    5.String method://Regex
        + charAt
        + indexOf
        + lastIndexOf
        + startWith
        + endWith
        + Includes
        + Slice
        + Split
        + Replace
        + Uppercase 
        + Lowercase
        + Trim
    6.Date method:
    7. Math method:
        + Math.round(): > 0.5 làm tròn lên; < 0.5 làm tròn xuống
        + Math.ceil(): làm tròn lên
        + Math.floor(): làm tròn xuống
        + Math.max(): tìm số max
        + Math.min(): tìm số min
        + Math.random(): random ra 1 số giá trị từ 0 -> 1
           -> VD radom ra 1 số từ 5 -> 105 thì sao 5 + 100 * Math.random() 
    8.So sánh 2 Object
    9.Pass by value
    10.Shallow copy và deep copy:
    11.Try catch error: vì khi code bị lỗi chương trình bị crashed
    cần xử lý lỗi mà chương trình vẫn chạy ok mà ko bị lỗi

 */

/* undefined and null types
var a;
console.log(a);//undefined

var a = null;
console.log(a);
*/
/* string type 
var a = "Nodemy";
console.log(a);

var b = "My name's Manhdino";
console.log(b);

var c = 'My name"s Manhdino';
console.log(c);

var d = My name's " Manhdino;
console.log(d);
*/
/* Object and Array  
var person = {
    name: 'Nodemy',
    address: 'Ha Noi',
    teacher: {
        name:'Manhdino',
        age: 24
    }
}
console.log(person);

var person = {
    name: 'Nodemy',
    address: 'Ha Noi',
    age:46,
    teacher: {
        name:'Manhdino',
        age: 24
    },
    // key:'123'
}
//Lấy tất cả giá trị của object person
for(var key in person){
    console.log(key);
   // console.log(person.key);//error undefined fixed if in that object have: key:'123'
    console.log(person[key]);
}

var listPerson = [{name:'Nam'},{name:'Thai'},{name:'Hoang'}];

console.log(person.name); 
console.log(person.teacher.age);

var key = 'name';
console.log(person[key]);

var listNumbers = [1,2,3,4,5,6,7,8];
console.log(listNumbers[1]);
console.log(listNumbers[listNumbers.length-1]);
*/
/* Toán tử
  var name_v = "manhdino " + 123;
  console.log(name_v);
  var number = "9" - "2";//nó sẽ tự ép kiểu từ string về int để trừ
  console.log(number);

  ++,--
  console.log(res);
console.log(number);
var number = 1;
var res = ++number*6 + number-- - 7*number++ + number--;
            //2        // 2           //1        //2     //1 
            //--> 12 + 2 -7 + 2 = 9

console.log(res); //9
console.log(number); //1

var number = 5;
var res = --number*6 - number-- + 7*number-- + ++number*7;
           //4 - 4     4 - 3        3 - 2        3 3
console.log(res); // 4*6 + -4 + 7*3 + 3*7 = 62
console.log(number);//3
// var number = 0;
// var res = number++ + ++number + number++;
// console.log(res);
 * lúc đầu:
 *    res = 0;
 *    number = 1;
 *  tiếp
 *    res = number + res(cũ) = ) + 2 = 2
 *    number = 2;
 *  tiếp:
 *     res = res(cũ) + 2 = 4
 *     number = 3;
 number = 1;
 var res = number-- + number++ - number++;
     res = 1 + 0 - 1 = 0
   + res = 1, number = 0;
   + res = res(cũ) + number = 1 + 0 = 1;
     number = 1
   + res = res(cũ) - number(1) = 0
     number = 2; 

var x = (0.1*10 + 0.2*10)/10;
console.log(x);
// Ép kiểu về boolean
// var x = null;
// var y = !!null; //!x = true; !!x = false

//Xử lý lỗi khi lấy dữ liệu từ Server đối với Object
//nếu chỉ có x.name --> undefined, nhưng có x.name.first thì sẽ báo lỗi
// Cannot read properties of undefined (reading 'first')
// var x = {};
// console.log(x.name.first);
//Giải pháp 
//&&: chỉ cần gặp 1 giá trị false là stop 
//||: chỉ cần gặp 1 giá trị true là stop 
// var res = x.name && x.name.first; //undefined
// var res = x.name.first && x.name; //error
// console.log(res);
 Tại vì ở biểu thức đầu tiên sử dụng && khi nó chạy đến
x.name ra undefined - false nó sẽ tự động dừng và 
không xét đến thằng thứ 2
Còn ở biểu thức 2 khi nó chạy đến x.name.first đã sinh ra lỗi luôn rồi
*/ 
/* for in / for of

var arr = [1,2,3,4,5,6,7,8,9];
for(var i in arr){
    console.log("arr["+i+"]: " + arr[i]);
}

var MyObject={
    name: 'MyObject',
    age: 24,
    addresses: 'Ha Noi'
};
for(var key in MyObject){
    console.log(key + ": " + MyObject[key]);
}*/
/* Function 

function sum(number1,number2){
    return number1 + number2;
} 
var sum  = sum(1,3);//nếu trong hàm sum ko có return thì biến sum sẽ có giá trị là undefined
console.log(sum);//4

var f1 = function(){};

//function trả về là 1 function khác
function sub(number1, number2) {
   return function(){
         console.log(number1 - number2);
   }
}

var x = sub(5,2);//lúc này x chính là function vì hàm sum trả về 1 function
x();
có thể gọi bằng cách sau sub(5,2)();


//Khai báo function trong function
function sum(a,b){
    console.log(a + b);
    function hello(){
        console.log("hello");
    }
    //hello();
}
sum(1,2);//3 hello
//hello();//error vì phạm vi chỉ ở trong function sum()
sum(1,2)();//error vì phải có return ở function hello()


// Expression function: function không tên(vô danh), thường gán vào 1 biến,dùng 1 lần duy nhất
var showMessage = function(){
    console.log("Hello world!");
}
showMessage();

//function self invoked: function tự chạy chính nó ngay lập tức
(function showMessage2(){
    console.log("Hello world2!");
})();

//Truyền function vào làm tham số của 1 function khác
function F1(){
    console.log("F1");
}
function F2(F1){
    F1();
    console.log("F2");
}
F2(F1);

//Function lồng nhau:
function F3(){
    console.log("F3");
    return function(){
        console.log("F4");
        return function(){
            console.log("F5");
        }
    }
}
//gọi Function F3 
F3();

//gọi Function F3 F4
F3()();//vì khi F3() thực thi xong thì nó trả về 1 function mà function thì có thể thực thi tiếp được

//gọi Function F3 F4 F5
F3()()(); //curry 

*/
/* map()
var arrChar = ['a', 'b', 'c', 'd', 'e'];
var newArr = arrChar.map(function (item){
    return "Chu cai " + item;
})
console.log(newArr);
*/
/* filter()
var arrNumber = [1,2,3,4,5,6,7,8];
var newArr = arrNumber.filter(function (item){
    return item > 5;
})
console.log(newArr);
*/
/* sort()
Hàm sort() trong  được sử dụng để sắp xếp các phần tử trong một mảng. Khi gọi hàm sort() mà không truyền tham số, các phần tử sẽ được chuyển đổi thành chuỗi và sắp xếp theo thứ tự từ điển (mã Unicode).

Tuy nhiên, để sắp xếp một cách tùy chỉnh, bạn có thể truyền một hàm so sánh (compare function) vào hàm sort() làm tham số. Hàm so sánh này xác định cách sắp xếp các phần tử trong mảng dựa trên quy tắc bạn định nghĩa.

Hàm so sánh nhận vào hai phần tử của mảng và trả về một giá trị để xác định thứ tự của chúng. Các giá trị trả về có ý nghĩa như sau:

Nếu giá trị trả về là số âm (< 0): Phần tử a được coi là nhỏ hơn phần tử b và sẽ được đặt trước phần tử b trong mảng sắp xếp.
Nếu giá trị trả về là số dương (> 0): Phần tử a được coi là lớn hơn phần tử b và sẽ được đặt sau phần tử b trong mảng sắp xếp.
Nếu giá trị trả về là 0: Phần tử a và phần tử b được coi là bằng nhau và vị trí của chúng trong mảng không thay đổi.
Bằng cách tùy chỉnh hàm so sánh, bạn có thể sắp xếp mảng theo các tiêu chí khác nhau, ví dụ:

Sắp xếp theo thứ tự tăng dần hoặc giảm dần của giá trị số.
Sắp xếp theo thứ tự tăng dần hoặc giảm dần của chuỗi.
Sắp xếp các đối tượng dựa trên một thuộc tính cụ thể của chúng.

var arrNumber = [1,4,3,5,2,-5,9];

//C1:
// var newArr = arrNumber.sort();

//C2:
var newArr2 = arrNumber.sort(function(a,b){
    if(a < b) return -1;
    if(a > b) return 1;
    if(a ==b) return 0;
});
console.log(newArr2);


Sắp xếp một mảng gồm các đối tượng dựa trên một thuộc tính cụ thể bên trong đối tượng
Hàm so sánh tùy chỉnh được truyền vào sort() so sánh các đối tượng a và b dựa vào thuộc tính age.
Nếu a.age nhỏ hơn b.age, hàm trả về -1 để đặt a trước b trong mảng sắp xếp.
Nếu a.age lớn hơn b.age, hàm trả về 1 để đặt a sau b trong mảng sắp xếp.
Nếu a.age bằng b.age, hàm trả về 0 để giữ nguyên vị trí của a và b.

var students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 19 }
  ];
  
  students.sort(function(a, b) {//a và b chính là object
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });

  console.log(students);
*/
/* String'function

1. length: Thuộc tính length trả về độ dài của chuỗi (số ký tự) trong đối tượng String. 
Ví dụ: 
var str = "Hello";
console.log(str.length); // Kết quả: 5

2. charAt(index): Phương thức charAt() trả về ký tự tại vị trí index trong chuỗi.
Các vị trí ký tự được đánh số từ 0 đến length - 1. 
Ví dụ:
var str = "Hello";
console.log(str.charAt(0)); // Kết quả: "H"
console.log(str.charAt(4)); // Kết quả: "o"


3. concat(str1, str2, ..., strN): Phương thức concat() kết hợp các chuỗi được truyền vào 
và trả về một chuỗi mới.
Ví dụ:
var str1 = "Hello";
var str2 = "World";
var result = str1.concat(" ", str2);
console.log(result); // Kết quả: "Hello World"


4. indexOf(searchValue, startIndex): Phương thức indexOf() trả về vị trí đầu tiên 
của searchValue trong chuỗi, hoặc -1 nếu không tìm thấy. Bạn có thể chỉ định startIndex để bắt đầu tìm kiếm từ vị trí đó (mặc định là 0).
Ví dụ:
var str = "Hello World";
console.log(str.indexOf("o")); // Kết quả: 4
console.log(str.indexOf("World")); // Kết quả: 6
console.log(str.indexOf("a")); // Kết quả: -1


5. substring(startIndex, endIndex): Phương thức substring() trả về một phần của chuỗi từ startIndex đến endIndex (không bao gồm). Nếu không chỉ định endIndex, phương thức sẽ lấy các ký tự từ startIndex đến hết chuỗi. 
Ví dụ:
var str = "Hello World";
console.log(str.substring(0, 5)); // Kết quả: "Hello"
console.log(str.substring(6)); // Kết quả: "World"


6. toUpperCase(): Phương thức toUpperCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ in hoa và trả về chuỗi mới.
Ví dụ:
var str = "Hello";
console.log(str.toUpperCase()); // Kết quả: "HELLO"


7. toLowerCase(): Phương thức toLowerCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường và trả về chuỗi mới. 
Ví dụ:
var str = "Hello";
console.log(str.toLowerCase()); // Kết quả: "hello"

Dưới đây là thông tin về các hàm slice(), replace(), trim(), và split() của đối tượng String trong :

8. slice(startIndex, endIndex): Phương thức slice() trích xuất một phần của chuỗi từ startIndex đến endIndex (không bao gồm endIndex) và trả về một chuỗi mới. Nếu không chỉ định endIndex, phương thức sẽ trích xuất từ startIndex đến hết chuỗi.
Ví dụ:
var str = "Hello World";
console.log(str.slice(0, 5)); // Kết quả: "Hello"
console.log(str.slice(6)); // Kết quả: "World"


9. replace(searchValue, replaceValue):
Phương thức replace() tìm kiếm searchValue trong chuỗi và thay thế tất cả các trường hợp tìm thấy bằng replaceValue. Phương thức chỉ thay thế lần đầu tiên nếu không sử dụng biểu thức chính quy với cờ /g. 
Ví dụ:
var str = "Hello World";
console.log(str.replace("World", "Universe")); // Kết quả: "Hello Universe"


10. trim(): Phương thức trim() loại bỏ khoảng trắng (khoảng trắng, tab, xuống dòng) từ đầu và cuối chuỗi và trả về một chuỗi mới.
 Ví dụ:
var str = "   Hello World   ";
console.log(str.trim()); // Kết quả: "Hello World"


11. split(separator, limit): Phương thức split() tách chuỗi thành một mảng các chuỗi con bằng cách sử dụng separator làm điểm tách. Bạn có thể chỉ định limit để giới hạn số lượng phần tử trong mảng kết quả. 
Ví dụ:
var str = "Apple, Banana, Orange";
console.log(str.split(", ")); // Kết quả: ["Apple", "Banana", "Orange"]
Trong ví dụ trên, phương thức split(", ") tách chuỗi thành một mảng các chuỗi con bằng cách sử dụng ", " làm điểm tách.

Trong , đối tượng String cung cấp hai phương thức quan trọng là startsWith() và endsWith() để kiểm tra xem một chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi khác hay không. Dưới đây là thông tin về hai phương thức này:

12. startsWith(searchString, position): Phương thức startsWith() kiểm tra xem chuỗi có bắt đầu bằng searchString hay không. Nếu chuỗi bắt đầu bằng searchString, phương thức trả về true; ngược lại, trả về false. Bạn có thể chỉ định vị trí position để bắt đầu kiểm tra (mặc định là 0).
Ví dụ:
var str = "Hello World";
console.log(str.startsWith("Hello")); // Kết quả: true
console.log(str.startsWith("World")); // Kết quả: false


13. endsWith(searchString, length): Phương thức endsWith() kiểm tra xem chuỗi có kết thúc bằng searchString hay không. Nếu chuỗi kết thúc bằng searchString, phương thức trả về true; ngược lại, trả về false. Bạn có thể chỉ định độ dài length để giới hạn phạm vi kiểm tra (mặc định là độ dài của chuỗi gốc). 
Ví dụ:
var str = "Hello World";
console.log(str.endsWith("World")); // Kết quả: true
console.log(str.endsWith("Hello")); // Kết quả: false

Trong cả hai phương thức startsWith() và endsWith(), các chuỗi được so sánh phải khớp chính xác với chuỗi bắt đầu hoặc kết thúc. Nếu bạn muốn thực hiện so sánh không phân biệt chữ hoa chữ thường, bạn có thể chuyển đổi cả hai chuỗi về cùng một kiểu chữ cái trước khi sử dụng phương thức.
Đây là một ví dụ về việc sử dụng startsWith() và endsWith() với các chuỗi không phân biệt chữ hoa chữ thường:

var str = "Hello World";
console.log(str.toLowerCase().startsWith("hello")); // Kết quả: true
console.log(str.toLowerCase().endsWith("world")); // Kết quả: true

*/
// var today = new Date();
// console.log(today.getDate() + " " + today.getDay() + " " + today.getHours());
/* So sánh 2 Objects
var p1 = {
    name:'John',
    age:24
}

var p2 = {
    name:'John',
    age:24
}

if(p1 == p2){
    console.log('so sánh 2 Objects qua == giống nhau');
}
else if(p1 === p2){
    console.log('so sánh 2 Objects qua === giống nhau');
}else{
    console.log('2 objects hoàn toàn khác nhau ');
}
//Nếu so sánh p1 == p2 -> false or p1 === p2 -> false
 Giải thích: Reference type
  + Khi chúng ta khai báo dữ liệu kiểu objective {} or kiểu mảng []
  thì nó sẽ có ô nhớ và có địa chỉ ô nhớ trong RAM
  + Khi chúng ta so sánh 2 Object thì là so sánh 2 địa chỉ ô nhớ với nhau


var p3 = p1;//tức là lúc này p3 trỏ đến vị trí lưu trữ dữ liệu của biến p1
//so sánh p3 == p1 -> true
//nếu p3.name = "dino" ->thì p1.name sẽ tự phải thay đổi = "dino"

const person = {
    age: 20,
}
person = {} //error vì constant là hằng số nên ko được gán lại
person.age = 23;//ok


//tương tự với array
const arr1 = [1,2,3,4];
arr1 = []; //error 
arr1.push(5); //ok

 */
/* Pass by value
var x = 10;
function sum(number){
    number++;
}
sum(x);
console.log(x); //10 do truyền vào chỉ là truyền tham trị,tức truyền giá trị thôi


var person = {
    name: 'John',
    age: 24
}

function themTuoi(obj){
    obj.age = 25;
}

themTuoi(person);//person.age = 25 tại vì, biến person hoàn toàn ko thay đổi mà chỉ 
//có thuộc tính của nó thay đổi thỏa mãn pass by value
console.log(person);

//tương tự với object, array cũng có ý nghĩa tương tự
var arr=[1,2,3,4];
function changeArr(arr){
    arr[0] = 2;
}
changeArr(arr);
console.log(arr);



*/

var person = {
    ten1:'nam',
    ten2: 'nguyen dinh nam',
    ten3: 'NGUYEN DINH NAM',
    ten4: 'Nam nguyen dinh',
    friends:{
        name:'Dinomanh'
    }
}

// Làm sao để copy toàn bộ thuộc tính trên sang 1 object khác
var person2 = person;//Sai vì person2 chỉ trỏ vào ô nhớ chứa dữ liệu của person

//Solution:
//C1: gõ y nguyên khai báo person2 giống như person: chỉ áp dụng nếu 
//trong trường hợp biến person có ít thuộc tính
//C2: nếu biến person có nhiều thuộc tính thì dùng
// toán tử ...person
// hoặc object.assgin{}

//C1: Shallow copy 
var person3 = {...person};//nên dùng 
console.log(person3);
//C2:
var person4 = Object.assign({}, person);
//Lấy toàn bộ thuộc tính của person vào person4

//Tương tự với array:
var arr = [1,2,3,4,5,6,7,8,9];
var arr2 = [...arr];
console.log(arr2);

//Shallow copy: copy bề nổi
//trong trường hợp trên nếu ta so sánh person.friends == person2.friends
//thì kết quả vẫn bằng true do vẫn còn reference type

//Deep copy: mọi thứ trong person2 là hoàn toàn khác với person
//Solution: biến đổi person(Object) --> String//Deep Copy
var objStr = JSON.stringify(person);
console.log(objStr);
var person2 = JSON.parse(objStr);//Chuyển string trở lại Object
console.log(person2);//lúc là person2.friends != person.friends


/* Try catch*/
try{
    var x = {};
    throw 'My Error';
    console.log(x.name.firstname);
    console.log('continue');
}catch(error){
    console.log('Error: ',error);//có lỗi hiện Error: My Error
}finally{
    console.log('Luôn luôn thực hiện dù lỗi hay không lỗi và có thể lược bỏ');
}

console.log('Continue');//Câu lệnh này sẽ được chạy tiếp và chương trình ko bị crash
//Cố tình tạo ra lỗi dùng throw
