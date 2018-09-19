console.log('######## 4 - Spread Operator ######## ');

// define an array

var colours = ['Blue', 'Red', 'Green']

// first prints the array
console.log(colours);

// now prints each element individually
console.log(...colours);

var nums1 = [1, 2, 3]
// can spread 2 arrays into 1
var nums2 = [...nums1, 4, 5, 6]

console.log(nums2);

var nums = [3, 5, 7]

// can pass in 3 parameters
function addNumbers(a, b, c){

    console.log(a+b+c);
}

addNumbers(...nums)