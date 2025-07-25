        // Sum of all even numbers between 1 to n

let num = 20;
let sum = 0;

for(let i=1; i<=num; i++){

    if(i%2 == 0){
        sum = sum + i; 
    }
}
console.log(`Sum of all even numbers from 1 to ${num} is ${sum}`)

        // Same as  Sum of all Odd numbers between 1 to n

let n = 20;
let sum1 = 0;

for(let i=1; i<=n; i++){

    if(i%2 !== 0){
        sum1 = sum1 + i;
    }
}
console.log(`Sum of all odd numbers from 1 to ${n} is ${sum1}`)
