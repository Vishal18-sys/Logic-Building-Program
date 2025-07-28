        // Sum of Digit  using function

function SumOfDigit(num){

    let sum = 0;

    while(num>0){

        let remainder = num % 10;
        sum = sum +  remainder;
        num = parseInt(num/10); 

    }
    return sum;
}
console.log(SumOfDigit(456))

        // Sum of Digit  using loop
    
let num = 456;
let sum = 0;

while(num>0){

    let remainder = num % 10;
    sum = sum + remainder;
    num = Math.floor(num / 10);
}
console.log(sum);
