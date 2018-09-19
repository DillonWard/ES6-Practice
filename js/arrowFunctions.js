console.log('######## 8 - Arrow Functions ########');

// traditional way
/*
var greeting = function(name){
    
    console.log('Hello');

    greeting('Dillon');
}
*/

// we can get rid of the function and make this into 1 statement
/*
var greeting = (name) => console.log(`Hello, ${name}`);

greeting('Dillon');
*/

// if we have 1 parameter, we can get rid of the brackets
/*
var greeting = name => console.log(`Hello, ${name}`);

greeting('Dillon');
*/

/*
var person = {
    name: 'Dillon',
    say(x){
        var _this = this;
        window.setInterval(function(){
            if(x > 0){
                // with just this, it tries to find a local reference - must refer to a reference hence _this
                console.log(_this.name + " said something");
                x--;
            }
        }, 1000)
    }
};
*/

var person = {
    name: 'Dillon',
    say(x){
        window.setInterval(() =>{
            if(x > 0){
                // with the arrow function we don't need the referal we can just use 'this'
                console.log(this.name + " said something");
                x--;
            }
        }, 1000)
    }
};
person.say(3);