var popupbutton = document.getElementById("popup-button")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelbutton = document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".book-container")
var title = document.getElementById("title")
var author = document.getElementById("author")
var description = document.getElementById("description")
var addbook = document.getElementById("addbook")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML = "<h2>" + title.value + "</h2>" + "<h5>" + author.value + "</h5>" + "<p>" + description.value + "</p>" + "<button onclick = \"deletefunc(event)\">Delete</button>"
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})
function deletefunc(event)
{
    event.target.parentElement.remove()
}