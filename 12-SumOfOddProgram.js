
        //  Sum Of Odd Digits of a Number

function SumOfOdd(num){

    let sum = 0;

    while(num>0){

        let digit = num % 10;

        if(num%2 !== 0){
            sum = sum + digit;
        }
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(SumOfOdd(23568791));