function longestSubstring(s, k) {
    // Initialize variables to keep track of the current substring and the maximum length
    let start = 0;
    let maxLength = 0;
    // Create an object to store the frequency of each character in the substring
    let freq = {};
  
    // Iterate through the string, keeping track of the end of the current substring
    for (let end = 0; end < s.length; end++) {
      // Add the current character to the frequency object
      freq[s[end]] = (freq[s[end]] || 0) + 1;
  
      // Check if the number of characters with a frequency less than k exceeds k
      if (Object.values(freq).filter(f => f < k).length > k) {
        // Remove the character at the start of the substring from the frequency object
        freq[s[start]]--;
        // Move the start of the substring to the next character
        start++;
      } else {
        // Update the maximum length if the current substring is longer
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
    return maxLength;
  }