function solution(nums){
    if (nums == null) return []
  
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i]
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i]
        let index = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                index = j
            }
        }
        swap(index,i)
    }
    return arr

    function swap(a,b) {
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
}