let request = require('request');
let moment = require('moment');
let URL = 'https://auto.ria.com/uk/search/?category_id=1&marka_id=2233&model_id=0&city%5B0%5D=0&state%5B0%5D=0&s_yers%5B0%5D=0&po_yers%5B0%5D=0&price_ot=&price_do=';


const searchStr1 = `" > <span class="blue bold">`;
const searchStr2 = `<span class="bold green size22" data-currency="USD">`;
const searchStr3 = `<span data-currency="UAH">`

let resultArr = [];




function arrToCsv(arr)
{
    let svgString = "";

    for(let i = 0; i < arr.length; i++)
    {
        for(let a = 0; a < arr[i].length; a++)
        {
            if(typeof(arr[i][a]) == "string")
            {
                svgString += `"${arr[i][a]}";`
            }else {
                svgString += arr[i][a]+";";
            }
        }
        svgString += "\r\n";
    }
    return svgString;

}

request(URL, (err, res, body) => {

    resultArr = parseCars(body);
    let csvStr = arrToCsv(resultArr);
    console.log(csvStr);

});

function findIndex(bodyStr, searchStrI) {
    let tempIndex = [];
    let q = 1;
    tempIndex[0] = bodyStr.indexOf(searchStrI);
    let prevIndex = tempIndex[0];

    do {
        tempIndex[q] = bodyStr.indexOf(searchStrI, prevIndex + 1);
        prevIndex = tempIndex[q];
        q += 1;
    } while (bodyStr.indexOf(searchStrI, prevIndex + 1) !== -1);

    return tempIndex;
}


function parseCars(body)
{
    let results = [];

    let tempIndexNameYear = findIndex(body, searchStr1);
    let tempIndexPriceUsd = findIndex(body, searchStr2);
    let tempIndexPriceUah = findIndex(body, searchStr3);

    for (let i = 0; i < tempIndexNameYear.length; i++) {
        let tempStartConcat = tempIndexNameYear[i] + searchStr1.length;
        let tempEndConcat = body.indexOf("</a>", tempStartConcat + 1);
        let nameAndYear = body.substr(tempStartConcat, tempEndConcat - tempStartConcat);
        let nameAndYearArrSplitted = nameAndYear.split("</span>");

        let tempStartConcat2 = tempIndexPriceUsd[i] + searchStr2.length;
        let tempEndConcat2 = body.indexOf("</span>", tempStartConcat2 + 1);
        let PriceUsd = body.substr(tempStartConcat2, tempEndConcat2 - tempStartConcat2);

        let tempStartConcat3 = tempIndexPriceUah[i] + searchStr3.length;
        let tempEndConcat3 = body.indexOf("</span>", tempStartConcat3 + 1);
        let PriceUah = body.substr(tempStartConcat3, tempEndConcat3 - tempStartConcat3);
        

        results[i] = [
            nameAndYearArrSplitted[0],
            nameAndYearArrSplitted[1],
            Number(parseInt(PriceUsd.replace(/\s+/g, ''),10)),
            Number(parseInt(PriceUah.replace(/\s+/g, ''),10)),
        ];
        
    }
    
    return results;
}



function formatTime(date)
{
    let result = "";
    let Y = date.getFullYear() + "";
    let M = date.getMonth() + 1 + "";
    let D = date.getDate() + "";

    let h = date.getHours() + "";
    let m = date.getMinutes() + "";
    let s = date.getSeconds() + "";
    
    result = Y.padStart(4, "0") + M.padStart(2, "0") + D.padStart(2, "0") + "-" + h.padStart(2, "0") + m.padStart(2, "0") + s.padStart(2, "0");
    return result;
}

