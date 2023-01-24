function isAnagram(s, t) {
    // If the lengths of the two strings are different, return false
    if (s.length !== t.length) {
      return false;
    }
    // Create an object to store the frequency of each character in s
    const sFrequency = {};
    // Iterate through s and add each character to the object
    for (let i = 0; i < s.length; i++) {
      if (sFrequency[s[i]]) {
        sFrequency[s[i]]++;
      } else {
        sFrequency[s[i]] = 1;
      }
    }
    // Iterate through t
    for (let j = 0; j < t.length; j++) {
      // If the character is not in the object or its frequency is 0, return false
      if (!sFrequency[t[j]] || sFrequency[t[j]] === 0) {
        return false;
      }
      // Decrement the frequency of the character in the object
      sFrequency[t[j]]--;
    }
    // If the function has not returned yet, return true
    return true;
  }
  
  console.log(isAnagram("anagram", "nagaram")); // Output: true
  console.log(isAnagram("rat", "car")); // Output: false