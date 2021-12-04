var output = [];
function addNumber() {
    var arrayLength = output.length;
    if ((arrayLength + 1) % 3 === 0 && (arrayLength + 1) % 5 === 0) {
        output.push("FizzBuzz");
    } else if ((arrayLength + 1) % 5 === 0) {
        output.push("Buzz");
    } else if ((arrayLength + 1) % 3 === 0) {
       output.push("Fizz");
    } else {
        output.push(arrayLength + 1);
    }
    console.log(output);
}

addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
addNumber();
