console.log('######## 6 - Object Literal Enhancements');

var name = 'Dillon';
var age = 22;

var person = {};

/* traditional way
var person = {
    name: name,
    age: age
};
*/

// ES6 way of mapping key-value pairs
var person = {
    name, age,
    profession(prof){
        console.log(`Bachelors (Hons) Degree in ${prof}`);
    }
};

console.log(person.name, person.age, person.profession('Software Development'));
