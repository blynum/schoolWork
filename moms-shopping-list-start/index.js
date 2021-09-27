// Storing the list items put into the input field
// const listItems = document.getElementById("list")

// Adding event listener to the form to listen for a click.
document.getElementById("add-todo").addEventListener("submit",function(event) {
    event.preventDefault()
   const listItem = createListItem(event)
   document.getElementById("list").appendChild(listItem)
    console.log(listItem)
} )

// Creating the item once the event takes place and placing it as list item
function createListItem() {
    const listItem = document.createElement("li")
    // storing the user information from the form and the input box. Can use .notation to call the "name" of forms and input boxes
    let listItemValue = document.addItem.title.value
    // attaching text to "li"
    listItem.textContent = listItemValue
    return listItem
}

// Adding the ability to delete and item from the list

