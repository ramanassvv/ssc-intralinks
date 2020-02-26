function ask(question,yes,no){
    if (confirm(question)) yes()
    else no();
}
ask(
    "do you agree",
    function(){
        alert("your agreed");},
    function(){
        alert("your agreed");}
    

);