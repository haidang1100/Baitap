const arr = [1, 2, 3, 4, 5]
let x = Number(prompt("Nhập x: "))
for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= i; j++) {
        if (arr[i] + arr[j] === x) {
            
            console.log("(" + i + "," + j + ")")
        } else {
            console.log("No result")

        }
    }
}