const assert = require('chai').assert;
const P = require('./address');


describe('Field Test for Factorial',function(){

let num = 6;
let str = 'Hello';

it('Checking wether is a Number ...',function(){
assert.isNumber(num);
});

it('Checking wether is a String ...',function(){
assert.isString(str);
});

});
