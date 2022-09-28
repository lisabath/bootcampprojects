
// Create an Array:
let items = ["apple", "milk", "bread"];

function additem() {
    console.log ("i have add item")
    if (items.includes(document.getElementById("item").value)) {
        alert("This item is already in the shopping list")
    }

    else if (document.getElementById("item").value == ""){
        alert("Please enter an item")
    }
    else {let i = items.length;
    items[i] = document.getElementById("item").value;
    document.getElementById("list").innerHTML = items; 
    }

}

