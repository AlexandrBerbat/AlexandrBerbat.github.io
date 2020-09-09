const order = 
{
    milk:
    {
        milkBox:
        {
            milkUnit:{},
            amount: 20,
        },
        amount: 3,
    },
    butter:
    {
        butterBox:
        {
            butterUnit:{},
            amount: 30,
        },
        amount: 4,
    },
    kefir:
    {
        kefirBox:
        {
            kefirUnit:{},
            amount: 6,
        },
        amount: 7,
    },
    iceCream:
    {
        iceCreamBox:
        {
            iceCreamUnit:{},
            amount: 12,
        },
        amount: 2,
    }
}



function fillObj(object, name, type, packaging, productionDate, shelfLife, storageTemperature)
{
    object.name = name;
    object.type = type;
    object.packaging = packaging;
    object.productionDate = productionDate;
    object.shelfLife = shelfLife;
    object.storageTemperature = storageTemperature;
}

fillObj(order.milk.milkBox.milkUnit, "milk", "pasteurized", "soft, polyethylene", "2020-09-05", "2020-09-19", "5");
fillObj(order.butter.butterBox.butterUnit, "butter", "creamy", "paper", "2020-09-05", "2020-09-25", "-5");
fillObj(order.kefir.kefirBox.kefirUnit, "kefir", "_", "bottle", "2020-09-06", "2020-09-11", "0");
fillObj(order.iceCream.iceCreamBox.iceCreamUnit, "iceCream", "_", "waffle cup", "2020-09-03", "2020-09-16", "-10");





function fillHtml(object, objectAmount, htmlTrId)
{
    document.getElementById(htmlTrId).childNodes[1].innerHTML = object.name;
    document.getElementById(htmlTrId).childNodes[3].innerHTML = object.type;
    document.getElementById(htmlTrId).childNodes[5].innerHTML = object.packaging;
    document.getElementById(htmlTrId).childNodes[7].innerHTML = objectAmount;
    document.getElementById(htmlTrId).childNodes[9].innerHTML = object.productionDate;
    document.getElementById(htmlTrId).childNodes[11].innerHTML = object.shelfLife;
    document.getElementById(htmlTrId).childNodes[13].innerHTML = object.storageTemperature;
}

fillHtml(order.milk.milkBox.milkUnit, order.milk.amount, "milkTrAc");
fillHtml(order.kefir.kefirBox.kefirUnit, order.kefir.amount, "kefirTrAc");
fillHtml(order.butter.butterBox.butterUnit, order.butter.amount, "butterTrAc");
fillHtml(order.iceCream.iceCreamBox.iceCreamUnit, order.iceCream.amount, "iceCreamTrAc");



let dateToSave = "2020-09-11";
function checkDateAndTemperature(object, dateToSave)
{
    if(object.storageTemperature <= -5 || new Date(object.shelfLife) <= new Date(dateToSave))
    {
        return false;
    }
    else
    {
        return true;
    }
}



if(checkDateAndTemperature(order.milk.milkBox.milkUnit, dateToSave) == false)
{
    fillHtml(order.milk.milkBox.milkUnit, order.milk.amount, "milkTrRej");
}
else
{
    document.getElementById("milkTrRej").style.display = "none";
}


if(checkDateAndTemperature(order.kefir.kefirBox.kefirUnit, dateToSave) == false)
{
    fillHtml(order.kefir.kefirBox.kefirUnit, order.kefir.amount, "kefirTrRej");
}
else
{
    document.getElementById("kefirTrRej").style.display = "none";
}



if(checkDateAndTemperature(order.butter.butterBox.butterUnit, dateToSave) == false)
{
    fillHtml(order.butter.butterBox.butterUnit, order.butter.amount, "butterTrRej");
}
else
{
    document.getElementById("butterTrRej").style.display = "none";
}


if(checkDateAndTemperature(order.iceCream.iceCreamBox.iceCreamUnit, dateToSave) == false)
{
    fillHtml(order.iceCream.iceCreamBox.iceCreamUnit, order.iceCream.amount, "iceCreamTrRej");
}
else
{
    document.getElementById("iceCreamTrRej").style.display = "none";
}


function searchNumberRecursive(firstNum, secNum)
{
    let tempNum = firstNum + secNum;
    if(tempNum >= 9991999)
    {
        console.log(secNum);
    }
    else
    {
        firstNum = secNum;
        secNum = tempNum;
        
        searchNumberRecursive(firstNum, secNum);
    }
}

console.log(searchNumberRecursive(1,1));


//9991999