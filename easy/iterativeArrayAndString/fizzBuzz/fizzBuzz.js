function fizzBuzz(n) {
    // Initialize an empty array to store the result
    var result = [];
    for (var i = 1; i <= n; i++) {
      // Check if i is divisible by 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        // Check if i is divisible by 3
        result.push("Fizz");
      } else if (i % 5 === 0) {
        // Check if i is divisible by 5
        result.push("Buzz");
      } else {
        // If none of the above conditions are true, push i as a string
        result.push(i.toString());
      }
    }
    return result;
  }
  
  console.log(fizzBuzz(15));