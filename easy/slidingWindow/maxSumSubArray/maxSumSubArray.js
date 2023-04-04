const array = [9,3,5,6,7,4,2,4,5,6,7]
let window = 4

function maxSumSubArray(arr, n){
  // two pointers start and end, n apart
  // start start at index 0 (start end at n)
  let start = 0
  let end = n
  // slice the array using start and end, set to sum
  // for i between 0 and arr.length - n,
  let resArr=[]
  const slice = arr.slice(start, end)
  
  // the best way to add in javascript is with reduce, two arguments and a return statement that does prev + curr
  let sum = slice.reduce( (prev, curr) => { return prev + curr} ) 
  resArr.push(sum)
  let i=0
  while(end<arr.length+1){
    sum = sum - arr[start] + arr[end]
    resArr.push(sum)
    start += i
    end += i
    i++
  }
  // you gotta spread out the array to use Math.max because it takes just straight nums
  return Math.max(...resArr) 
}
console.log( maxSumSubArray(array,window) )
