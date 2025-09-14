function comp(a,b){
    if (a == null || b == null) return false
    if (a.length != b.length) return false
    let vars = {}
    for (let i = 0; i < a.length; i++) {
        if (vars[a[i]]) vars[a[i]].a++
        else vars[a[i]] = {a: 1, b: 0}
        if (vars[b[i]**0.5]) vars[b[i]**0.5].b++
        else vars[b[i]**0.5] = {a: 0, b: 1}
    }
    for (keys in vars) if (vars[keys].a != vars[keys].b) return false
    return true
}