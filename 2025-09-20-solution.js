function toBinary(n){
    if (n == 0) return 0
    let pow = 0
    while (2**pow < n) pow++
    if (2**pow != n) pow--
    let str = ''
    let num = n
    for (let i = pow; i >= 0; i--) {
        let exp = 0
        if (2**i <= num) exp = 1
        str += exp.toString()
        num -= exp*2**i
    }
    return Number(str)
}