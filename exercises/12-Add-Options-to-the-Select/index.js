let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

var select = document.querySelector("#mySelect")

countries.forEach((country) =>{
    let option = document.createElement("option")
    option.value = country
    option.innerHTML = country
    select.appendChild(option)
})


select.addEventListener("change", function (event){
    alert(event.target.value)
})