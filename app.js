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

    if (listItem.priority.toString() === 'hi') {
        let li = document.createElement('li');
        li.textContent = listItem.text + '\t' + date.toString();
        li.style = "color: red";
        //add designated button
        ol.appendChild(li);
        console.log('added')
        //create relative list item with red color text or smth
    } else if (listItem.priority.toString() === 'med') {
        let li = document.createElement('li');
        li.textContent = listItem.text + '\t' + date.toString();
        li.style = "color: darkorange";
        ol.appendChild(li);
        console.log('added')
    } else if (listItem.priority.toString() === 'low') {
        let li = document.createElement('li');
        li.textContent = listItem.text + '\t' + date.toString();
        ol.appendChild(li);
        console.log('added')
    }

}