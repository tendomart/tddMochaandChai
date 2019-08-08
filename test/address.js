const assert = require('chai').assert;
const A = require('..//./address');

//let addr =A;
describe('Mocking Address Book',function(){
it('Store ',function(){

});
it('Store Address and Retrieve',function(){
let address= A.AddressBook();
address.setfname('Rogers');
assert(address.getfname('Rogers')==='Rogers');
});
it('Retrieve Address Information ...',function(){});
it('',function(){});
it('',function(){});
});



