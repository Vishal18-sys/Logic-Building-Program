        // Check the  number is prime or not

let num=6; 
let isPrime = true;

if(num<=1){
isPrime = true;
}else{

    for(let i=2; i<num; i++){

        if(num%i === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log(` The ${num} is Prime`)
}else{
    console.log(`The ${num} is Not a Prime`)
}