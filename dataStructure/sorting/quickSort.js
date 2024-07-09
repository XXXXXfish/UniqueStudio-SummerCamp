function quickSort(arr, left, right) {
    const {length} = arr;
    let pivot = arr[0];
    let minArr = arr.slice(1).filter(item=>item<=pivot);
    let maxArr = arr.slice(1).filter(item=>item>pivot);
    return quickSort(minArr).concat(pivot).concat(quickSort(maxArr));
}