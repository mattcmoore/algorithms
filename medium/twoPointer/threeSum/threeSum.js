function threeSum(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    // Initialize an array to store the triplets
    let triplets = [];
    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // Initialize two pointers, one starting from the next element and the other from the last element
        let j = i + 1, k = nums.length - 1;
        // Iterate through the remaining elements
        while (j < k) {
            // Check if the current triplet sums to 0
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                // Push the triplet to the result array
                triplets.push([nums[i], nums[j], nums[k]]);
                // Skip duplicate elements
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                // Move the left pointer to the right
                j++;
            } else {
                // Move the right pointer to the left
                k--;
            }
        }
    }
    return triplets;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([1, 2, 3, 4, 5, 6])