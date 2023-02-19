let btn = document.querySelector(".b1");
let abc = document.querySelector(".t1");
let result = document.querySelector(".result");

function aboameeen() {
  result.srcdoc = abc.value;
}
btn.addEventListener("click", function () {
  abc.value = "";
});
abc.onkeyup = aboameeen;
// >>>>>>>>>>>>>>>>>>>>
let btn1 = document.querySelector(".btn1");
btn1.onclick = function () {
  abc.value = `
  <body> 
  <script> 
  alert("مرحبا بكم"); 
  </script> 
  </body>`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>
let bt2 = document.querySelector(".btn2");
bt2.onclick = function () {
  abc.value = `
<body> 
<script> 
function country() 
{ 
alert ("جمهورية مصر العربية"); 
} 
</script> 
</body> 
  `;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>>
let btn3 = document.querySelector(".btn3");
btn3.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<script>
 
alert("مرحبا بكم"); 

document.write("مادة الكمبيوتر وتكنولوجيا المعلومات"); 
</script> 

</body> 
  `;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>
let btn4 = document.querySelector(".btn4");
btn4.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<!--   استدعاء الدالة -->
<h2>استدعاء دالة </h2>
<input type="button" onclick="country()" value="اضغط هنا"> 

<script> 

function country() 
{ 
alert ("جمهورية مصر العربية"); 
} 

</script> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>>
let btn5 = document.querySelector(".btn5");
btn5.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<form name="form1"> 
<input type="text" name="t1"> 
<input type="button" onclick="country()" value="اضغط هنا"> 
</form> 
<script> 
function country() 
{ 
alert (form1.t1.value); 
} 
</script> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>
let btn6 = document.querySelector(".btn6");
btn6.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<h2>طباعة كلمة ناجح في حالة الدرجة أكبر من أو تساوي 50</h2>
<form name="form1"> 
<input type="text" name="t1"> 

<input type="button" value="المجموع" onclick="country()"> 
</form> 
<script>

function country(){ 
if (form1.t1.value>=50)  
{ 
alert ("ناجح"); 
} 
} 
</script> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>
let btn7 = document.querySelector(".btn7");
btn7.onclick = function () {
  abc.value = `
<body dir="rtl">
<form name="form1" action="data.php"> 
ادخل اسم الطالب 
<input type="text" name="text1" > <br><br> 
<input type="submit" value="إرسال" onclick="return f1();"/> 
</form> 
<script>
function f1()
{ 
if (form1.text1.value=="")
{ 
alert("غير مسموح بترك حقل الاسم فارع "); 
return false; 
} 
} 
</script> 
</body>
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>>>>
let btn8 = document.querySelector(".btn8");
btn8.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<form name="form1" action="data.php"> 
ادخل كلمة المرور <input type="password" name="text1"> 
<input  type="submit"  value="ارسال" onclick="return f1();"/> 
</form> 
<script> 
function f1(){ 
if (form1.text1.value.length<8){ 
alert("طول كلمة المرور لا يقل عن 8 أحرف"); 
return false; 
} 
} 
</script> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>
let btn9 = document.querySelector(".btn9");
btn9.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<form name="form1" action="data.php"> 
ادخل كلمة المرور
<input type="password" name="text1"> 
<br> <br>
اعد ادخال كلمة المرور
<input type="password" name="text2"> 
<br> 
<input  type="submit"  value="إرسال" onclick="return f1();"/> 
</form> 
<script> 
function f1(){ 
if (form1.text1.value!==form1.text2.value){ 
alert("الكلمتان غير متطابقتان"); 
return false; 
} 
} 
</script> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>
let btn10 = document.querySelector(".btn10");
btn10.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<form name="form1" action="data.php"> 
<input type="text" name="text1"> 
<input type="submit" value="ارسال" onclick="return f1();"/> 
</form> 
<script> 
function f1(){ 
if (isNaN(form1.text1.value)){ 
alert("ادخل قيمة عددية"); 
return false; 
} 
} 
</script> 
</body> 
`;
  aboameeen();
};
let f1 = document.querySelector(".f1");
f1.onclick = function () {
  abc.value = `
<body dir="rtl"> 
<center> 
تسجيل بيانات طالب <br><br><br> 
<form action="pro.php"> 
الاســــــــــــــم <input type="text"><br><br><br> 
كلمة المرور  <input type="password"><br><br><br> 
تأكيد كلمة المرور  <input type="password"><br><br><br> 
السن بالأرقام  <input type="text"><br><br><br> 
النوع<input type="radio" name="abc">ذكر<input type="radio" name="abc">انثى
<br><br><br> 
لغة الاجادة  
<input type="checkbox">  انجليزى 
<input type="checkbox">فرنسى 
<input type="checkbox">المانى 
<br><br><br> 
<input type="reset" value="جديد"> 
&nbsp&nbsp&nbsp 
<input type="submit" value="تسجيل"> 
</center> 
</form> 
</body> 
`;
  aboameeen();
};
// >>>>>>>>>>>>>>>>>>>
let links = document.querySelector(".btnlink");
links.onclick = function () {
  abc.value = `
<style>
body{
  direction: rtl
}
a{
  display:block;
  background-Color: black;
  color: white;
  margin: 10px;
  padding: 10px;
  text-decoration:none;
  width: 70px;
  border-radius:5px;
  text-align:center;
  font-size:20px
  
}
</style>

  <a  href="https://www.facebook.com/frontend88" target="_blank"
  >فيس بوك</a
>
<a href="https://www.linkedin.com/in/aboameen/" target="_blank">لينكد ان</a>
<a href="https://www.youtube.com/@aboameeen" target="_blank">يوتيوب</a>
<a href="https://www.facebook.com/aboameeeeen" target="_blank"
  >فيس بوك</a
>
  `;
  aboameeen();
};
