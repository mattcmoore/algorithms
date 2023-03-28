function hasPermutation(s1, s2) {
    const charCount1 = {};
    // We then iterate through s1, and increment the count for each character in charCount1.
    for (let i = 0; i < s1.length; i++) {
      charCount1[s1[i]] = (charCount1[s1[i]] || 0) + 1;
    }
    // We set the window size to the length of s1.
    const windowSize = s1.length;
    console.log(`windowsize: ${windowSize}`)
    // We then iterate through s2 using a sliding window of size windowSize.
    for (let i = 0; i < s2.length - windowSize + 1; i++) {
      // We create a new empty object charCount2 to store the count of characters in the current substring of s2.
      const charCount2 = {};
      // We iterate through the current substring of s2 and increment the count for each character in charCount2.
      for (let j = i; j < i + windowSize; j++) {
        charCount2[s2[j]] = (charCount2[s2[j]] || 0) + 1;
      }
      console.log(s2[i])
    }
}

const s1 = "ab"
const s2 = 'abcdefg'
console.log(hasPermutation(s1, s2))