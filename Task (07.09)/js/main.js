const order = 
{
    milk:
    {
        milkBox:
        {
            milkUnit:
            {
                name: "milk",
                type: "pasteurized",
                packaging: "soft, polyethylene",
                productionDate: "2020-09-05",
                shelfLife: "2020-09-15",
                storageTemperature: "5"
            },
            amount: 20,
        },
        amount: 3,
    },
    butter:
    {
        butterBox:
        {
            butterUnit:
            {   
                name: "butter",
                type: "creamy",
                packaging: "paper",
                productionDate: "2020-09-05",
                shelfLife: "2020-09-25",
                storageTemperature: "-5"
            },
            amount: 30,
        },
        amount: 4,
    },
    kefir:
    {
        kefirBox:
        {
            kefirUnit:
            {   
                name: "kefir",
                type: "_",
                packaging: "bottle",
                productionDate: "2020-09-06",
                shelfLife: "2020-09-11",
                storageTemperature: "0"
            },
            amount: 6,
        },
        amount: 7,
    },
    iceCream:
    {
        iceCreamBox:
        {
            iceCreamUnit:
            {   
                name: "ice cream",
                type: "_",
                packaging: "waffle cup",
                productionDate: "2020-09-03",
                shelfLife: "2020-09-16",
                storageTemperature: "-10"
            },
            amount: 12,
        },
        amount: 2,
    }

}

//Молоко получ
document.getElementById("milkTrAc").childNodes[1].innerHTML = order.milk.milkBox.milkUnit.name;
document.getElementById("milkTrAc").childNodes[3].innerHTML = order.milk.milkBox.milkUnit.type;
document.getElementById("milkTrAc").childNodes[5].innerHTML = order.milk.milkBox.milkUnit.packaging;
document.getElementById("milkTrAc").childNodes[7].innerHTML = order.milk.amount;
document.getElementById("milkTrAc").childNodes[9].innerHTML = order.milk.milkBox.milkUnit.productionDate;
document.getElementById("milkTrAc").childNodes[11].innerHTML = order.milk.milkBox.milkUnit.shelfLife;
document.getElementById("milkTrAc").childNodes[13].innerHTML = order.milk.milkBox.milkUnit.storageTemperature;

//Кефир получ
document.getElementById("kefirTrAc").childNodes[1].innerHTML = order.kefir.kefirBox.kefirUnit.name;
document.getElementById("kefirTrAc").childNodes[3].innerHTML = order.kefir.kefirBox.kefirUnit.type;
document.getElementById("kefirTrAc").childNodes[5].innerHTML = order.kefir.kefirBox.kefirUnit.packaging;
document.getElementById("kefirTrAc").childNodes[7].innerHTML = order.kefir.amount;
document.getElementById("kefirTrAc").childNodes[9].innerHTML = order.kefir.kefirBox.kefirUnit.productionDate;
document.getElementById("kefirTrAc").childNodes[11].innerHTML = order.kefir.kefirBox.kefirUnit.shelfLife;
document.getElementById("kefirTrAc").childNodes[13].innerHTML = order.kefir.kefirBox.kefirUnit.storageTemperature;

//Масло получ
document.getElementById("butterTrAc").childNodes[1].innerHTML = order.butter.butterBox.butterUnit.name;
document.getElementById("butterTrAc").childNodes[3].innerHTML = order.butter.butterBox.butterUnit.type;
document.getElementById("butterTrAc").childNodes[5].innerHTML = order.butter.butterBox.butterUnit.packaging;
document.getElementById("butterTrAc").childNodes[7].innerHTML = order.butter.amount;
document.getElementById("butterTrAc").childNodes[9].innerHTML = order.butter.butterBox.butterUnit.productionDate;
document.getElementById("butterTrAc").childNodes[11].innerHTML = order.butter.butterBox.butterUnit.shelfLife;
document.getElementById("butterTrAc").childNodes[13].innerHTML = order.butter.butterBox.butterUnit.storageTemperature;

//Морожен получ
document.getElementById("iceCreamTrAc").childNodes[1].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.name;
document.getElementById("iceCreamTrAc").childNodes[3].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.type;
document.getElementById("iceCreamTrAc").childNodes[5].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.packaging;
document.getElementById("iceCreamTrAc").childNodes[7].innerHTML = order.iceCream.amount;
document.getElementById("iceCreamTrAc").childNodes[9].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.productionDate;
document.getElementById("iceCreamTrAc").childNodes[11].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.shelfLife;
document.getElementById("iceCreamTrAc").childNodes[13].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.storageTemperature;

