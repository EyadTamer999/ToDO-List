//take input from text field and date, assing it to an object enrty that will have: content, date, priority, isDone
// when the add button is pressed it is added to the array of buttons sorted by highest priority
let itemID = 0;

function addToDo() {

    //check if there exists a json file to store list items as data that will be imported
    //if exists then we will read the data and store it in an array and add it to the ol
    //if !exist then we will write a file that will store the data

    //TODO
    //clear text box and date field after adding

    let txt = document.getElementById("input").value.toString();
    let date = document.getElementById('date').value.toString();
    let priority = document.getElementById('priority').value.toString();
    itemID++;
    //get our data then add it to a new obj
    //console.log({txt,date,priority});
    let listItem = {
        'ID': itemID, 'text': txt, 'date': date, 'priority': priority
    };

    let ol = document.getElementById('toDoListOrderedList');

    //console.log(listItem)

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
            console.log('removed')
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
        console.log('added')
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
            console.log('removed')
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
        console.log('added')
    } else if (listItem.priority.toString() === 'low') {
        let li = document.createElement('li');
        li.id = 'item' + li.ID;
        li.textContent = listItem.text + '\t' + date.toString();
        btnRm = document.createElement('button');
        btnRm.className = 'toDoListItemRemove';


        btnRm.onclick = function removeItem() {
            //remove item corresponding to the button
            //let element = document.getElementById("item" + btnRm.id);
            li.remove();
            console.log('removed')
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
        console.log('added')
    }

}

