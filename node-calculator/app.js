const EventEmitter = require('events')

class calculator extends EventEmitter{
    add(a,b){
        this.emit('add',a,b)
    }

    sub(a,b){
        this.emit('sub',a,b)
    }
}

const calc = new calculator()

calc.on('add',(a,b)=>{
    console.log(a+b)
})

calc.on('sub',(a,b)=>{
    console.log(a-b)
})

calc.add(10,5)
calc.sub(20,18)