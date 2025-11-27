/*
* moi nguoi dung nhap vao x
in ra x neu x la so chinh phuong
x^
*/
const x=window.prompt("MOi nhap vao x")
if(Number.isNaN(x)){
    console.log("x khong hop le")
}
if(Number.isInteger(Math.sqrt(x)))
{
    console.log(`${x} la so chinh phuong`)
}
else{
        console.log(`${x} khong la so chinh phuong`)

}
Number.isInteger(Math.sqrt(x)) && console.log(`${x} la so chinh phuong`)
Number.isInteger(Math.sqrt(x)) ?
 console.log(`${x} la so chinh phuong`):console.log(`${x} khong la so chinh phuong`)

//1.Validation x phai la 1 so
//2.Kiem tra x
//tinh can bac 2 cua x.math.sprt
///kiem tra gia tri can bac 2 nay co nnguyen
