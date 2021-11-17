function getData(){
    axios.get("https://api.vschool.io/belita/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE BROWSER
function listData(data){

    clearList()
    
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
        const h2 = document.createElement('h2')
        h2.textContent = data[i].price
        document.getElementById('todo-list').appendChild(h2)
        const h3 = document.createElement('h3')
        h3.textContent = data[i].description
        document.getElementById('todo-list').appendChild(h3)
        const image = document.createElement('img')
        image.src = data[i].imgURL
        document.getElementById('todo-list').appendChild(image)
    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// Part 2 - POST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgURL: todoForm.imgURL.value
  };

  
  axios
    .post("https://api.vschool.io/belita/todo", newTodo)
    .then((response) => getData())
    .catch((error) => console.log(error));
})

function deleteButton(event){
    event.target.parentElement.remove()
}