/*Cho mot chuoi bat ki dem xem co bao nhieu ki tu "a" */

// let string="CodeFarm-Hoc lap trinh cung doanh nghiep ";
// let countA=0;
// for(let i=0;i<=string.length;i++)
// {
//     string[i] ==="a" && countA++;
    
// }
// console.log(countA);

// let i=6;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }
/*
wwhile kiem tra dieu kien ngay tu dau khi dieu kien dung thi moi chay vong lap
//chu y:them dieu kien ket thuc-> infinite loop

*/
// do {
//     console.log(i)
//     i++;
     
// }

// while(i<=5);
//chay toi thieu 1 lan
//yeu cau nguoi dung nhap tu ban phim so lon hon neu nhap so nho hon 0 thi yeu cau nhap lai
let a=Number(window.prompt("Nhap so"))

while (isNaN(a)||a<=0) 
    {
        a=window.prompt("So khong hop le ,nhap lai:")
}
console.log("so hop le",a)

