console.log('######## 7 - New String Methods ########');

var temp = 'Hello ';

// allows for reptition
console.log(temp.repeat(4));

// checks if our argument starts with something
// returns true or false
console.log(temp.startsWith('h'));
console.log(temp.startsWith('f'));

// can also use at a certain position - check for 'l' at the 2nd position
console.log(temp.startsWith('l', 2));

// can also checks if it ends with something
console.log(temp.endsWith('Hell', temp.length - 2));

var say = 'goodbye';

// can be used in conditions
if(status.startsWith('goodbye')){

    var reply = 'hello';
}

console.log(`You say ${say}, 
I say ${reply}`);


var test = 'My name is Dillon';
// checks to see if the string includes 'name'
console.log(test.includes('name'));