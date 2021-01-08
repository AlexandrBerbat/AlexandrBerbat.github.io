// getAddrArr by Oleg 29-12-2020

let addressArr = ["Leveret","Phyllis Court","Givens","Whitlers Creek","Manwell","Youngheart","East Eaglewood","Barlowe","Comely","Ixias","Seale","N Essington","Wroxton","Quince Tree","Bloxham","Turf Valley","Gallows Branch","Bramblehill","Atherton Oaks","Fredricks","Haigh Moor","Archwood","Wimbleton","Leystone","E Sidney","Teston","Aylesby","Kerman","Leverstock Green","Willeroo","W Caton","Hilldeane","South Harriette","Owasso Heights","Long Rede","Bellsbrae","Luther","Ellerdale","Beffa","Stebbins","Tyrrell","Higher Green","Aldersbrook","Terra Mar","Grams Private","Whitemarsh","Old Pilkington","Ashen Grove","Royd","Galanis","Atwood","Merrals Wood","Arnerich","Silver Crest","Mattawoman Creek","Kara Ann","Flannel","Powells Creek","Marine World","Back Massie","Hampson","Parkers Grove","Old Baltimore","W California","Snug Cove","Brookwood Lye","Correllis","Taviton","Dowdle","Saddleworth","North Emerald","Bigwood","Mike Shapiro","Denos","Goden","Long Close","Mecartney","Firbeck","Saint John’s","Fabor","W Custer","W County Line","Kauri","Guido","Hoppa","Pezzi","Drystraw","Bashford","Bronzewing","Ledford","Castle Rough","Hangar","Freezeout","Slacks","Mascot","Rosenau","Vorden","Guerin","E Anderson","Tekman"]

const getAddrArr =  (quantity) => {
    const rndInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1) ) + min;};
    let arr = [];
    
     for (i=1; i<=quantity; i++) {
         let rand = rndInt(0, addressArr.length);
         let temp = `${addressArr[rand]} street, ${rndInt(1,50)}, ap ${rndInt(1,100)}`;
         arr.push(temp);
        };
        
    return arr;
};

module.exports = getAddrArr;

