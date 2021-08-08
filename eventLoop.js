"use strict";
console.log("start");
functionclick1() {​​​​​​​​
setTimeout(() => {​​​​​​​​
console.log("click1 start");
for(leti = 0; i < 5000000; i++) {​​​​​​​​
for(letj = 0; j < 1000; j++) {​​​​​​​​
 }​​​​​​​​
 }​​​​​​​​
console.log("click1 finish");
 
 }​​​​​​​​, 10);
}​​​​​​​​
functionclick2() {​​​​​​​​
console.log("click2");
}​​​​​​​​
 
click1();
click2();
click2();
click1();
click2();
click2();
console.log("finish");
