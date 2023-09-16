/* HTML DOM
   + DOM: Document Object Model
   + Khi trang web được load xong,Web Browser sẽ nhận được 1 chuỗi HTML,CSS
   + Sau đó dựa vào quy chuẩn W3C tạo ra mô hình dạng cây(DOM)
   + Ko phải chuỗi HTML,cSS là DOM mà HTML DOM là mô hình tạo ra từ chuỗi HTML,cSS 
   + Thành phần của HTML DOM:
     + Elements: là các thẻ(tag: <a>,<p>,<div>,...)
     + Attributes: thuộc tính trong các thẻ(class,id,...)
     + Text: text bên trong các tag
   + Muốn thay đổi các thành phần của HTML DOM thì sử dụng Js
   + Js chỉ cung cấp các phương thức, phương tiện để truy cập vào HTML DOM,chứ
   HTML DOM không phải là của Js
   + Js chạy trên Browser|Server(NodeJs) 
   + Browser: chạy mã HTML -> DOM  -> Web API(chứa DOM): chỉ có trên các nền tảng
   giúp hỗ trợ mở được trang web
   + Js không có DOM nhưng khi chạy trên Browser thì lại có DOM vì trên Browser 
   có WEB API(chứa DOM)
   + DOM document object: 
       + document object đứng ở đầu của Model, đã được tích hợp sẵn trong WEB APIs
       + Element,Attribute,Text là con của document object
       + Vậy nên, document object chính là đại diện cho cả trang web
       + Khi Web Browser nhận được mã HTML,CSS sẽ chuyển thành DOM và sẽ lưu vào 
      biến document object này
       + Nghĩa là muốn truy cập vào Element, Attributes hay Text ta bắt buộc phải 
       truy cập qua biên document object này
    + Phương thức lấy ra Element trong DOM: ID,Class Name,Tag Name,CSS Selector,HTML Collection
       + getElementById: Trả về trực tiếp Element(Id là duy nhất trong 1 trang Web)
       + getElementsByClassName: Trả về 1 HTML Collection(hiểu đơn giản là mảng các Element)
       + getElementsByTagName: giống như class chỉ thay tên class bằng tên thẻ
       + CSS Selector: hay dùng, trả về trực tiếp Element(đầu tiên nếu nhiều Element thỏa mãn)
       + CSS Selector All: trả về 1 Node List gồm nhiều Element giống như HTML Collection
       + HTML Collection: ko hay sử dụng, thường chỉ áp dụng với 1 số thẻ form, a,...
    + Phương thức lấy ra Text và Attribute
       + Text: 
         + innerHTML sẽ in ra nội dung text và những thẻ HTML,giữ khoảng trắng
         + textContent sẽ in ra nội dung của text trong tất cả thẻ,giữ khoảng trắng
         + innerText sẽ in ra nội dung text, không in ra nội dung của thẻ HTML
         + innerText có kiểm tra CSS styles,không giữ khoảng trắng
         + Tóm lại textContent -> DOM
                   innerText -> HTML, có ktra CSS,hiển thị y hệt trên trang web
                   Nên dùng innerText
         + innerText -> là thuộc tính của Element Node
         + textContent -> là thuộc tính cả Element và Text Node
    + Thêm Element vào trong 1 Element có sẵn:
         + innerHTML và outerHTML(ít dùng) là 2 thuộc tính của Element Node
    + DOM Events:
         + Attribute events: gán luôn làm thuộc tính của thẻ,khi gán sự kiện là thuộc tính
         trong 1 thẻ(cha) thì thẻ con cũng sẽ bị ảnh hưởng, và thẻ con sẽ thực hiện trước
         thẻ cha(sự kiện nổi bọt)
         + Assign event using element node
    + PreventDefault và StopPropagation: 2 phương thức của đối tượng Event
      + preventDefault: loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ HTML
      + stopPropagation: loại bỏ sự kiện nổi bọt
    + Event listener:
      + giống như DOM Events nhưng có những lúc Event listener tiện hơn và cx có
      những lúc DOM Events tiện hơn tùy trường hợp, code gọn gàng hơn
      
    + DOM thường sử dụng để lắng nghe các Events đơn giản và không có nhu 
    cầu muốn gỡ bỏ Event đó đi
    + Event listenters: Xử lý nhiều việc, phương thức dài và lớn, sử dụng khi 1 sự 
    kiện diễn ra và muốn hủy bỏ lắng nghe trong 1 lúc nào đó, tức là không muốn
    lắng nghe liên tục
    
 */
