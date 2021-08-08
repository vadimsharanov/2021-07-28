const fs = require("fs")

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options,(err,data) => {
        if (err) {
            reject(err)
            return;
        }
        resolve(data)
    })
    })
}

   let p1 = readFile("a1.txt", { // grazina promis'a
    encoding: "utf8"
   })
   let p2 = p1.then(data => { // grazina promis'a
    console.log("I've read your file");
    console.log(data);
    
    
})
let p3 = p2.catch( err => {  // grazina promis'a;
    console.log("klaida", err);
    
   });

   let p4 = p3.finally(() => {
       console.log("p1", p1);
       console.log("p2", p2);
       console.log("p3", p3);
})


console.log("p1", p1);
console.log("p2", p2);
console.log("p3", p3);
console.log("main'as pabaige savo darba;");
