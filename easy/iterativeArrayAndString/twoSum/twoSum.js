function twoSum(nums, target) {
    // Initialize an empty object
    let obj = {};
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // check if the complement (target - nums[i]) already exists in the object
        if (obj[target - nums[i]] !== undefined) {
            // If it does, return an array containing the index of the current element and the index of the complement
            return [obj[target - nums[i]], i];
        }
        // If not, add the current element and its index to the object
        obj[nums[i]] = i;
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]