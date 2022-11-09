// Your code here

document.querySelector("#addToDo").addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 13) {
        let elemento = document.createElement("li")
        elemento.innerHTML = '<span><i class = "fa fa-trash"></i></span> ' + event.target.value
        elemento.querySelector("span").addEventListener("click", deleteItem)
        document.querySelector("ul").appendChild(elemento)
        event.target.value = ""
    }
});

var spans = document.querySelector("ul").getElementsByTagName("span")
for (let i=0; i<spans.length; i++) {
    spans.item(i).addEventListener("click", deleteItem)
}

function deleteItem(event) {
    let span = event.target
   console.log(span.parentElement.parentElement)
   document.querySelector("ul").removeChild(span.parentElement.parentElement)
}