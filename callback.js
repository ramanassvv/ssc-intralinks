function first(n,cb){
    let val=n*2
//   console.log(val)
    cb(null,val)


}
function second(n,cb){
    let val=n*3
    cb(null,val)
}

first(2,function(err,data){
    if(!err){

        second(data,function(err,data){
            if(!err){
                console.log(data)
            }
        })
    }
})