function createCounter1(start) {
  let count = start;

  return function() {
    console.log(count);
    count++;
    return count;
  };
}

function createCounter2(start) {
    let count = start;
  
    return () => {
      console.log(count);
      count++;
      return count;
    };
  }
let counter1 = createCounter1(0);
counter1(); 
counter1();
counter1();
counter1(); 
counter1(); 
let counter2 = createCounter2(0);
counter2(); 
counter2();
counter2();
counter2(); 
counter2(); 

