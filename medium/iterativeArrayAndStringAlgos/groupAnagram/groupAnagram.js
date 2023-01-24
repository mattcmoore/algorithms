function groupAnagrams(strs) {
    // Initialize an object to store the anagrams
    let groups = {};
    // Iterate through the array of strings
    for (let i = 0; i < strs.length; i++) {
        // Sort the characters in the string
        let sorted = strs[i].split('').sort().join('');
        // If the sorted string is not in the object, add it as a key and initialize its value as an array
        if (!groups[sorted]) {
            groups[sorted] = [strs[i]];
        } else {
            // If the sorted string is already in the object, push the original string to its value array
            groups[sorted].push(strs[i]);
        }
    }
    // Return the values of the object
    return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]