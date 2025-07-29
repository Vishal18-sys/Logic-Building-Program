
        // Sum Of Even Digits of a Number

function SumOfEvenDigit(num){

    let sum = 0;

    while(num>0){

        let digit = num % 10;

        if(num%2 == 0){
            sum = sum + digit;
        }
        num = parseInt(num/10);
    }
    return sum;
}
console.log(SumOfEvenDigit(268739));