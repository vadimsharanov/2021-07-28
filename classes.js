"use strict"

class Puodukas1 {
    constructor(spalva, maxTuris) {   
        this.spalva = spalva;
        this.kiekis = 0;
        thisMaxturis = maxTuris;
    }
    
    ipilk(kiek) {
        if (kiek <=0) {
            console.log("Do you undestand, what are you actually doin'?");
            return;
        }
        this.kiek += kiek;
        if (this.kiekis > this.maxTuris) {
            return `Ant kelniu issipyle ${this.kiekis - this.maxTuris}`
        }
        else {
                return `Sekmingai ipylem ${kiek}. Liko laisvos vietos: ${this.maxTuris - this.kiekis}`;
        }
     }
     isgerk(kiek) {
        if (kiek < 0) {
            console.log("Nespjaudyk i puoduka");
            return;
        }
        if (kiek === 0) {
            console.log("Tai gersim, ar akis vartysim?");
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            console.log("Isgerem tik " + (this.kiekis + kiek));
            this.kiekis = 0;
        } else {
            console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
        }
     }
}

class Termosas1 extends Puodukas {
    constructor (spalva, maxTuris) {

        super(spalva, maxTuris)
    }
    pasildyk() {
        this.temp += kiek;
    }
    atvesink() {
        this.temp -= kiek;
    }

}


let p1111 = new Puodukas ("baltas", 250);
let t1111 = new Termosas ("juodas", 11150);


console.log(p1111);
console.log(t1111);
// return `Bute nr. ${this.butoNumeris}, yra ${this.kambariuSkaicius}`