function encode(string) {
  let str = ''
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
        case 'a': str += '1'; break;
        case 'e': str += '2'; break;
        case 'i': str += '3'; break;
        case 'o': str += '4'; break;
        case 'u': str += '5'; break;
        default: str += string[i]
    }
  }
  return str
}

function decode(string) {
  let str = ''
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
        case '1': str += 'a'; break;
        case '2': str += 'e'; break;
        case '3': str += 'i'; break;
        case '4': str += 'o'; break;
        case '5': str += 'u'; break;
        default: str += string[i]
    }
  }
  return str
}