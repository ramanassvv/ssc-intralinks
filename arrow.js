const test = {
    name: 'intralinks',
      createAnonFunction: function() {
          console.log(this.name);
          console.log(arguments);
      },
    
      createArrowFunction: function() {
        return () => {
          console.log(this);
          console.log(arguments);
        };
      }
 };
    
//const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction("ramana","keerthi");

//test.createAnonFunction();
//test.createArrowFunction();
arrow();