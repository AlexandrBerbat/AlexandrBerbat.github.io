// getTelArr by Vlad 29-12-2020

const getTelArr = (count) => {
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  let arrNumbers = []
  for (let i = 0; i < count; i++) {
    let arrCodes = [`050`, `066`, `095`, `099`, `039`, `067`, `096`, `097`, `098`, `063`, `073`, `091`, `092`, `094`, `070`, `080`, `090`]
    let codesNum = randomInteger(0, 16)
    let str = `${getRandomArbitrary(0, 9)}`
    let str2 = ''
      for (let i = 4; i < 11; i++) {
        str2 = `${str2}${str.charAt(i)}`
    }
    arrNumbers.push(`${arrCodes[codesNum]}${str2}`)
  }  
  return arrNumbers
}

module.exports = getTelArr;

// let arr = getTelArr(100)
// console.log(arr)
