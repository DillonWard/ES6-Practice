console.log('######## 10 - Generators ########');

// "generator"
function* gen(){

    // JS reads from right to left, so everything from console.log("One");
    // is executed up until the 'yield' keyword
    // yield console.log("One");
    // yield console.log("Two");
    // yield console.log("Three");
    var x = yield 'one';
    var y = yield 'two';
    var z = yield 'three';

    //console.log("All done!");

   // return 'All done!';

   return x + y + z; // being fed back in = 18
}

// setting up iterator
var myGen = gen();

// after the generator is set up do the next thing/execute what's inside
// can also pass values back
console.log(myGen.next()); // one

// if we use myGen.next() again it will force the generator to continue
console.log(myGen.next(6)); // two
console.log(myGen.next(8)); // three

console.log(myGen.next(4)); // final console log "all done"