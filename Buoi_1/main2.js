// let date=new Date();
// console.log({date})
// console.log(date.getDate()) //Ngay trong thang
// console.log(date.getDay())//Ngay trong tuan
// let date2=new Date("2025/01/01 ");
// console.log(date2)
// console.log(date2.getDay())
/*
*Nhap vao ban phim bat cu 1 ngay nao duoi dang yyy-mm--dd
*in ra ngay do la thu may

*/
let date=new Date(window.prompt("Nhap ngay dinh dang yyy-mm-dd"))

switch (date.getDay()) {
    case  1:
           console.log("Trong tuan")
        break;
    case  2:
           console.log("Trong tuan")
        break;
    case  3:
           console.log("Trong tuan")
        break; 
        case  4:
           console.log("Trong tuan")
        break;
        case  5:
           console.log("Trong tuan")
        break;
         default:
            console.log("Cuoi tuan!")
    //  case 1:
    //     console.log("Thu hai")
    //     break;
    //     case 2:
    //     console.log("Thu ba")
    //     break;
    //  case 3:
    //     console.log("Thu tu")
    //     break;
    // case 4:
    //     console.log("Thu nam")
    //     break;
    // case 5:
    //     console.log("Thu sau")
    //     break
    // case 6:
    //     console.log("Thu bay")

    

}