// Storing the list items put into the input field
// const listItems = document.getElementById("list")

// Adding event listener to the form to listen for a click.
document.add-todo.title.addEventListener("submit",function(event) {
   const listItem = createListItem(event)
   document.getElementById("list").appendChild(listItem)
//    event.preventDefault()
    console.log("listItem")
} )

// Creating the item once the event takes place
function createListItem(event) {
    const subItem = document.createElement("li")
    let subItemValue = document.getElementById("list").value
    subItem.textContent = subItemValue
    return subItem
    console.log(listItem)
}

// Adding the abilit to delete and item from the list