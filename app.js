const add = require('./utils.js');
const getNotes = require('./notes.js');

// Nodejs you cannot access variables from other pages without explicitly exporting yourself using module.exports
const sum = add(4, -2)
console.log(sum);

const message = getNotes();

console.log(message);
