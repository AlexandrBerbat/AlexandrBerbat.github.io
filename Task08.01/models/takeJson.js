const fs = require("fs");

let fileContent = fs.readFileSync("./public/json/jsonex.json", "utf8");

module.exports = JSON.parse(fileContent);