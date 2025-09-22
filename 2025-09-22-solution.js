function mix(s1, s2) {
  class letter{
      constructor(v1,v2,val) {
          this.v1 = v1
          this.v2 = v2
          this.value = val
      }
      num() {
        if (this.v1 > this.v2) return 0
        if (this.v2 > this.v1) return 1
        return 2
      }
  }
  const alphaVal = (s) => s.charCodeAt(0) - 96

  let obj = {}
  let characters = ['1','2','=']
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i]
    let charNum = alphaVal(char)
    if (charNum > 0 && charNum < 27) {
      if (obj[char]) obj[char].v1++
      else obj[char] = new letter(1,0,char)
    }
  }
  for (let i = 0; i < s2.length; i++) {
    let char = s2[i]
    let charNum = alphaVal(char)
    if (charNum > 0 && charNum < 27) {
      if (obj[char]) obj[char].v2++
      else obj[char] = new letter(0,1,char)
    }
  }
  for (key in obj) if (obj[key].v1 < 2 && obj[key].v2 < 2) delete obj[key]
  let str = ''
  let val
  while (Object.keys(obj).length > 0) {
    val = findNext()
    str += characters[obj[val].num()] + ':'
    for (let i = 0; i < findMax(val); i++) {
      str += obj[val].value
    }
    delete obj[val]
    if (Object.keys(obj).length != 0) str += '/'
  }
  return str

  function findMax(val) {
    if (obj[val].v1 > obj[val].v2) return obj[val].v1
    return obj[val].v2
  }

  function findNext() {
    let keys = Object.keys(obj)
    let index = 0
    let val = keys[index]
    let num = bigger(index)
    for (let i = 1; i < keys.length; i++) {
      let trump = false
      if (bigger(i) > num) trump = true
      else if (bigger(i) == num) {
        if (obj[keys[i]].num() < obj[keys[index]].num()) trump = true
        else if (obj[keys[i]].num() == obj[keys[index]].num() && keys[i] < keys[index]) trump = true
      }
      if (trump) {
        val = keys[i]
        num = bigger(i)
        index = i
      }
    }
    return val

    function bigger(j) {
      let x = obj[keys[j]].v1
      let y = obj[keys[j]].v2
      if (x > y) return x
      return y
    }
  }
}