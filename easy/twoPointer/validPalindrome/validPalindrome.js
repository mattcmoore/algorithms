
const palindrome = "amanaplanacanalpanama"
const notPalindrome = "raceacar"

function isPalindrome(str) {
  if (str.length % 2 === 0) {
    let result = true
    let left = str.length / 2
    let right = (str.length / 2) + 1
    while (left > 0, right < str.length) {
      if (str[left] === str[right]) {
        left--
        right++
      } else {
        result = false
      }
    }
    return result
  } else {
    let result = true
    const start = Math.ceil(str.length / 2)
    console.log(start)
    return result
  }
}

console.log(isPalindrome(notPalindrome))