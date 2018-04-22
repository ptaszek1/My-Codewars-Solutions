function solution(nums){
    function count(a, b) {
        return a - b;
    }
    if (nums === null) {
        return [];
    } else {
        return nums.sort(count)
    }
}