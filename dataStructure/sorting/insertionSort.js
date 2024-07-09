function insertionSort(arr) {
    const {length} = arr;
    let temp;
    for (let i = 1; i < length; i++) {
        temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    insertionSort([4, 5, 2, 8, 3, 1, 9, 6, 0, 7])
    function display() {
        getElementById("result").innerHTML = arr.join(", ");
    }
    console.log(arr);
}