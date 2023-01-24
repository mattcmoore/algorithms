function longestConsecutive(nums) {
    // Initialize a set to store the elements
    let set = new Set(nums);
    // Initialize a variable to store the maximum length
    let maxLength = 0;
    // Iterate through the set
    for (let num of set) {
        // If the current element - 1 is not in the set, it means it is the starting element of a sequence
        if (!set.has(num - 1)) {
            // Initialize a variable to store the current length
            let length = 1;
            // Iterate through the consecutive elements
            while (set.has(num + 1)) {
                num++;
                length++;
            }
            // Update the maximum length if the current length is greater
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9