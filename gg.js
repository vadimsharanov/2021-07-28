"use strict";
let o = {
    vardas:"1000",
    pavarde:"9999",
    testas() {
        console.log(this.vardas + this.pavarde);
        // console.log(this);
    }
}

//  o.testas()

let age = 10;

let checkas = (age >7) ?
() => console.log("true") :
() => console.log("nitru");



// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
function click1 () {
    setTimeout(() => {
       console.log("click 1 start");
       for ( let i=0; i< 500000 ; i++) {
           for (let j=0; j < 10000; j++) {}
       } 
       console.log("click1 finish");

    }, 5);
}

function click2() {
    setTimeout(() => {
    console.log("click2");
}, 10);
 }
// click1()
// click2()
// click2()
// click1()
// click2()
// click2()
// console.log("That's the end");

function p1 () {
    return new Promise((resolve, reject) => {
        console.log("kuriame promisa");
        if (Math.random() < 0.5) {
            resolve("ok")
        }
        else {
            reject("no  ")
        }
        console.log("sukurem promisa");
    })
}

let p = p1()
console.log(p);

p.then(
    value => {
        console.log(value);
    },
    err => {
        console.log(err);
    }
)

