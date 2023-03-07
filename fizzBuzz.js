

/* 
Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/

for(let i = 1; i < 101; i++){
    // if(i % 3 == 0 && i % 5 == 0){ //we should start with the most specific condition first, and less specific, less specific and so on
    //     console.log("FizzBuzz");
    // } //we know that is a number is divisible by 5 and 3, it is grunted to be divisible by 15 (based of Math) so we can rewrite this like so.
    if(i % 15 == 0){
        console.log("FizzBuzz");
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

