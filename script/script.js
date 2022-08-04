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
students.splice(students.length - 1, students.length - 1, 'Borya')
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