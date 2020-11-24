let users = [{
    id: 'as23',
    nick: 'Octopus',
    firstName: 'John',
    LastName: 'Dou'
}, {
    id: 'as25',
    nick: 'Star',
    firstName: 'Andy',
    LastName: 'Lee'
}, {
    id: 'as77',
    nick: 'Wally',
    firstName: 'Liza',
    LastName: 'Corty'
}];

console.log(users);


let tempRez = users.map((item) => {

    let t = item.id;
    delete item.id;
    
    return {
        [t]: item,
    }
});

console.log(tempRez);


