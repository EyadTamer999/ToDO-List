let itemID = 0;

//let itemsArray = new Array();

//function alarm() {
// we will keep calling this function to keep track of date and time and compare that date and time
// with the list items we have, and if we have an item that aligns with our current date and time we will play an audio file
//let date = new Date().toLocaleDateString();
//window.setTimeout(function() { soundAlarm() },
//            alarmDate.getTime() - new Date().getTime()); <--- check this idea out, get current time and count down to the time of the set time
//                                                              basically dress up timer as an alarm.
//}

//TODO
//check if there exists a json file to store list items as data that will be imported
//if exists then we will read the data and store it in an array and add it to the ol
//if !exist then we will write a file that will store the data
// add reset to the inputs
//plan to read and write from json
//first: read from the file and add the items to our list << this will be done once the page loads
//second: if we want to write we will add it to the json file, and if we want to delete an item we will search for it in the file and delete it,
// in addition to deletion from the html list itself.


//user can set due date, however user cannot set start date but can only see once a list item has been added

function addToDo() {
    if (document.getElementById("input").value.toString() === "" || document.getElementById('due-date').value.toString() === "") {
        window.alert("A field is empty!\nPlease enter TODO item and set dueDate!");
        return;
    }
    let txt = document.getElementById("input").value.toString();
    let dueDate = document.getElementById('due-date').value.toString();
    let priority = document.getElementById('priority').value.toString();
    let startDate = getDate();
    itemID++;
    console.log(itemID)
    //get our data then add it to a new obj
    let listItem = {
        'ID': itemID, 'text': txt, 'due-date': dueDate, 'start-date': startDate, 'priority': priority
    };
    //itemsArray += [itemID, txt, dueDate, priority];
    let ol = document.getElementById('toDoListOrderedList');
    //checks if any text field is empty and sends an error message
    createListItem(listItem, ol);
}


function createListItem(listItem, ol) {
    if (listItem.priority.toString() === 'hi') {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + listItem["due-date"].toString() + '\n' + 'Created at: ' + listItem["start-date"].toString();
        li.style = "color: red";
        removeButton(itemID, li);
        ol.appendChild(li);
        console.log('added');
    } else if (listItem.priority.toString() === 'med') {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + listItem["due-date"].toString() + '\n' + 'Created at: ' + listItem["start-date"].toString();
        li.style = "color: darkorange";
        removeButton(itemID, li);
        ol.appendChild(li);
        console.log('added');
    } else {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + listItem["due-date"].toString() + '\n' + 'Created at: ' + listItem["start-date"].toString();
        removeButton(itemID, li);
        ol.appendChild(li);
        console.log('added');
    }
}


function removeButton(itemID, li) {
    let btnRm = document.createElement('button');
    btnRm.className = 'toDoListItemRemove';
    btnRm.onclick = function removeItem() {
        //remove item corresponding to the button
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
}

//change all this
function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let mM = today.getMinutes();
    // let ss = today.getSeconds();
    if (dd < 10) dd = '0' + dd

    if (mm < 10) mm = '0' + mm

    return today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + mM;
}

