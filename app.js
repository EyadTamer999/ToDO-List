//take input from text field and date, assing it to an object enrty that will have: content, date, priority, isDone
// when the add button is pressed it is added to the array of buttons sorted by highest priority
let items = [];

function addToDo() {
    let txt = document.getElementById("input").value.toString();
    let date = document.getElementById('date').value.toString();
    let priority = document.getElementById('priority').value.toString();
    //get our data then add it to a new obj
    //console.log({txt,date,priority});
    let listItem = {
        'text': txt,
        'date': date,
        'priority': priority
    };

    let ol = document.getElementById('toDoListOrderedList');

    //console.log(listItem)

    if(listItem.priority.toString() === 'hi'){
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(listItem.text.toString()));
        ol.appendChild(entry);
        console.log('added')
        //create relative list item with red color text or smth
    }
    else if(listItem.priority.toString() === 'med'){

    }
    else if(listItem.priority.toString() === 'low'){

    }

}