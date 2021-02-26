let startArr = [1, 2, 3, 77, 44, 40, 22, 905, 49, 88, 0, 2, 6, 908, 81, 82, 90];
let startStr = "мама мыла раму мимо шмыгнула мышь зеленая аминь";
console.log("String: ", startStr);

function swap(arr, i, j) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}

function bubbleSort(arr) {

    for (let q = 0; q < arr.length - 1; q++) {
        for (let k = 0; k < arr.length - 1 - q; k++) {
            if (arr[k] > arr[k + 1]) {

                swap(arr, k, k + 1)
            }
        }
    }
    return arr;
};



function shakerSort(arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        right -= 1;

        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            }
        }
        left += 1;
    }

    return arr;
}

// console.log("пузырек:", bubbleSort(startArr));
// console.log("шейкер", shakerSort(startArr));

// function allWordsStartsAt(str, char) {
//     let splittedStr = str.split(" ");
//     let result = [];

//     for (let i = 0; i < splittedStr.length; i++) {
//         if (splittedStr[i].startsWith(char)) {
//             result.push(splittedStr[i]);
//         }
//     }

//     return result;
// }

// console.log(allWordsStartsAt(startStr, "м"))

function findWordWithCharCombo(str, charCombo) {
    let splittedStr = str.split(" ");
    let result = [];

    for (let i = 0; i < splittedStr.length; i++) {
        if (splittedStr[i].match(/[А-Яа-я]*ам[А-Яа-я]*/)) {
            result.push(splittedStr[i]);
        }
    }

    return result;

}

// console.log(findWordWithCharCombo(startStr, "ам"))

// for(let )


let temp = startStr.match(/[А-Яа-я]*ам[А-Яа-я]*/ig);

console.log("Результат: ", temp);