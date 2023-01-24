const lengthOfLongestSubstring = (s) => {
    // Initialize variables to keep track of the max length and current length of the substring
    let maxLength = 0;
    let currentLength = 0;
  
    // Create a Map to store the last position of each character in the current substring
    let charMap = new Map();
  
    // Iterate through each character in the input string
    for (let i = 0; i < s.length; i++) {
      // Check if the current character has already been seen
      if (!charMap.has(s[i])) {
        // If the character has not been seen, add it to the map with its current position
        charMap.set(s[i], i);
        // Increase the current length of the substring
        currentLength++;
        // Update the max length if the current length is greater
        maxLength = Math.max(maxLength, currentLength);
      } else {
        // If the character has been seen before, update the index to start after the last occurrence of that character
        i = charMap.get(s[i]);
        // Clear the map and reset the current length
        charMap.clear();
        currentLength = 0;
      }
    }
  
    // Return the max length of the substring
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (longest substring is "abc")
  console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (longest substring is "b")
  
  
  
  
  