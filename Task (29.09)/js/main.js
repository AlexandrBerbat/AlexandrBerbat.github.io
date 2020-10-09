let arr = [5, 23, -110, 3, 18, 0, 14,];
console.log("Исходный массив:");
console.log(arr);



console.log("Только нечетные элементы:");

const even = (item) => {
    if (item % 2 !== 0) {
        console.log(item);
    };
}
const out = arr.forEach(even);


console.log("Каждый элемент увеличен на 20:");

const add20 = (item) => {
    return item + 20;
}

const arrPlus20 = arr.map(add20);
console.log(arrPlus20);



console.log("Только положительные, нечетные числа:");

const posAndEven = (item) => {
    if (item >= 0 && item % 2 !== 0) {
        return item;
    }
    else {
        return null;
    }
}

let arrPosAndEven = arr.map(posAndEven);

for (let i = 0; i <= arrPosAndEven.length; i++) {
    if (arrPosAndEven[i] == null) {
        arrPosAndEven.splice(i, 1);
    }
}
arrPosAndEven.splice(arrPosAndEven.length - 1, 1);
console.log(arrPosAndEven);


console.log("Сумма остатков от деления на 3:");

let summ = arr.reduce((sum, item) => {
    return sum + item % 3;
}, 0);

console.log(summ);


console.log("Проверка на кратность элемента пяти:");

let multiplicityCheck = Boolean(arr.find(item => item%5 == 0));
console.log(multiplicityCheck);