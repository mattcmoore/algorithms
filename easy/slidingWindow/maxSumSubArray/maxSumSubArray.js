function maxSumSubarray(arr, windowSize) {
    let maxSum = 0;
    let windowSum = 0;
    let start = 0;
    let end = 0;
    while (end < arr.length) {
      windowSum += arr[end]; // adding the element to the window
      if (end >= windowSize - 1) {
        maxSum = Math.max(maxSum, windowSum); // update maxSum if the current window sum is greater
        windowSum -= arr[start]; // remove the start element from the window
        start++; // move the start pointer to the next element
      }
      end++; // move the end pointer to the next element
    }
    return maxSum;
  }
  
const arr = [2,3,1,4,6,22,33,7,9,11] 
const size = 3

console.log(maxSumSubarray(arr, size))
  