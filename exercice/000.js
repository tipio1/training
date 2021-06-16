// Log the even (pair) numbers from 0 to 1000

// Check if a number is even => IF
// same as number divisible by 2 => MODULO
    // Operators : + (addition) - (soustraction) * (multiplication) / (division) % (modulo)
// Count from 0 to 10 => FOR

console.log('hello world 000');

// Check if a number is even => IF
let i = 277;
    console.log(i);
if (i % 2 === 0){
    console.log(true);
    console.log("even");
} else {
    console.log(false);
    console.log("odd");
}

// Count from 0 to 10 => FOR
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// Display odd numbers between 0 and 10 => FOR
for(let i = 1; i <= 10; i+=2){
    console.log(i + " - odd number");
}
