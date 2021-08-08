const fs = require("fs")
const files = ['a.txt', 'b.txt', 'c.txt']
console.log("start");

// for(let i = 0; i < files.length; i++){
//     fs.readFile(files[i], (err,data) => {
//         files[i]=data;
//         console.log(data);
//     });
// }


for (let i=0; i < files.length;i++) {
    fs.readFile(files[i], (err, data) => {
        if (err) {
            console.log("klaida", err);
            return;
        }
        console.log("" + data);
    })
}

// let g = fs.readFile("b.txt", (err, data) => {
//     if (err) {
//         console.log("klaida", err);
//         return;
//     }
//     console.log("" + data);
// });
// fs.readFile("c.txt", (err, data) => {
//     if (err) {
//         console.log("klaida", err);
//         return;
//     }
//     console.log("" + data);
// })

console.log('finish');

/*
perskaitytumet duomenis is failu a.txt, b.txt, c.txt
priskirtumet vienam kintamajam butent tokia tvarka
ir atspausdintumet to kintojo reiksme
*/

