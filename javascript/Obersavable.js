
const myObservable=new Observable(observer=>{
    setTimeout(()=>{
        observer.next('dog');

    },100);
});

myObservable.subscribe(result=>{
    console.log('observable',result);
});
