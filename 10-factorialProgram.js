        //  Factorial Program  using loop
        
let num = 5;
let factorial = 1;

for(let i=1; i<=num; i++){

    factorial = factorial * i;
}
console.log(` The ${num} of factorial is ${factorial}`);

        //  Factorial Program  using function

function Factorial(num){

        let factorial = 1;

        for(let i=1; i<=num; i++){

            factorial = factorial * i;
            console.log(`the fact is ${factorial}`)
        }
        return factorial;
}
console.log(Factorial(6));