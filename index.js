

// MultiplicationTable("Opa")
// BusStop([10, 0], [3, 5], [5, 8])
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

function BusStop(arrayA, arrayB, arrayC) {
    let totalPeoples = arrayA[0]

    totalPeoples += arrayB.reduce((total, num) => {
        return total - num
    })

    totalPeoples += arrayC.reduce((total, num) => {
        return total - num
    })
    
    return console.log(totalPeoples)
}

function Bingo(array){
    const finalValue = array.filter((item) => {
        return item === 2 && item < 20 || item === 9 && item < 20 || item === 14 && item < 20 || item === 7 && item < 20 || item === 15 && item < 20
    })

    return console.log(finalValue)
}