/* Example:
console.log(document.getElementById('get-el-id'));
console.log(document.getElementsByClassName('get-el-class'));
//truy cập từng phần tử trong HTML Collection có thể dùng vòng for or hoặc dùng index
console.log(document.getElementsByClassName('get-el-class')[2]);
console.log(document.getElementsByClassName('get-el-class'))

console.log(document.getElementsByTagName('p'));

console.log(document.querySelector('.css-selector'));
console.log(document.querySelector('.box .heading-2'));
console.log(document.querySelector('.box .heading-2:first-child'));
console.log(document.querySelector('.box .heading-2:nth-child(2)'));
console.log(document.querySelectorAll('.box .heading-2'));
console.log(document.querySelectorAll('.box .heading-2')[2]);

//Trả về 1 HTML Collection gồm các forms: không cần truy xuất theo Id nữa
console.log(document.forms[0]);
console.log(document.forms['form-2']);

//Lấy các thẻ li trong box-1
var box_1 = document.querySelector('.box-1');
console.log(box_1.querySelectorAll('li'));
console.log(box_1.getElementsByTagName('p'));


//Thêm Attribute vào trong Element: sd Setter,không được gán thuộc tính không phù hợp với thẻ
//VD: ko thể gán thuộc tính href vào thẻ <p> vì nó là của thẻ <a>
var headingElement = document.querySelector('.box-3 h1');
headingElement.title = 'title_heading';
headingElement.id='id_heading';
headingElement.className='class_heading';
console.log(headingElement);

//Thêm Attribute vào trong Element: Funcion,có thể gán Atribute không hợp lệ vào thẻ
headingElement.setAttribute('href','http://manhdino.org');

//Lấy giá trị của Atribute
console.log(headingElement.getAttribute('href'));//thuộc tính bất kỳ
console.log(headingElement.title);//nếu thuộc tính hợp lệ thì có truy cập trực tiếp

//Lấy giá trị Text
var headingElement_box4 = document.querySelector('.box-4 .heading-text');
console.log(headingElement_box4);//headingElement_box4 chính là 1 object
console.log(headingElement_box4.innerText);//sử dụng toán tử . để lấy ra giá trị
headingElement_box4.innerText='New Heading';
console.log(headingElement_box4.textContent);

console.log("================================");
var headingElement_box5 = document.querySelector('.box-5 .heading');
//console.log(headingElement_box5);
console.log(headingElement_box5.innerHTML);
console.log(headingElement_box5.innerText);
console.log(headingElement_box5.textContent);
console.log("================================");

var headingElement_box6 = document.querySelector('.box-6 h1');
headingElement_box6.innerText = `


Hello, world!`;
headingElement_box6.textContent = `


Hello, world!`;


var mydiv = document.getElementById('hello');
console.log(mydiv.innerHTML); 
// Hello Javascript <span style="display:none;"> 2020</span>

console.log(mydiv.textContent);//Hiển thị y hệt như trong code kể cả khoảng trắng
// Hello Javascript  2020

console.log(mydiv.innerText); 
// Hello Javascript

//Thêm Element Node vào trong 1 Element Node có sẵn
var box7_element = document.querySelector('.box-7');
box7_element.innerHTML = '<h1 title="Heading">Hello Javascript</h1>';
console.log(document.querySelector('.box-7 h1').innerText);
*/
/* Bảng tóm tắt kiến thức
                         Getter                           Setter
   innerHTML          lấy HTML mã bên trong           Thêm Element Node vào trong 1
                      và chuyển về dạng chuỗi         Element Node có sẵn(Ứng dụng khi ta kéo xuống thì 
                                                      trang web tự tải- dùng innerHTML thêm mã HTML khi kéo)
   
   innerText          in ra nội dung Text, nhưng có    hiển giống y hệt như lúc set,tức là 
                      check CSS,giống như hiển thị     nếu có khoảng trắng thì sẽ tự thêm
                      trên trang Web,xóa khoảng trắng  thẻ <br /> để xuống dòng

   textContent        in ra tất cả nội dung nằm bên    ko hiển thị giống như lúc set,xóa 
                      trong các thẻ, ko check CSS      khoảng trắng
*/
/* DOM CSS: 

var box_dom_css = document.querySelector('.box-dom-css');
console.log(box_dom_css);
console.log(box_dom_css.style);

box_dom_css.style.backgroundColor =  "red";
box_dom_css.style.width = "100px";
box_dom_css.style.height = "200px";

//Set CSS inline
Object.assign(box_dom_css.style,{
   width:"200px",
   height:"100px",
   backgroundColor:'green',
})

console.log(box_dom_css.style.width);//lấy ra giá trị của thuộc tính width chứ ko phải chiều
//rộng thực tế của đối tượng

*/
/* ClassList properties
    + Trả về 1 DOMTokenList: mảng chứa các class name 
    + add
    + contains
    + remove
    + toggle: nếu hiện tại có class thì gỡ, không có thì tự thêm vào

var box_dom_class_list = document.querySelector('.box-dom-class-list');
console.log(box_dom_class_list);
console.log(box_dom_class_list.classList);
console.log(box_dom_class_list.classList.length);

//Add class into Element
box_dom_class_list.classList.add('red','bg-aqua');

//Check if class is exist in Element
console.log(box_dom_class_list.classList.contains('red'));//true

//Remove class from Element
// box_dom_class_list.classList.remove('red');

//Toggle 
// box_dom_class_list.classList.toggle('red');

//Chữ nhấp nháy đỏ đen trong 1s
setInterval(() => {
   box_dom_class_list.classList.toggle('red');
}, 1000);

*/
/* Dom Events
Assign event using element node:Nếu có nhiều thẻ <h1> giống nhau thì nó chỉ gán sự kiện 
  cho <h1> đầu tiên

var h1Element = document.querySelectorAll('.box-dom-events h1');

for(var i=0; i<h1Element.length; i++){
   h1Element[i].onclick = function(event){
      console.log(Math.random());
      console.log(event.target);
   }
}

*/
/* Example DOM Events 
   1. Input / Select: Lấy values của thẻ input rồi lưu vào 1 biến
   2. Key up/ down: Sử dụng để biết người dùng đang nhấn vào phím nào

VD1: Input/Select
var inputElement = document.querySelector('.dom-events-example input[type="text"]');
console.log(inputElement);

 + onchange: click vào input và nhập dữ liệu sau đó trỏ con trỏ chuột ra ngoài
thì nó sẽ tự động gọi hàm onchange\
 + oninput: thay đổi trong input đến đâu thì hàm sẽ gọi ngay lúc đó mà ko cần
trỏ con trỏ chuột ra ngoài

// inputElement.onchange = function(event) {
//    console.log(event.target.value);
// };

var inputValue;
inputElement.oninput = function(event) {
   inputValue = event.target.value;
   console.log(event.target.value);
};
console.log(inputValue);


var input_checkbox_element = document.querySelector('.dom-events-example input[type="checkbox"]');
//  console.log(input_checkbox_element);
input_checkbox_element.onchange = function(event) {
   console.log(event.target.checked);
}

var select_element = document.querySelector('.dom-events-example select');
//console.log(select_element)
select_element.onchange = function(event) {
   console.log(event.target.value);
}

 VD2: Key up down
var key_up_down = document.querySelector('.dom-events-example .key-up-down');
console.log(key_up_down)

// Chậm 1 nhịp: phải nhấn đến kí tự sau thì kí tự trước mới xuất hiện
// key_up_down.onkeydown = function(event) {
//    console.log(event.target.value);
// }

//Lắng nghe events của thẻ input
//Giữ phím thì sẽ không hiện,nhả phím thì sẽ hiện 
// key_up_down.onkeyup = function (event) {
//    //console.log(event.target.value);
//    console.log(event.which);//trả về mã ASCII của phím
//    switch (event.which) {
//       case 49://phím 1
//          console.log('Nhấn phím 1');
//          break;
//       case 50://phím 1
//          console.log('Nhấn phím 2');
//          break;
//    }
// }

//Lắng nghe event của toàn trang website
document.onkeyup = function (event) {
   switch (event.which) {
      case 49://phím 1
         console.log('Nhấn phím 1');
         break;
      case 50://phím 1
         console.log('Nhấn phím 2');
         break;
   }
}
*/
/* preventDefault và stopPropagation

var a_element = document.querySelectorAll('.dom-events-method a');
// var a_element_c2 = document.links;//Lấy tất cả <a>
console.log(a_element);
console.log(a_element[0])

for(var i=0; i<a_element.length; i++){
   a_element[i].onclick = function(event){
      if(!event.target.href.startsWith("https://f8.edu.vn")){
         e.preventDefault();
      }
   }
}


var ulElement = document.querySelector('.dom-events-method ul');

ulElement.onmousedown = function(event){
   event.preventDefault();
}

ulElement.onclick = function(event){
   console.log(event.target)
}

document.querySelector('.dom-events-method div').onclick = function(){
   console.log('DIV');
}
document.querySelector('.dom-events-method div button').onclick = function(event){
   event.stopPropagation();
   console.log('Click me!');
}
*/
/* Event listeners:
   1. Xử lý nhiều việc khi 1 event xảy ra
   2. Lắng nghe / Hủy bỏ lắng nghe
*/
var btnElement = document.getElementById('btn');
//console.log(btnElement);

