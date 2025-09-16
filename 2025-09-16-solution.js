function longestConsec(strarr, k) {
  let maxString = ''
  for (let i = 0; i < strarr.length - k + 1; i++) {
    let str = ''
    for (let j = i; j < i + k; j++) {
      str += strarr[j]
    }
    if (str.length > maxString.length) maxString = str
  }
  return maxString
}