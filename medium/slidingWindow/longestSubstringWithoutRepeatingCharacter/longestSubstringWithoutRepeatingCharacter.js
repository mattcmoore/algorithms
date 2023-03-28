// const lengthOfLongestSubstring = (s) => {
//   // create a map to store the character and its index in the string
//   let map = new Map();
//   // create a variable to store the start of the current substring
//   let start = 0;
//   // create a variable to store the length of the longest substring
//   let maxLen = 0;
//   // loop through the string s
//   for (let i = 0; i < s.length; i++) {
//     // if the current character exists in the map and the index is greater than start
//     if (map.has(s[i]) && map.get(s[i]) >= start) {
//       // update the start to be the index of the current character + 1
//       start = map.get(s[i]) + 1;
//     }
//     // update the map with the current character and its index
//     map.set(s[i], i);
//     // update the length of the longest substring
//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   // return the length of the longest substring
//   return maxLen;
// };
  
//   console.log(lengthOfLongestSubstring("abcdefgaaaabb")); // Output: 3 (longest substring is "abc")
  
  
  
  
  
//   // The time complexity of this solution is O(n) where n is the length of the input string s. The idea is to use a sliding window approach and use a map to store the character and its index in the string. As we iterate through the string, if the current character already exists in the map and its index is greater than the start of the current substring, we update the start of the current substring to be the index of the current character + 1. We then update the map with the current character and its index and update the length of the longest substring.










// const garrettsHouse = {
//   rooms: 4,
//   bathrooms: 3,
//   footage: 2500,
//   price: 500
// }

// const mikeysHouse = {
//   rooms: 5,
//   bathrooms: 4,
//   footage: 3500,
//   price: 700
// }

// const sarahHouse = {
//   rooms: 10,
//   bathrooms: 8,
//   footage: 5000,
//   price: 1000
// }

class House {
  constructor(rooms, bathrooms, footage, price) {
    this.rooms = rooms, 
    this.bathrooms = bathrooms,
    this.footage = footage,
    this.price = price
  }

  getSqFootage() {
    return this.footage
  }
}

const garrettsHouse = new House(4, 3, 2500, 500)
const kittrellsHouse = new House(4, 3, 2500, 500)
console.log(garrettsHouse.getSqFootage())




// {
//   rooms: x,
//   bathrooms: x,
//   footage: x,
//   price: x
// }























