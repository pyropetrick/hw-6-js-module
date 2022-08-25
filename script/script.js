// normal lvl

// task 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)

// task 2

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1])

// task 3
const numbers = [5, 43, 63, 23, 90]
let len = numbers.length
// numbers.splice(0,numbers.length);
for (let i = 0; i < len; i++) {
    numbers.shift(); // numbers.pop()
}
console.log(numbers)

// task 4

const students = ['Polina', 'Dasha', 'Masha']
students.splice(0,1, 'Andrew')
students.splice(students.length - 1, 1, 'Borya')
console.log(students)

// task 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let element of cats) {
    console.log(element)
}

// task 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const concatNumbers = evenNumbers.concat(oddNumbers)

console.log(evenNumbers.indexOf(8), concatNumbers)

// task 7

const binary = [0, 0, 0, 0];
console.log(binary.join('1'))

// advanced lvl

// task 1
// const word = prompt('Введите слово, а мы проверим является ли оно палиндромом')
const word = 'топот'
const wordArr = word.split('');
const wordReverse = wordArr.slice(0, wordArr.length).reverse();

if (wordArr.join() === wordReverse.join()) console.log(`${word} - является палиндромом`)
else console.log('Это не палиндром')



// task 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function averageNum(arr) {
        const newMatrix = arr.map(sum => {
            return sum.reduce((previousValue, currentValue) => previousValue + currentValue) / sum.length
        })
        console.log(newMatrix)

}
averageNum(matrix)

// task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

function sortNumbers(arr) {
    if (arr.length <= 1) return arr;

    const sortValue = 0;
    const negativeList = [];
    const positiveList = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < sortValue) {
            negativeList.push(arr[i])
        }
        else if (arr[i] >= sortValue) {
            positiveList.push(arr[i])
        }
    }
    console.log(negativeList.sort((a, b) => {
        return a - b;
    }), positiveList.sort((a, b) => {
        return a - b;
    }))
}
sortNumbers(mixedNumbers)

// task 4
const randomNumbers = [];

function getRandomNum(arr) {
    for (let i = 0; i < 5; i++) {
        let rand = Math.floor(Math.random() * 100);
        arr.push(rand);
    }
}
getRandomNum(randomNumbers);


const randomNumCube = randomNumbers.map((item) => Math.pow(item, 3))

console.log(randomNumCube, randomNumbers)