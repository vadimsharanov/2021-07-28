"use strict";

 const fs = require("fs");
 let kvadratas = sk => sk**2;

 async function main() {
     console.log("start");
    let rez, param1, param2;
    kvadratas(3).then(
        val => {
            param1 = val;
            return kvadratas(4)
        }
      ).then (
          val => {
              param2 = val;
              return param1 + param2;
          }
      ).then(
      val => {
          console.log(rez);
          console.log('finish');
      } )
 }

//  console.log(main());
 console.log(kvadratas(3));