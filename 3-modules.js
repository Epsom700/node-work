// Modules
const john =  'john'
const peter = 'peter'
const secret = "SUPER SECRET"


module.exports = {john, peter, secret}

const names = require('./4-names.js')
console.log(names)
const sayHI = require('./3-modules')


sayHI('susan')
sayHI(names.john)
sayHI(peter)

const sayHI =  (name) => {
    console.log(`hello there ${name}`)
}

module.exports = sayHI