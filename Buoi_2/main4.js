function sum(a, b) {
  console.log(a + b);
}
sum(2, 3);
const result = sum(10, 20);
console.log({ result });
/* Hàm không có return trả về undefined 
code sau return sẽ không được thực hiện

*/
function chekEven(n) {
  if (n % 2 === 0) {
    console.log("n la so chan");
    return;
  }
  console.log("n la so le");
}
chekEven(10);

function test() {
  console.log(arguments);
  console.log(typeof arguments);
}
test();
/*Viết hàm cosoleCopy nhận vào số lượng phần tử không biết trước các phần tử cách nhau dấu ","
trả về chuỗi cấc phần tử này nối với nhau bời dấu cách

*/
function  cosoleCopy()
{
    console.log(Array.isArray(arguments));//false
    let string=""
    let length=arguments.length;
    for (let i = 0; i < arguments.length; i++) {
console.log(arguments[i])        
 //Logic de tra ve chuoi cac phan tu noi voi nhau boi dau cach
 if(i!== arguments.length-1)
 {
     string+=JSON.stringify(arguments[i])+" "

 }
 else{
         string+=JSON.stringify(arguments[i] )

 }
 

    }
return string
}
console.log(cosoleCopy(1,2,3,"Hoang"))


/**
 * Viết hàm sumary có tính chât sau:
 * -Nhập vào số lượng đối số bất kì không giới hạn
 * Kiểm tra và ép kiểu cho các phần tử sang kiểu số
 * Với những giá trị không hợp lệ->bỏ qua
 * Vói các giá trị hợp lệ tính tổng trung bình cộng và trung vị sau đó trả ra 3 giá trị này trong 1 object 
 * {sum:?,mean:?,median:?}
 */
function sumary()
{
    const objSumary={
        sum:0,
        mean:null,
        median:null
    }
for (let i = 0; i < arguments.length; i++) {
let number=+arguments[i];
if(!Number.isNaN(number))
    {
        //Sum 


        //Mean 


        //Median

    }    
}
return objSumary;
}
