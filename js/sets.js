console.log('######## 9 - Sets ########');

// create a new set
var names = new Set();

// can add multiple names to a set at once
names.add('Dillon').add('David').add('Paul')
console.log(names);
console.log(names.size);

// can delete from a set - unlike add can only delete 1 at a time
names.delete('David')
console.log(names);

// can delete the entire set
//names.clear();
//console.log(names);

console.log(names.has('Dillon'));

var people = ["Dillon", "David", "John", "Paul", "David", "Dillon"];

var newPeople = new Set(people);
console.log(newPeople);

people = [...newPeople]
console.log(people);
