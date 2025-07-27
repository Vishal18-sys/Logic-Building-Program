        // Check if a string is a Palindrome or not

//let str1 = "vinod" 
let str = "racecar";
let reverseStr = "";

for(let i=str.length-1; i>=0; i--){

    reverseStr = reverseStr + str[i]
}

if(str1 === reverseStr){
    console.log(`${str} is a Palindrome`)
}else{
    console.log(`${str} is not a Palindrome`)
}