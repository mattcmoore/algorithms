const validParens = (str) => {
    let stack = [];
    let map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] in map) {
        stack.push(str[i]);
      } else {
        let popped = stack.pop();
        if (str[i] !== map[popped]) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  };

  const str = ')('

  console.log(validParens(str))

