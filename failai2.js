const fs = require("fs");
 
function readFile(name, options) {
 return new Promise((resolve, reject) => {
 fs.readFile(name, options, (err, data) => {
 if (err) {
 reject(err);
 return;
 }
 resolve(data);
 });
 });
}
 
let text = "";
let p1 = readFile("a.txt", {
 encoding: "utf8"
})
let p2 = p1.then(data => {
 console.log("perskaiciau is failo");
 console.log(data);
 text += data;
 return readFile("b.txt", {
 encoding: "utf8"
 });
})
let p3 = p2.then(data => {
 console.log("perskaiciau is kito failo");
 console.log(data);
 text += data;
})
let p4 = p3.catch(err => {
 console.log("klaida skaitant is failo");
 console.log(err);
});
p4.finally(() => {
 console.log("p1", p1);
 console.log("p2", p2);
 console.log("p3", p3);
 console.log("p4", p4);
 console.log(text);
});
 
console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
console.log("p4", p4);
console.log("main'as baige");           