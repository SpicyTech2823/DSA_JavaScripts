// . Let's say that we want to find out the first 20 numbers
// of the Fibonacci sequence. The first two numbers of the Fibonacci sequence are 1 and 2, and
// each subsequent number is the sum of the previous two numbers:
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i]);
}
