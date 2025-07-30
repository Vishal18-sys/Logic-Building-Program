    
    // Sum of factors of a number using loop

let num = 10;
let sum = 0;

for(let i=1; i<=num; i++){
    if(num%i == 0){
        sum = sum + i;
        //console.log(i);
    }
}
console.log(sum);

    // Sum of factors of a number using function

function factor(num){

    let sum = 0;
     
    for(let i=1; i<=num; i++){
        if(num%i == 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(factor(10))