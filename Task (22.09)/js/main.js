// let goBtnEl = document.querySelector(".goBtn");
// let mainEl = document.querySelector(".main");


// function bubbleSort(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//       for (let i = 0; i < j; i++) {
//         if (arr[i].length > arr[i + 1].length) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//         }
//       }
//     }
//   }

// goBtnFun = () => {

//     let textAreaEl = document.querySelector(".text");
//     let tempArr = textAreaEl.value.split(/[.,\/ -]/);
//     mainEl.innerHTML = "";

//     for (let i = 0; i < tempArr.length; i++) {
//         if (tempArr[i] == "" || tempArr[tempArr.length-1] == null) {
//             tempArr.splice(i, 1);
//         }
//         mainEl.innerHTML += `<input class=\"word\" value="${tempArr[i]}">`;
//     }


//     bubbleSort(tempArr);
//     tempArr.reverse();

//     console.log(`Самое длинное слово: ${tempArr[0]}`);



// }


// goBtnEl.addEventListener("click", goBtnFun);


//Во флотах 4 типа кораблей: эсминцы hp 2 dmg , линкоры hp 9 dmg 4, авианосцы hp 5 dmg 3, крейсеры hp 6 dmg 8.



var isNumber = function isNumber(value) 
{
   return typeof value === 'number' && isFinite(value);
}



let str = "Во флотах 4 типа кораблей: эсминцы hp 2 dmg , линкоры hp 9 dmg 4, авианосцы hp 5 dmg 3, крейсеры hp 6 dmg 8."

let arr = [];
let arrInd = 0;

for (let i = 0; i < str.length; i++) {
  if (Number(str[i])) {
    arr.push(str[i]);
    arrInd++;
  }
}

console.log(arr);

parseInt(str);
console.log(str);

