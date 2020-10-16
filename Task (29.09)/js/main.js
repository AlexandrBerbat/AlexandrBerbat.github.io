let arr = [5, 23, -110, 3, 18, 0, 14,];
console.log("Исходный массив:");
console.log(arr);
/*
_a.Вывести в консоль только нечетные числа; 
_b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 
_c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 
_d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. 
_e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5. */


console.log("a)Только нечетные элементы:");

const even = (item) => {
    if (item % 2 !== 0) {
        console.log(item);
    };
}
const out = arr.forEach(even);

////////////////////////////////////////////////////////////


console.log("b)Каждый элемент увеличен на 20:");

const add20 = (item) => {
    return item + 20;
}

const arrPlus20 = arr.map(add20);
console.log(arrPlus20);

////////////////////////////////////////////////////////////



console.log("c)Только положительные, нечетные числа:");

let arrPosAndEven = arr.filter(item => (item >= 0 && item % 2 !== 0));
console.log(arrPosAndEven);

////////////////////////////////////////////////////////////



console.log("d)Сумма остатков от деления на 3:");

let summ = arr.reduce((sum, item) => {
    return sum + item % 3;
}, 0);

console.log(summ);

////////////////////////////////////////////////////////////


console.log("e)Проверка на наличие 5:");

let multiplicityCheck = arr.includes(5);
console.log(multiplicityCheck);