function usdcny(usd) {
    let cny = usd
    cny *= 6.75
    cny = cny.toString()
    let dotPos = -1
    let index = 0
    while (dotPos == -1 && index < cny.length) {
        if (cny[index] == '.') dotPos = index
        index++
    }
    if (dotPos == -1) cny += '.00'
    else if (dotPos == cny.length - 2) cny += '0'
    cny += ' Chinese Yuan'
    return cny
}