    

function Zmogus(v, p) {​​​​​​​​
this.v = v;
this.p = p;
}​​​​​​​​
 
Zmogus.prototype.labas = function(kreipinys) {​​​​​​​​
console.log("Labas", kreipinys, this.v, this.p);
}​​​​​​​​
 
let z = new Zmogus("Jonas", "Jonaitis");
 
z.labas("ponas");
 
let l = z.labas;
 
l("ponas");

