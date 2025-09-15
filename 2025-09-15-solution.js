function expandedForm(num) {
  let str = ''
  let string = num.toString()
  for (let i = 0; i < string.length; i++) {
    if (string[i] != 0) {
      if (str.length != 0) str += ' + '
      str += string[i]
      for (let j = 0; j < string.length - 1 - i; j++) {
        str += '0'
      }
    }
  }
  return str
}