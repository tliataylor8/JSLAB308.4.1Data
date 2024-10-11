// P1 Fizzbuzz loops (taken from practical loops lab)
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//P2
// thisArr = ['ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'];
// let newArr = thisArr.map(Number);
// console.log(newArr)

// // 
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function findPrimes(limit) {
//     const primes = [];
//     for (let num = 2; num <= limit; num++) {
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//     }
//     return primes;
// }
// //Find prime numbers up to 100
// const primeNumbers = findPrimes(100);
// console.log(primeNumbers);

let n = 1;
while (true) {
  n++;
  let isPrime = true;
  let div = 2;
  while (div <= n / 2) {
    if (n % div === 0) {
      isPrime = false;
      break;
    }
    div++;
  }
  if (isPrime) {
    console.log(n);
    break;
  }
}



//P3
function yepCSV(csvString) {
    let rows = csvString.split('\n'); 
    for (let row of rows) {
      let cells = row.split(','); 
      if (cells.length === 4) {
        console.log(cells[0], cells[1], cells[2], cells[3]);
      } else {
        console.log(...cells); 
      }
    }
  }
  let csvString1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
  console.log("First CSV:");
  yepCSV(csvString1);
  let csvString2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
  console.log("\nSecond CSV:");
  yepCSV(csvString2);
  