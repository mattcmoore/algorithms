function isUnique(str) {
    const set = new Set()
    for(let i = 0; i < str.length; i++) {
        let current = str[i]
        if(set.has(current)) {
            return false
        }
        set.add(current)
    }
    return true
}

function longest(str) {
    let max = 0

    for(let start = 0; start < str.length; start++) {
        for(let end = start; end < str.length; end++) {
            const substring = str.substring(start, end + 1)
            if(isUnique(substring)) {
                max = Math.max(max, substring.length)
            }
         }
    }
    return max
}

const str = 'abcabcab'
console.log(longest(str))