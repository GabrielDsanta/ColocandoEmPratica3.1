

// MultiplicationTable("Opa")
// BusStop([[10, 0], [3, 5], [5, 8]])
// Bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])

function MultiplicationTable(number){
    if(typeof number == 'string'){
        return console.log(undefined)
    }
    let finalValueNumber = []
    let finalValueTwoNextNumbers = []

    for (let index = 1; index <= 10; index++) {
        let multipliedNumber = 0
        multipliedNumber = number * index

        finalValueNumber.push(multipliedNumber)
    }

    for (let index = 1; index <= 10; index++) {
        let multipliedNumber = 0
        multipliedNumber = (number + 1) * index
        finalValueTwoNextNumbers.push(multipliedNumber)

        multipliedNumber = (number + 2) * index
        finalValueTwoNextNumbers.push(multipliedNumber)
    }

    return console.log(finalValueNumber, finalValueTwoNextNumbers)
}

function BusStop(array) {
    let finalValue = 0
    array.forEach((item, index) => {
        index === 0 && (finalValue = item[0])
        index === 1 && (finalValue += item[0], finalValue -= item[1])
        index === 2 && (finalValue += item[0], finalValue -= item[1])
    })

    return console.log(finalValue)
}

function Bingo(array){
    let CounterLetters = 0
    const finalValue = array.filter((item) => {
        if(item === 2 && item < 20 || item === 9 && item < 20 || item === 14 && item < 20 || item === 7 && item < 20 || item === 15 && item < 20){
            CounterLetters++
            return item
        }
    })

    if(finalValue.length >= 4){
        return console.log("Ganhou")
    }
    return console.log("Perdeu")
}