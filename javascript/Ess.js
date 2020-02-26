// var myObject = {
//     value: 0,
//     increment: function (inc) {
//         // console.log(typeof (inc));
//         this.value += typeof inc ==="number" ? inc : 1;
//     }
// };
//
//
// myObject.increment("xy");
// console.log(myObject.value);
//
// myObject.increment(2);
// console.log(myObject.value);
//
// myObject.increment(2);
// console.log(myObject.value);


// var myFerrari= {
//         xyz : 0,
//         dcf : 1
// }
// console.log(myFerrari);
//
//
// var Car = function(brand, model) {
//   xyz = brand;
//   dcf = model;
// };
//
//  myFerrari = new Car('Ferrari', 'F40');
//
// console.log(myFerrari);


// var a=function(){
//     console.log("my this ",this);
// }
//
// var b={
//     status:404,
//     error:'not found'
// };
// a.call(b);


// const a={
//     status:404,
//     message:"not found",
//     log(){
//         console.log('my this ',this);
//     }
// }
// a.log();


// const a=function(message){
//    // 'use strict';
//     console.log('my this',this);
// };
//
// a("ramana");


// const strictLogger = function(message) {
//     //'use strict';
//     console.log('My this ', this);
//     console.log(message);
// };
//
// strictLogger('JavaScript rocks!');
//'use strict'
a=10;

console.log(a);