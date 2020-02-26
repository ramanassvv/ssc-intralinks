// let user={
//     name:"ramana",
//     age:30
// };
// console.log(user.name);
//console.log(user[age]);

function Makeuser(name,age){
    return {
        name:name,
        age:age
    };

}

let company=Makeuser("ramana",22);
console.log(company.name);
console.log(company.age);