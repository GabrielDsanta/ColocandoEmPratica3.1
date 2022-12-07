

// MultiplicationTable("Opa")
// BusStop([[10, 0], [3, 5], [5, 8], [3, 8], [12, 5]])
// Bingo([21, 13, 2, 7, 5, 14, 7, 7, 9, 10])

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
        index >= 1 && (finalValue += item[0], finalValue -= item[1])
    })

    return finalValue
}

function Bingo(array){
    let finalValue = array.filter((item) => {
        if(item === 2 && item || item === 9 && item || item === 14 && item || item === 7 && item || item === 15 && item){
            return item
        }
    })

    finalValue = finalValue.filter((item, index) => {
        return finalValue.indexOf(item) === index
    })

    if(finalValue.length >= 5){
        return console.log("Ganhou")
    }

    return console.log("Perdeu")
}