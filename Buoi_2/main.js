/* 1.declaration function
2.expression function
//arrow function
//IIFE
//asynfunction
//contructor function
//generate function
//ham de quy
//HOF
*/
/*
  Nhu cầu khi nào thì cần tạo hàm"
  1.Tái sử dụng code
  2.Tạo một scope riêng biệt tránh ảnh hưởng đến global scope và khó maintain
  3.Dễ mở rộng với tư duy input ,output
*/
function sum(a,b)
{
    return a+b;
}
const sum=function()
{
    console.log("hello")
}
document.getElementById("form").addEventListener("submit",
    function(){
        console.log("submit form")
    }
       
)
const myAuth={
    email:"abc@gmail.com",
    password:"123",
    login:function()
    {
        console.log("dang nhap thanh cong")
    }
}


