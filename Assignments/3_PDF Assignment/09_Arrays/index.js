//  ******************************** Question 1 *********************************

let studentNames = []
let string = ["Alphabets", "Math", "English", "Urdu"];
let number = [1, 2, 3, 4, 5, 6];
let boolean = [true, false];
let mixed = ["String", 22, 34, true, false];
let qualification = ["SSC", "HSC", "BCS", "BS", " BCOM", " MS", " M.Phil", "PhD"];

console.log(qualification);
//  ******************************** Question 10 *********************************

let studentScore =[223,344,123,343,];

// console.log(studentScore);

function one (){
    // studentScore.push(prompt("Enter Students Score: "))
}
one()

console.log(studentScore);
studentScore.sort()
console.log(studentScore);

//  ******************************** Question 11 *********************************
const printCityName = document.querySelector("#citiesNames")
const printSelectedCity = document.querySelector("#selectedCities")


let cities = ['Karachi','Lahore','Islamabad','Hyderabad','Peshawar']

let citiesName = (cities);

let selectedCities =(cities.slice(1,4))

// console.log(cities);

printCityName.innerHTML = citiesName;
printSelectedCity.innerHTML = selectedCities;