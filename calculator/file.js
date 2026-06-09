const EventEmmiter = require('events');

class calculator extends EventEmmiter {
    add(a, b) {
        this.emit('add', a, b)
    }

    sub(a, b) {
        this.emit('sub', a, b)
    }
}

const calc = new calculator()

calc.on('add', (a, b) => {
    console.log(a + b)
})

calc.on('sub', (a, b) => {
    console.log(a - b)
})

calc.add(2,9)
calc.sub(12,9)