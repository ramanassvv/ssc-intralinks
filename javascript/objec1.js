var person={
    firstname:"ramana",
    lastname:"ssvv",
    age:50,
    fullname:function (){
        return this.firstname+" "+this.lastname;
    } 
};
//console.log(person);
//console.log(person.fullname());
console.log(person["fullname"]());

// console.log(person.age);
// console.log(person["lastname"]);

