"use strict";
/*
dvi masinos turi buti sportines

sportine masina turi tureti spoileri (pradzioj nuleistas)

jei spoileris yra pakeltas - sportine masina stabdo 2x greiciau (gazuoja standartiskai)
jei spoileris yra nuleistas - sportine masina gazuoja 2x greiciau (stabdo standartiskai)

lenktyniu metu kieviena sportine masina su 50% tikimybe pakeicia spoilerio pozicija


yra 8 masinos

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

reikia surusiuoti masinas pagal nuvaziuota kelia,
    jei dvieju masinu kelias vienodas - pirmesne yra tu, kurios didesnis greitis

atspausdinti turnyrine lentele

*) kas 100 km spausdinti lyderi

*/