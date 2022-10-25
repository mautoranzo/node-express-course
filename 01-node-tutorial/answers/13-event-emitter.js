const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) =>{
    console.log(`Data received. User ${name} with id ${id}`);
})

customEmitter.on('response', () =>{
    console.log(`some other logic`);
})


customEmitter.emit('response', 'Mau', 32)