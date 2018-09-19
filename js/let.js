console.log('######## 2 - Let Keyword ########')
console.log("Click a <li>");
/*
var x = 10;

if(x > 5){
    // hard changes the 10 to 5
    var x = 5;

    // changes x to 5 but only locally - within the if statement
    let x = 5;
    console.log('Inside: ' + x)
}

console.log('Outside: ' + x)
*/

var items = document.getElementsByTagName("li");


// using var makes it a global variable and ignores x inside the loop
// x will be set to 4 and only 4 if set as a var
// if set to a let it can increment
for(let x = 0; x < items.length; x++){
    
    items[x].onclick = function(){
        console.log(x);
    }
}