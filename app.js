console.log('Starting app.js');


const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

let filteredArray = _.uniq(['Andrew', 'Andrew', 1, 2, 3, 2, 1]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// let result = notes.addNote();
// console.log(result);
//
// let sum = notes.add(2,3);
// console.log(sum);
//
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);



