function printMultiplicationTable(number) {
    // 1. Ép kiểu và xác thực đầu vào
    const N = parseInt(number);
    if (isNaN(N) || N <= 0) {
        console.log("Lỗi: Vui lòng nhập một số nguyên dương hợp lệ.");
        return;
    }

    console.log(`\n=== Bảng Cửu Chương của Số ${N} ===`);

    // 2. Vòng lặp từ 1 đến 10
    for (let i = 1; i <= 10; i++) {
        const result = N * i;
        // Sử dụng console.log để in ra từng dòng
        console.log(`${N} x ${i} = ${result}`); 
    }
}

// -----------------------------------------------------------------
// Ví dụ sử dụng:
// -----------------------------------------------------------------

// Lấy input từ người dùng
const input = window.prompt("Bạn muốn in bảng cửu chương của số nào? ");
printMultiplicationTable(input);