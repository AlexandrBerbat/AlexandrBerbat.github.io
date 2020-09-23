const shipFirst = 
{
    dmg: 4,
    hp: 100,
}

const shipSecond =
{
    dmg: 8,
    hp: 45,
}

do
{
    shipFirst.hp -= shipSecond.dmg;
    shipSecond.hp -= shipFirst.dmg;
    console.log(`shipFirst [dmg: ${shipFirst.dmg}; hp: ${shipFirst.hp}]=> <= shipSecond [dmg: ${shipSecond.dmg}; hp: ${shipSecond.hp}]`)

}while(shipFirst.hp > 0 && shipSecond.hp > 0)

(shipFirst.hp <= 0) ? console.log("Первый корабль поражен") : console.log("Второй корабль поражен");