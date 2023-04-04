const h1 = { id: 1, name: 'Foo', context: 0 };
const h2 = { id: 2, name: 'Bar', context: 0 };
const h3 = { id: 3, name: 'Foo', context: 1 };
const h4 = { id: 4, name: 'Baz', context: 2 };
const haystack = [h1, h2, h3, h4];

const n1 = { id: 1, name: 'Baz', context: 0 };
const n2 = { name: 'Foo', context: 1 };
const n3 = { name: 'Bar', context: 0 };
const n4 = { name: 'Baz', context: 1 };
const needles = [n1, n2, n3, n4];

let findMatches = (needles, haystack) => {
  let result = []
  let match = null 
  let matches = []
  for(let i=0;i<needles.length;i++){
    match = haystack.find(obj=> obj.id === needles[i].id ||
    obj.name === needles[i].name &&
    obj.context === needles[i].context)
    if(match === undefined){
      match=null
    }
    result = [needles[i], match]
    matches.push(result)
  }
  return matches
  // return result      
} 
 

const compare = (left, right) => {
  return JSON.stringify(left) === JSON.stringify(right);
};


console.log(findMatches(needles, haystack));

