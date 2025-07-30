
        //  factor of a Number using loop

let num = 10;

for(let i=1; i<=num; i++){
    if(num%i == 0){
        console.log(i)
    }
}

    //  factor of a Number using function 

function factor(num){

    for(let i=1; i<=num; i++){
        if(num%i == 0){
            console.log(i);
        }
    }
}
console.log(factor(10));