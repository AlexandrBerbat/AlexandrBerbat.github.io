let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;
/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/

flagWidth = tempWidth + tempWidth + tempHeight + "px"; //500
flagHeight = tempHeight + tempWidth + "px"; //300
flagBackgroundLG = "to top, rgb(99%, 99%, 2%, 0.9) 50%, rgba(0, 29, 250, 0.9) 50%";


/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
/*

.flag { 
  width: <значение переменной flagWidth>;
  height: <значение переменной flagHeight>;
  background: linear-gradient(<значение переменной flagBackgroundLG>);
}

*/

flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background = `linear-gradient(${ flagBackgroundLG })`;

