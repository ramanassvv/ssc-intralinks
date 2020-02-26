// var a={
//     name:"ramana",
//     id:12,
//     age:20
// };
// const {name,id}=a;
// console.log(name,id);

//
// const name=["syam","veera","venakata","ramana"]
// console.log(name[1]);
// const [a,b,c,d, e]=name;
// console.log(d);
// console.log(a,b,c,d, e);


// var a=10;
// var b=20;
// [b,a]=[a,b];
// console.log(a,b);

// let array1=[1,2,3,4,5];
// let array2=array1;
// array2[0]=11;
// // array3=array2.slice(0);
// // // console.log(array1==array2);

// // console.log(array3);
// // console.log(array1===array3);
// splid operator[...]
// let array4=[...array1]//=array1;
// console.log(array1==array4);
// console.log(array1===array4);
// console.log(array1);
// console.log(array4);



// function add(n1,n2){
//     return n1+n2;
// }

// console.log(add(5,6));

//clouser addition
// function add(a){
//     return function add2(b){
//         return a+b;
//     }
// }
// console.log(add(5)(7));

// function add(a){
//     return function add2(b){
//       return function add3(c){
//           return function add4(d){
//               return a*b*c*d;
//           }
//       }
//     }
// }
// console.log(add(5)(7)(2)(3));


// function mul(a){
//     var result;
//     function multi(b){
//        return  result1=result*b;
//     }
// }
// console.log(mul(5)(7));


// function mul(a){
//     var c;
//     function mul(b){
//         res=a*b;
//         d.res=c
//         return d;
//     }
// }
// console.log(mul(5)(7)(4)());

// function sum(a) {
//     var sum = a
//     function f(b) {
//         sum *= b
//         return f
//     }
//
//     f.toValue = function () { return sum }
//     return f
// }
// var a = sum(1)(1)(2)(3)(4)(5)(4);
// console.log(a.toValue());
//

//string literals expression Interpolation
// let a=10;
// let b=20;
// let name="ramana";
// //console.log("a+b is " + (a+b) + "my name is "+name);
// console.log(`a+b is ${a+b} my name is name ${name}`);


// var a={
//     name:"ramana",
//     id:12,
//     age:20
// };
// const {name,id}=a;
// console.log(name,id);


// const name=["syam","veera","venakata","ramana"]
// console.log(name[1]);
// const [a,b,c,d, e]=name;
// console.log(, , ,d);
// console.log(a,b,c,d, e);


// var a=10;
// var b=20;
// [b,a]=[a,b];
// console.log(a,b);

// let array1=[1,2,3,4,5];
// let array2=array1;
// array2[0]=11;
// // array3=array2.slice(0);
// // // console.log(array1==array2);

// // console.log(array3);
// // console.log(array1===array3);
// splid operator[...]
// let array4=[...array1]//=array1;
// console.log(array1==array4);
// console.log(array1===array4);
// console.log(array1);
// console.log(array4);



// function add(n1,n2){
//     return n1+n2;
// }

// console.log(add(5,6));

//clouser addition
// function add(a){
//     return function add2(b){
//         return a+b;
//     }
// }
// console.log(add(5)(7));

// function add(a){
//     return function add2(b){
//       return function add3(c){
//           return function add4(d){
//               return a*b*c*d;
//           }
//       }
//     }
// }
// console.log(add(5)(7)(2)(3));


// function mul(a){
//     var result;
//     function multi(b){
//        return  result1=result*b;
//     }
// }
// console.log(mul(5)(7));


// function mul(a){
//     var c;
//     function mul(b){
//         res=a*b;
//         d.res=c
//         return d;
//     }
// }
// console.log(mul(5)(7)(4)());


const array=["ramna",12];
var [name1,age1]=array;
console.log(name1,age1);


