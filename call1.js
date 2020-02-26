var obj={num:2};
//var obj1={num:3}
var addtoThis=function(a,b){
    return this.num+a+b;
}

//console.log(addtoThis.call(obj,4));
//var arr=[1,2,3];
//console.log(addtoThis.apply(obj,arr));
bound=addtoThis.bind(obj);
console.log(bound(1,2,3));

