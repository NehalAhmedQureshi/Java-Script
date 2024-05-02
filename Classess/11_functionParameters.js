
let array = [3,5,6,7,8]

console.log(array);
console.log(array.length);
//  ---------------------------- length is not a function -------------------------

function average(myArray) {

      let sum = 0 

      for (let i = 0; i < myArray.length; i++) {

            sum += myArray[i]
            
      }

      return sum / myArray.length

}

console.log(average([2,4,5,6,7,6]));
console.log(average([2,4,5,6,7,6,10 , 40,100,1000]));

// let sum = (a,b) => {
//       return a+ b
// }                               

// console.log(sum(5));                    // -------------------- return ------------------ Nan

