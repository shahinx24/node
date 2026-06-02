const EventEmmiter = require('events')

const myEmmiter = new EventEmmiter()

myEmmiter.on('greet', (name)=>{
    console.log(`hello ${name}`)
})

myEmmiter.emit('greet', "node.js");
