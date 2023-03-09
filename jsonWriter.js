//trying smth out
const fs = require("fs");


module.exports = function writeDataToFIle(listItem) {
    let listItems = JSON.stringify(listItem);
    fs.writeFile("listItems.json", listItems, function (err) {
        if (err) console.log('error', err);
    });
}

