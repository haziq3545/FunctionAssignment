// let date = ()=>{
//     let date = new Date()
//     console.log(date);
    
// }
// date()

// let greeting = ()=>{
//     let firstName = prompt("Enter the first name")
//     let lastName = prompt("Enter the last name")

//     return firstName + " " + lastName
// }

// console.log(greeting());


// let calculatorFunction = ()=>{

//    let a = parseInt(prompt("Enter the first Value"))
//    let b = parseInt(prompt("Enter the second value"))
//    let c = prompt("Enter the operator")

//    if(isNaN (a) || isNaN(b)){
//     alert("Enter a valid number")
//    }

//     if(c === "+"){
//         console.log(a + b);
        
//     }else if(c === "-"){
//         console.log(a - b);
//     }else if(c === "/"){
//        if(b === 0){
//         alert("0 is not divisible")
//        }       
//        console.log(a / b);
//     }else if(c === "*"){
//         console.log(a * b);
//     }else if(c === "%"){
//         console.log(a % b);
//     }else{
//         alert("Enter the right operator")
//     }
// }

// calculatorFunction()


// let squareValue = ()=>{
//     let square = parseInt(prompt("Enter the value you want square"))
//     return square ** 2
// }

// console.log(squareValue())

// let factorial = ()=>{
//     let userInput = parseInt(prompt("Enter the value"))
//     let result = 1

//     if (isNaN(userInput) || userInput < 0) {
//         alert("Please enter a valid positive number");
//         return;
//     }

//     for(let i = 1; i <= userInput; i++){
//         console.log(result *= i)
//     }


// }

// factorial();


// let countingNumber = ()=>{
//     let startNumber = parseInt(prompt("Enter the starting number"))
//     let endingNumber = parseInt(prompt("Enter the enfing number"))

//     for(let i = )
// }


// let capitilizeWord = ()=>{

//     let a = prompt("Enter the value")

//     let words = a.split( ' ')
    

//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
//     }
//     return words.join(' ')
// }

// console.log(capitilizeWord());

// let removeDoubleWord = ()=>{
//     // let takingInput = prompt("Enter the value")

//     let takingInput = "hello world hello saylani"
//     let converIntoArray = takingInput.split(' ')
    
//     let al = new Set(converIntoArray)

//     let result = Array.from(al).join(' ')
    
//     return result
// }

// console.log(removeDoubleWord());


// let removeDoubleWord = (array)=>{

//     let result = ''

//     for(let i = 0; i < array.length; i++){
//         if(array[i] !== array[i + 1]){
//             result += array[i] + ' '
//         }else{
//             i++
//         }
//     }

//     return result.trim()
// }

// let stringOfValue = "Hello this this is a rocket"
// let correctArray = stringOfValue.split(' ')
// let rightString = removeDoubleWord(correctArray)

// console.log(rightString);



// let vowelCount = (check)=>{
//     let vowel = ['a', 'e', 'i', 'o', 'u']

//     let result = 0

//     for(let i = 0; i < check.length; i++){
//         if(vowel.includes(check[i].toLowerCase())){
//             result++ 
//         }
//     }

//     return result
// }

// let string = "Hello this a class of real madrid"
// let vowelCheck = vowelCount(string)
// console.log(vowelCheck);


// let squareOfValue = (array)=>{

//     let result = []

//     for(let i = 0; i < array.length; i++){
//         result.push(array[i] ** 2)
//     }

//     return result
// }

// let numberOfValue = [2, 4, 6, 7, 9]

// let resultOfSqure = squareOfValue(numberOfValue)

// console.log(resultOfSqure);



let userInput = prompt("Enter the name")
let userInputForMarkSheet = parseInt(prompt("Enter your marks"))

switch(userInput && userInputForMarkSheet){
    case userInput:
        document.writeln(``)
}