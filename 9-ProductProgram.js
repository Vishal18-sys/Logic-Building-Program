        // Product Of Digit using Function 

function ProductOfDigit(num){

    let product = 1;

    while(num>1){

        let remainder = num % 10;
        product = product * remainder;
        num = parseInt(num/10);
    }
    return product;
}
console.log(ProductOfDigit(234));


        //  Product Of Digit using Loop
        
let num = 234;
let product = 1;

while(num>1){

    let remainder = num % 10;
    product = product * remainder;
    num = Math.floor(num/10);
    
}
console.log(product);