let dateToSave = "2020-09-11";

if(order.milk.milkBox.milkUnit.storageTemperature <= -5 || new Date(order.milk.milkBox.milkUnit.shelfLife) <= new Date(dateToSave))
{
    document.getElementById("milkTrRej").childNodes[1].innerHTML = order.milk.milkBox.milkUnit.name;
    document.getElementById("milkTrRej").childNodes[3].innerHTML = order.milk.milkBox.milkUnit.type;
    document.getElementById("milkTrRej").childNodes[5].innerHTML = order.milk.milkBox.milkUnit.packaging;
    document.getElementById("milkTrRej").childNodes[7].innerHTML = order.milk.amount;
    document.getElementById("milkTrRej").childNodes[9].innerHTML = order.milk.milkBox.milkUnit.productionDate;
    document.getElementById("milkTrRej").childNodes[11].innerHTML = order.milk.milkBox.milkUnit.shelfLife;
    document.getElementById("milkTrRej").childNodes[13].innerHTML = order.milk.milkBox.milkUnit.storageTemperature;
}
else
{
    document.getElementById("milkTrRej").style.display = "none";
}



if(order.kefir.kefirBox.kefirUnit.storageTemperature <= -5 || new Date(order.kefir.kefirBox.kefirUnit.shelfLife) <= new Date(dateToSave))
{
    document.getElementById("kefirTrRej").childNodes[1].innerHTML = order.kefir.kefirBox.kefirUnit.name;
    document.getElementById("kefirTrRej").childNodes[3].innerHTML = order.kefir.kefirBox.kefirUnit.type;
    document.getElementById("kefirTrRej").childNodes[5].innerHTML = order.kefir.kefirBox.kefirUnit.packaging;
    document.getElementById("kefirTrRej").childNodes[7].innerHTML = order.kefir.amount;
    document.getElementById("kefirTrRej").childNodes[9].innerHTML = order.kefir.kefirBox.kefirUnit.productionDate;
    document.getElementById("kefirTrRej").childNodes[11].innerHTML = order.kefir.kefirBox.kefirUnit.shelfLife;
    document.getElementById("kefirTrRej").childNodes[13].innerHTML = order.kefir.kefirBox.kefirUnit.storageTemperature;
}
else
{
    document.getElementById("kefirTrRej").style.display = "none";
}



if(order.butter.butterBox.butterUnit.storageTemperature <= -5 || new Date(order.butter.butterBox.Unit.shelfLife) <= new Date(dateToSave))
{
    document.getElementById("butterTrRej").childNodes[1].innerHTML = order.butter.butterBox.butterUnit.name;
    document.getElementById("butterTrRej").childNodes[3].innerHTML = order.butter.butterBox.butterUnit.type;
    document.getElementById("butterTrRej").childNodes[5].innerHTML = order.butter.butterBox.butterUnit.packaging;
    document.getElementById("butterTrRej").childNodes[7].innerHTML = order.butter.amount;
    document.getElementById("butterTrRej").childNodes[9].innerHTML = order.butter.butterBox.butterUnit.productionDate;
    document.getElementById("butterTrRej").childNodes[11].innerHTML = order.butter.butterBox.butterUnit.shelfLife;
    document.getElementById("butterTrRej").childNodes[13].innerHTML = order.butter.butterBox.butterUnit.storageTemperature;
}
else
{
    document.getElementById("butterTrRej").style.display = "none";
}


if(order.iceCream.iceCreamBox.iceCreamUnit.storageTemperature <= -5 || new Date(order.iceCream.iceCreamBox.Unit.shelfLife) <= new Date(dateToSave))
{
    document.getElementById("iceCreamTrRej").childNodes[1].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.name;
    document.getElementById("iceCreamTrRej").childNodes[3].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.type;
    document.getElementById("iceCreamTrRej").childNodes[5].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.packaging;
    document.getElementById("iceCreamTrRej").childNodes[7].innerHTML = order.iceCream.amount;
    document.getElementById("iceCreamTrRej").childNodes[9].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.productionDate;
    document.getElementById("iceCreamTrRej").childNodes[11].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.shelfLife;
    document.getElementById("iceCreamTrRej").childNodes[13].innerHTML = order.iceCream.iceCreamBox.iceCreamUnit.storageTemperature;
}
else
{
    document.getElementById("iceCreamTrRej").style.display = "none";
}