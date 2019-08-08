
class AddressBook{

constructor(Id,FirstName,Contact,Job,Educ){
this._id=Id;
this._fname=FirstName;
this._contact=Contact;
this._job=Job;
this._educ=Educ;
}

set id(newId){
this._id=newId;
}
get id(){
return this._id;
}

set fname(newFname){
this._fname=newFname;
}
get fname(){
return this._fname;
}

set contact(newContact){
this._id=newContact;
}
get contact(){
return this._contact;
}

set job(newJob){
this._id=newJob;
}
get job(){
return this._job;
}

set educ(newEduc){
this._id=newEduc;
}
get educ(){
return this._educ;
}


talk(){}
}//Close Class


let address = new AddressBook();
let addr = new AddressBook(203,'Sentongo John','078737464','Engineer','University');

console.log(addr);
console.log(new AddressBook(255,'OdongKara Paul','0787002124','Teacher','UTC'));
console.log(addr.fname);

//Robot.prototype.talk = function(){
//console.log(`Hi My Name is ${addr.fname} and Iam an ${addr.job}, i Studied at ${addr.educ}`);
//};

//module.exports = address;

