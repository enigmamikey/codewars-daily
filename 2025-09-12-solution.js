function digPow(n, p){
    let str = n.toString()
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])**(p+i)
    }
    let k = 0
    while (sum >= k*n) {
        if (sum == k*n) return k
        k++
    }
    return -1
}