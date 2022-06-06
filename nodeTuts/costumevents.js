const event = require('events');
const util = require('util')

const myEmitter = new event.EventEmitter();
myEmitter.on('someEvent',(msg)=>{console.log(msg)});
myEmitter.emit('someEvent', 'the event was emitted');

var Person = function(name){
    this.name = name;
}

let Tahir  = new Person('Tahir');
let Tah = new Person('Tah');
let Hir = new Person('Hir');

util.inherits(Person,event.EventEmitter);

let people = [Tah,Tahir,Hir];
people.forEach((person)=>{
    person.on('talk',(msg)=>{
        console.log(person.name + " says: " + msg)
    });
});

Tah.emit('talk','hi , hru');
Tahir.emit('talk','i am ok');
Hir.emit('talk','bye');

