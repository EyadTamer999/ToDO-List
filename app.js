//take input from text field and date, passing it to an object entry that will have: content, date, priority, isDone
// when the add button is pressed it is added to the array of buttons sorted by highest priority
let itemID = 0;

function alarm() {
    // we will keep calling this function to keep track of date and time and compare that date and time
    // with the list items we have, and if we have an item that aligns with our current date and time we will play an audio file
    let date = new Date().toLocaleDateString();
    //window.setTimeout(function() { soundAlarm() },
    //            alarmDate.getTime() - new Date().getTime()); <--- check this idea out, get current time and count down to the time of the set time
    //                                                              basically dress up timer as an alarm.
}

function addToDo() {
    //TODO
    //check if there exists a json file to store list items as data that will be imported
    //if exists then we will read the data and store it in an array and add it to the ol
    //if !exist then we will write a file that will store the data
    // add reset to the inputs
    if (document.getElementById("input").value.toString() === "" || document.getElementById('date').value.toString() === "") {
        window.alert("A field is empty!\nPlease enter TODO item and set date!");
        return;
    }
    let txt = document.getElementById("input").value.toString();
    let date = document.getElementById('date').value.toString();
    let priority = document.getElementById('priority').value.toString();
    itemID++;
    console.log(itemID)
    //get our data then add it to a new obj
    //console.log({txt,date,priority});
    let listItem = {
        'ID': itemID,
        'text': txt,
        'date': date,
        'priority': priority
    };
    let ol = document.getElementById('toDoListOrderedList');
    //console.log(listItem)
    //checks if any text field is empty and sends an error message
    if (listItem.priority.toString() === 'hi') {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + date.toString();
        li.style = "color: red";
        btnRm = document.createElement('button');
        btnRm.className = 'toDoListItemRemove';
        btnRm.onclick = function removeItem() {
            //remove item corresponding to the button
            //let element = document.getElementById("item" + btnRm.id);
            li.remove();
            console.log('removed');
        }
        rmImg = document.createElement('img');
        rmImg.src = 'X.png';
        rmImg.alt = 'x';
        rmImg.style = 'height: 20px; width: 20px';
        btnRm.appendChild(rmImg);
        //an ol will have li, an li will have a button, and a button will have an img
        // the button deletes itself, its child, and it's first parent (li)
        li.appendChild(btnRm);
        //add designated button
        ol.appendChild(li);
        console.log('added');
        //create relative list item with red color text or smth
    } else if (listItem.priority.toString() === 'med') {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + date.toString();
        li.style = "color: darkorange";
        btnRm = document.createElement('button');
        btnRm.className = 'toDoListItemRemove';
        btnRm.onclick = function removeItem() {
            //remove item corresponding to the button
            //let element = document.getElementById("item" + btnRm.id);
            li.remove();
            console.log('removed');
        }
        btnRm.id = itemID;
        rmImg = document.createElement('img');
        rmImg.src = 'X.png';
        rmImg.alt = 'x';
        rmImg.style = 'height: 20px; width: 20px';
        btnRm.appendChild(rmImg);
        //an ol will have li, an li will have a button, and a button will have an img
        // the button deletes itself, its child, and it's first parent (li)
        li.appendChild(btnRm);
        ol.appendChild(li);
        console.log('added');
    } else {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + date.toString();
        btnRm = document.createElement('button');
        btnRm.className = 'toDoListItemRemove';
        btnRm.onclick = function removeItem() {
            //remove item corresponding to the button
            //let element = document.getElementById("item" + btnRm.id);
            li.remove();
            console.log('removed');
        }
        rmImg = document.createElement('img');
        rmImg.src = 'X.png';
        rmImg.alt = 'x';
        rmImg.style = 'height: 20px; width: 20px';
        btnRm.appendChild(rmImg);
        //an ol will have li, an li will have a button, and a button will have an img
        // the button deletes itself, its child, and it's first parent (li)
        li.appendChild(btnRm);
        ol.appendChild(li);
        //import fs
        let fs = require('fs');

        fs.readFile("./myjsonfile.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            console.log("File data:", jsonString);
        });
        console.log('added');
    }
}