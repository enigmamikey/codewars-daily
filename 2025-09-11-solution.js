function tribonacci(signature,n){
  let arr = []
  if (n >= 3) {
    for (let i = 0; i <= 2; i++) {
      arr[i] = signature[i]
    }
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
    }
  }
  else {
    for (let i = 0; i < n; i++) {
      arr[i] = signature[i]
    }
  }
  
  return arr
}