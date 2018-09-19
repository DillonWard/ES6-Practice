console.log('######## 5 - Template Strings ########');

// with template strings you can add a line break or whitespace without entering it
var temp = `Hello,
My name is Dillon`;

console.log(temp);

function logPerson(name){
    // you can embed variables and expressions in template strings
    console.log(`My name is ${name} and I'm ${10 + 12}`);

}

logPerson('Dillon')
