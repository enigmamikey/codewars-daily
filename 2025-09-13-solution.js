function sortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] % 2 == 1 || array[i] % 2 == -1) {
            let index = findLowestOddIndex(i)
            swap(i,index)
        }
    }
    return array

    function swap(a,b) {
        let temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    function findLowestOddIndex(j) {
        let val = array[j]
        let index = j
        for (let i = j + 1; i < array.length; i++) {
            if ((array[i] % 2 == 1 || array[i] % 2 == -1) && array[i] < val) {
                index = i
                val = array[i]
            }
        }
        return index
    }
}