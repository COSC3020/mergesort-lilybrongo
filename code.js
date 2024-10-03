function mergesort(array) {

    const array_length = array.length;

    for (let i = 1; i <= array_length; i = (2 * i)) {
        for (let j = 0; j < array_length - 1; j = (j + (2 * i))) {
            let middle = j + i - 1;
            let final = Math.min(j + 2 * i - 1, array_length - 1);
            let left = j;
            let right = middle + 1;

            while (left <= middle && right <= final) {
                if (array[left] > array[right]) {
                    let temp = array[right];
                    for (let k = right; k > left; k--){
                        array[k] = array[k - 1];
                    }
                    array[left] = temp;
                    left++;
                    right++;
                    middle++;
                } else {
                    left++;
                }
            }
        }
    }
    return array;
}
