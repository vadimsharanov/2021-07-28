"use strict";
function generatorOshibok() {
    let chislo = Math.random() 
    let oshibka = new Error("oshibka " + chislo)
    // if (chislo < 0.25) {
    //     throw chislo;
    // }
    // else if (chislo < 0.5) {
    //     throw "ASHIBKA";
    // }
 if ( chislo < 0.5) {
        throw oshibka
    }
    return "bez oshibok " + chislo
}
function pustyjeVorota() {
    console.log("pustyjeVorota nachalo");
    console.log(generatorOshibok());
    console.log("pustyjeVorota KONEC");
}

function zlojChelik() {
    console.log("zlojchelik nachal rabotu");
    try { 
        postoronnijChelik()
        
    }
    catch(oshibka) {
        console.log("now oshibka budet po moim pravilam");
        let e = new Error("Drugaja oshibka")
        e.prichina = oshibka;
        throw e
    }
    console.log("chelik zakonchil rabotu");
}
function postoronnijChelik() {
    console.log("chelik nachal rabotu");
    try { 
        pustyjeVorota()
        
    }
    catch(oshibka) {
        console.log("beri svoju ebanuju oshibku");
        throw oshibka
    }
    console.log("chelik zakonchil rabotu");
}

console.log("begining of programm");

try {
    zlojChelik();
    console.log("End of try");
}

catch(oshibka) {
    console.log("Oshibochka", oshibka);
}
finally {
    console.log("Always works");
}
console.log("FINISH of the program");


// function summaChisel(nachalo, konec) {
//     if (typeof nachalo !== "number" || typeof konec !== "number" ) {
//         throw "vienas, arba abu kintamieji yra ne number'iai"
//         console.log("no chance to see this");
//     }
//     let suma = 0;
//     for ( let i = nachalo; i <= konec; i++ ) {
//         suma  +=i
//     }
//     return suma
// }


// try {
//     console.log("pradzia");
//     console.log(summaChisel(5,7));
//     console.log(summaChisel("labas","hello"));
//     console.log("pabaiga");
// }
// catch (err) {
//     console.log("pagavau klaida: ",err);
// }

// finally {
//     console.log("pabaiga");
// }


// console.log(summaChisel(1321315,3123217));
 

