
// function getUpperCaseName(name){
//     return name.toUpperCase();
// }


// // Expected results:
// console.log(getUpperCaseName("Nguyen van a")) 
// // "NGUYEN VAN A"
// console.log(getUpperCaseName("nGuyen vAn C")) 
// // "NGUYEN VAN C"
function isNumber(value)
{
    return typeof value === 'number' && Number.isFinite(value);
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false