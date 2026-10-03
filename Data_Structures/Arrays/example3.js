var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9); // push at the end array
numbers.shift(); // remove first element in array
numbers.splice(3, 2) // remove specific index
for(var i =0; i < numbers.length; i++){
    console.log(numbers[i]);
}
