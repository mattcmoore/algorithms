function productExceptSelf(nums) {
    // Initialize an array to store the product of the elements before each index
    let productBefore = Array(nums.length).fill(1);
    // Initialize a variable to store the product of all the elements
    let product = 1;
    // Iterate through the array, starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update the product of the elements before the current index
        productBefore[i] = productBefore[i - 1] * nums[i - 1];
    }
    // Iterate through the array, starting from the second-to-last element
    for (let i = nums.length - 2; i >= 0; i--) {
        // Update the product of all the elements
        product *= nums[i + 1];
        // Update the current element in the result array
        productBefore[i] *= product;
    }
    return productBefore;
}
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([4, 3, 2, 1])); // Output: [6, 8, 12, 24]