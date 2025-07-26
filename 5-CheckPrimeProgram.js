        // Print total Prime numbers between 1 and n
    
let count = 0;

console.log(`Print the Prime number b/w 2 to 30`)

for(let num = 2; num<=30; num++){
    isPrime = true;

    for(let i=2; i<=Math.sqrt(num); i++){

        if(num%i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(num);
        count++;
    }

}