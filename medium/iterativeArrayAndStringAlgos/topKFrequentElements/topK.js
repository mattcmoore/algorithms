function topKFrequent(nums, k) {
    // Initialize an object to store the frequency of each number
    let freq = {};
    // Iterate through the array
    for (let num of nums) {
        // If the number is not in the object, add it as a key and initialize its value as 1
        if (!freq[num]) {
            freq[num] = 1;
        } else {
            // If the number is already in the object, increment its value
            freq[num]++;
        }
    }
    // Create an array of arrays, where each sub-array contains a number and its frequency
    let freqArr = Object.entries(freq);
    // Sort the array by frequency in descending order
    freqArr.sort((a, b) => b[1] - a[1]);
    // Initialize an empty array to store the k most frequent elements
    let res = [];
    // Iterate k times and push the number from the first k sub-arrays to the result array
    for (let i = 0; i < k; i++) {
        res.push(+freqArr[i][0]);
    }
    return res;
}
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Output: [1, 2]
console.log(topKFrequent([1,1,1,2,2,3,3,3,3], 1)); // Output: [3]