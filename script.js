Vue.component('bigtry', {
    template: '<div>I made a</div>',
});
var trying1 = {
    template: '<div><bigtry></bigtry> sentence</div>',
};
var trying2 = {
    template: '<div>{{ whatif }}<trying1></trying1></div>',
    components: {
        trying1,
    },
    props: ['whatif']
};
var compapp = new Vue({
    el: '#compapp',
    data: {
        something: 'This is just a string of text',
    },
    components:{
        trying1,
        trying2,
    }
});

var sometext = 'Some text here from JavaScript';
console.log(sometext);
//This prints the value a variable holds in browser console

console.log(sometext.length);
//This prints the length of the variable

let part = sometext.substring(20,30);
console.log(part);
//This prints the characters within the variable between character 20 and 30
//Which in this case is the word JavaScript

let newtext = sometext.replace("JavaScript", "my heart");
console.log(newtext);
//This prints the text from the variable except the word JavaScript is replaced
//by 'my heart'

let anothertext = sometext.toUpperCase();
console.log(anothertext);
//This prints the original variable except in upper case

let artems = ['Just Artem', 'Big Artem', 'Average Sized Artem', 'Super Artem', 'Vlad'];
console.log(artems);
//This defines and prints a string array

let numerals = [23, 05, 2001, 16, 00];
console.log(numerals);
//This defines and prints a number array

let actualartem = artems.find((artem) => artem === "Super Artem");
console.log(actualartem);
//Demonstrates find method

artems.push('Pushed Artem');
console.log(artems);
//Demonstrates push method

artems.pop();
console.log(artems);
//Demonstrates pop method

console.log(numerals.sort());
//Demonstrates sort method

console.log(numerals.slice(3,5));
//Demonstrates slice method


