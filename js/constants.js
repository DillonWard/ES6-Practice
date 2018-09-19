console.log('######## 1 ########')


// define a constant - a constant is a value that cannot be changed
const pi = 3.142;

// try to change the value of the const
// pi = 10;

// the output will throw an error because of the attempt to change the const
console.log(pi)

function calculateArea(r){

    // pi cannot be changed, but it can be redefined
    // const pi = 10;

    // returns the area - pi * r(radius) squared
    console.log("Area is: " + pi * (Math.pow(r, 2)));
}

calculateArea(5);
