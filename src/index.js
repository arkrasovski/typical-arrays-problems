exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    let minEl = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minEl) {
            minEl = array[i];
        }
    }

    return minEl;
};

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    let maxEl = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxEl) {
            maxEl = array[i];
        }
    }
    return maxEl;
};

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};
