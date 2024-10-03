function mergesort(array) {

    const array_length = array.length;

    for (let i = 1; i <= array_length; i = (2 * i)) {
        for (let j = 0; j < array_length - 1; j = (j + (2 * i))) {
            let middle = j + i - 1;
            let x = Math.min(j + 2 * i - 1, array_length - 1);
            let lo = j;
            let hi = middle + 1;

            while (lo <= middle && hi <= x) {
                if (array[lo] > array[hi]) {
                    let value = array[hi];
                    for (let k = hi; k > lo; k--){
                        array[k] = array[k - 1];
                    }
                    array[lo] = value;
                    lo++;
                    hi++;
                    middle++;
                } else {
                    lo++;
                }
            }
        }
    }
    return array;
}
