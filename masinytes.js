class Masina {
    constructor(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.greitis = 0;
    this.kelias = 0;  
    }
    gazas() {
        return this.atsitiktinisSkaicius(0,5)
    }

    stabdis() {
        return this.atsitiktinisSkaicius(-5,0)
    }
    greicioPokytis () {
        return this.gazas() + this.stabdis()
    }

    vaziuojam() {
        return this.kelias += this.greitis
    }
     atsitiktinisSkaicius(min,max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
}

class SportineMasina extends Masina {
    constructor(pavadinimas){
        super(pavadinimas)
}
        spoilerioPadetis() {
            let min = 0;
            let max = 1
            let rand = min + Math.random() * (max + 1  - min);
            return Math.floor(rand);
          }
          greicioPokytis() {
            if (this.spoilerioPadetis() === 0) {
                return this.stabdis() * 2
            }
            else {
                return this.gazas() * 2
            }
          }
    }
    let primer1 = new Masina("ccsasc111")
let primer = new SportineMasina("ccsasc")
console.log(primer1.greicioPokytis());
console.log(primer.greicioPokytis());


//sukuriame masinu masyva;
let masinuMasyvas = [];
for (let i=1; i<=6; i++) {
    const masina = new Masina("masina " + i)
    masinuMasyvas.push(masina)
}
for (let i=1; i<=2; i++) {
    const sportineMasina = new SportineMasina("sportine-masina " + i)
    masinuMasyvas.push(sportineMasina)
}






let finished = 1;

while (finished ===1 ) {
for (let i=0; i <8; i++){
    masinuMasyvas[i].greitis += masinuMasyvas[i].greicioPokytis()
    if (masinuMasyvas[i].greitis < 0 ) {
        masinuMasyvas[i].greitis = 0;
    }
    masinuMasyvas[i].vaziuojam();
    if ( masinuMasyvas[i].kelias > 1000) {
        finished = 0;
    }
    for ( let k =0; k < masinuMasyvas.length - 1; k++) {
        for (let i = k + 1; i < masinuMasyvas.length; i++) {
            if (masinuMasyvas[k].kelias > masinuMasyvas[i].kelias) {
                let tmp = masinuMasyvas[k].kelias;
                masinuMasyvas[k].kelias = masinuMasyvas[i].kelias;
                masinuMasyvas[i].kelias = tmp;
            }
        }
    }
}
}

console.log(masinuMasyvas);