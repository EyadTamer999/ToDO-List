//take input from text field and date, assing it to an object enrty that will have: content, date, priority, isDone
// when the add button is pressed it is added to the array of buttons sorted by highest priority


let items = [];

function addToDo() {
    const txt = document.getElementById("input").value.toString();
    const date = document.getElementById('date').value.toString();
    const priority = document.getElementById('priority').value.toString();
    //get our data then add it to a new obj
    //console.log({txt,date,priority});
    const listItem = {
        'text': txt,
        'date': date,
        'priority': priority
    };

    for(let i in items){
        console.log(i.toString());
    }
}