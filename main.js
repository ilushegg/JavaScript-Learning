
// let userName = 'Ivan'
// console.log(userName)

// userName = 'Anton'
// console.log(userName)

// const yearOfBirth = 1990

// function sun() {
//     var name = "Kiyv"
//     let namee = 'Kiyv'
// }

// sun()

// let age = 30
// console.log(age)

// let isMarried = true;
// console.log(isMarried)

// let someVar = 'Some Value'
// someVar = 50
// someVar = false

// let number = null
// console.log(number)

// let unDefined
// console.log(unDefined)

// console.log(typeof isMarried)

// console.log(Number.MAX_SAFE_INTEGER)
 



// console.log(10 > 5)
// console.log(20 > 50) 

// console.log('5' == 5)
// console.log('5' === 5)

// const time = 20

// if(time < 12){
//     console.log('Good morning')
// } else if(time >= 12 && time < 18){
//     console.log('Good afternoon')
// } else {
//     console.log('Good evening')
// }

// 10 < 12 ? console.log('True') : console.log('False')

// let greeting = 'Hi, Ivan'
// let howAreYou = 'How are you?'


// sayHi()



// function sayHi() {
//     console.log(`Hi, ${userName}! How are you?`)
// }

// const sayHiExpression = function () {
//     alert ('Hello')
// }


// function sayHiToUser(name) {
//     console.log(`Hello ${name}!`)
// }

// sayHiToUser('Ilya')

// function sum(a, b) {
//     const result = a + b;
//     return result
// }

// const res = sum (10, 5)
// console.log(res)

// console.log(sum(10, 25))

// const result = sum(sum(15, 25), 25)
// console.log(result)

// function doSomething(func){
//     let x = 10
//     let y = 15
//     return func(x, y)
// }

// console.log(doSomething(sum))

// function diff (a, b){
//     return a -b 
// }


// (function () {
//     console.log('hi!')
// })();

// (function (a, b) {
//     console.log(a + b)
// }) (10, 15)

// const arrowSayHi = (name) => {
//     console.log(`Hi, ${name}!`)
// }

// arrowSayHi('Ivan')

// const summ = (a, b) => a + b;
// console.log(sum(10, 10))

// const auto = ['Audi', 'Mazda', 'BMW', 'Bentley', 5]
// console.log(auto)

// auto.push('Nissan')
// console.log(auto)

// auto.splice(2, 1)

// console.log(auto)

// for (let i = 0; i < 10; i+=2) {
//     console.log(i)
// }

// for (let item of auto) {
//     console.log(item)
// }

// auto.forEach(function(item, index){
//     console.log(item + ' ' + index)
// })

// const person = {
//     userName: 'Ivan',
//     age: 21,
//     isMarried: false,
//     sayHi: function() {
//         console.log(`Hi! My name is ${this.userName}.`)
//     }
// }

// console.log(person)
// console.log(person.userName)
// console.log(person['age'])

// person.profession = 'Developer'

// delete person.age

// console.log(person)
// person.sayHi()

// for (let key in person){
//     console.log(key + ' : ' + person[key])
// }

// class Person {
//     constructor(userName, age, isMarried) {
//         this.userName = userName
//         this.age = age
//         this.isMarried = isMarried
//     }
//     sayHi(name) {
//         console.log(`Hi, ${name}! My name is ${this.userName}`)
//     }
// }

// const person1 = new Person('Ilya', 19, false)

// document.querySelector('h2').classList.add('red')

// const headings = document.querySelectorAll('h2')
// console.log(headings)

// for (item of headings){
//     item.classList.add('red')
// }

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(function (item) {
//     item.classList.add('green')
// });

// const heading = document.querySelector('h2')
// console.log(heading)
// heading.classList.add('red')
// heading.classList.remove('red')

// heading.classList.toggle('blue')
// heading.classList.toggle('blue')

// const contains = heading.classList.contains('blue')
// console.log(contains)

// const img = document.querySelector('#logo')
// console.log(img.getAttribute('src'))

// img.setAttribute('src', './img/php.png')
// img.setAttribute('width', '200')



// const button = document.querySelector('#button')
// button.value = 'delete'

// button.addEventListener('click', function() {
//     console.log('click')
//     img.remove()
// })

// button.onclick = function() {
//     console.log('CLICK')
// }

// const inputText = document.querySelector('#input-text')
// const textBlock = document.querySelector('#text-block')

// inputText.addEventListener('input', () => {
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })

// const list = document.querySelector('#list')
// list.addEventListener('click', function(event) {
//     console.log(event.target)
// })

// const container = document.querySelector('#elementsContainer')

// const newHeader = document.createElement('h1')
// newHeader.innerText = 'New Header'
// container.append(newHeader)

// const mainHeader = document.querySelector('header')
// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

// const htmlExample = '<h2>Another header</h2>'
// container.insertAdjacentHTML('beforeend', htmlExample)

// const title = 'Text'
// const htmlExample = `<h2>${title}</h2>`

// container.insertAdjacentHTML('beforeend', htmlExample)