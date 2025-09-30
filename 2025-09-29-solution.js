function multiply(n){
  let str = n.toString()
  let s = 0
  if (n < 0) s = 1
  return n*5**str.slice(s).length
}