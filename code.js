function mergesort(array) {

    const array_length = array.length;

    for (let i = 1; i <= array_length; i = (2 * i)) {
        for (let j = 0; j < array_length - 1; j = (j + (2 * i))) {
            let middle = j + i - 1;
            let final = Math.min(j + 2 * i - 1, array_length - 1);
            let left_Index = j;
            let right_Index = middle + 1;

            while (left_Index <= middle && right_Index <= final) {
                if (array[left_Index] > array[right_Index]) {
                    let value = array[right_Index];
                    for (let k = right_Index; k > left_Index; k--){
                        array[k] = array[k - 1];
                    }
                    array[left_Index] = value;
                    left_Index++;
                    right_Index++;
                    middle++;
                } else {
                    left_Index++;
                }
            }
        }
    }
    return array;
}
