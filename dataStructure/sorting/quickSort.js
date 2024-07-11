function quickSort(arr) {
    const {length} = arr;
    if (length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let minArr = arr.slice(1).filter(item=>item<=pivot);
    let maxArr = arr.slice(1).filter(item=>item>pivot);
    arr = quickSort(minArr).concat(pivot).concat(quickSort(maxArr));
}