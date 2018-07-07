const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const MAX_LINES = 5
let counter = 1
let winnerPts = 0
let winnerPos = 0

const update = input => {
    const str = input.split(' ')
    const tempSum = parseInt(str[0],10) + parseInt(str[1],10) + parseInt(str[2],10) + parseInt(str[3],10)
    if(tempSum > winnerPts){
        winnerPts = tempSum
        winnerPos = counter
    }
}

rl.on('line', input => {
    update(input)
    if(counter === MAX_LINES){
        console.log(`${winnerPos} ${winnerPts}`)
        rl.close()
    }
    counter++
})