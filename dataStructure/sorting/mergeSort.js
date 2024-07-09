function mergeSort(arr) {
    if (arr.length > 1) {
        const {length} = arr;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arr.slice(0, middle));
        const right = mergeSort(arr.slice(middle, length));
        arr = merge(left, right);
    }
    return arr;
}
function merge(left, right) {   
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(i < left.length? left.slice(i) : right.slice(j));
}