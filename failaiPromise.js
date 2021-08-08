const fs = require("fs/promises");

console.log("start");

let allData = "";

let p1 = fs.readFile("a.txt")

let p2 = p1.then(data => {
    allData += data;
    return fs.readFile("b1.txt");
})

let p3 = p2.then(data => {
    allData += data;
    return fs.readFile("c.txt");
})

let p4 = p3.then(data => {
    // console.log("p1", p1);
    // console.log("p2", p2);
    // console.log("p3", p3);
    // console.log("p4", p4);
    // console.log("p5", p5);
    allData += data;
    console.log(allData);
})

let p5 = p4.catch(err => {
    console.log("Klaida", err);
});
console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
console.log("p4", p4);
console.log("p5", p5);

console.log("finish");
