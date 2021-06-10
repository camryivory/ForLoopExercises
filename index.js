/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.



    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//Exercise 1.A//

for (let i = 0; i < 21; i++) {
  console.log(i)
}

console.log("\n")

//Exercise 1.B//

for (let k = 3; k < 30; k++) {
  if (k % 2 !== 0) {
    console.log(k)
  }
}

console.log("\n")
//Exercise 1.C//

for (let j = 12; j > -15; j--){
  if (j % 2 === 0) {
    console.log(j)
  }
}

//Challenge//

for (let i = 50; i > 19; i--) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */


//Exercise 2.A//
let string = "LaunchCode"
let array = [1, 5, 'LC101', 'blue', 42]

for (let i = 0; i < (array.length); i++) {
  console.log(array[i])
}

//Exercise 2.B//

for (let i = string.length; i > -1 ; i--) {
  console.log(string[i])
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */




let newArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let oddArray = []
let evenArray = []

for (let i = 0 ; i < newArray.length; i++) {
  if (Number(newArray[i]) % 2 === 0){
    evenArray.push(newArray[i]) 

} else  {
  oddArray.push(newArray[i])
}
}
console.log(evenArray)
console.log(oddArray)


