let startStr = "мама мыла раму мимо шмыгнула мышь зеленая по делам своим";

console.log("Начальная строка: ", startStr);


// №1 в строке "мама мыла раму" регуляркой найти все слова, в которых есть последовательность "ам".

let wordsArr = startStr.match(/[А-Яа-я]*ам[А-Яа-я]*/ig);
console.log("Слова, содержащие \"ам\": ", wordsArr)


// №2 написать алгоритм поиска слов из строки выше, которые начинаются на букву "м", вывести в массив. Использовать только проверку символа(charAt), циклы, операции сравнения. Результат предоставить в виде функции. 

let wordsWhichStartsAt = (str, char) => {

    let resultWordsArr = [];

    let wordIsScanning = false; // начался ли набор букв в слово
    let isThatABeginning = true; // является ли символ началом слова
    let currWord = "";

    for (let i = 0; i < str.length; i++) {

        let currChar = str.charAt(i); // символ строки на текущей итерации цикла

        if (currChar == char && wordIsScanning == false && isThatABeginning == true) wordIsScanning = true; // начинаем набор букв в слово, т.к. обнаружен подходящий символ и это начало слова

        if (currChar == " ") {

            if (wordIsScanning == true) wordIsScanning = false; // остановка набора букв в слово, обнаружен " "
            isThatABeginning = true; // начало следущего слова не за горами

        } else {
            isThatABeginning = false; // все еще слово...
        }

        if (wordIsScanning) {   // запуливаем буквы в слово, пока разрешают
            currWord += currChar;
        } else {
            if (currWord !== "") resultWordsArr.push(currWord); // набор букв закончился, кидаем слово в массив
            currWord = "";
        }
    }

    return resultWordsArr;
}

console.log("Слова, начинающиеся на \"м\": ", wordsWhichStartsAt(startStr, "м"));