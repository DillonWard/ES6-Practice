console.log('######## 3 - Default Parameters ########');

function logWithoutDefault(num){
    console.log(num);
}

// when given a parameter, the number is, as expected, logged
// log(5)

// without a parameter, it returns 'undefined'
logWithoutDefault();

// a default parameter is included in the function
function logWithDefault(num = 10){
    console.log(num);
}
// if the function is called with no parameter, it uses the 10 as a default
logWithDefault();

// otherwise it uses 5
logWithDefault(5)

// can add multiple default parameters
function logPerson(name = 'not added', age = 'really old'){

    console.log("My name is " + name + " and I'm " + age);
}

// with parameters
logPerson('Dillon', 22);
// without
logPerson();