//Luôn luôn lắng nghe
// btnElement.onclick = function(event){
//    console.log("Task 1");
//    console.log("Task 2");
//    alert("Task 3")
// }

//Lắng nghe sau 3s
// setTimeout(function(){
//    btnElement.onclick = function(event){
//       console.log("Task 1");
//       console.log("Task 2");
//       alert("Task 3")
//  }
// },3000)

//Ban đầu lắng nghe nhưng sau 3s không lắng nghe nữa
// btnElement.onclick = function (event) {
//    console.log("Task 1");
//    console.log("Task 2");
//    alert("Task 3")
// }
// setTimeout(function () {
//    btnElement.onclick = function (event) {}
// }, 3000)

btnElement.addEventListener('click', function (event) {
   console.log(Math.random());
})

//Lắng nghe nhiều Events bằng cách add nhiều lần mà ko cần phải viết chung vào 1 function giống
// như DOM Events
function Task1(){
   console.log("Task1");
}
btnElement.addEventListener('click', Task1)

btnElement.addEventListener('click', function (event) {
   console.log('Task2');
})

btnElement.addEventListener('click', function (event) {
   console.log('Task3');
})

//Hủy lắng nghe sau 3s
setTimeout(function () {
   btnElement.removeEventListener('click',Task1);
},3000)