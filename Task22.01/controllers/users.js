const Users = require('../models/users');

showAllUsers = async(req, res) => {
    const temp = await Users.find();
    console.log(temp);
    return await temp;
};

module.exports = {
    showAllUsers,
    
}