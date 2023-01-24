function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Iterate through the string starting from the first and last characters
    let right = cleanStr.length - 1
    for (let left = 0; left < right; left++) {
        // If the current characters are not equal, it is not a palindrome
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        } else {
            right--
        }
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true