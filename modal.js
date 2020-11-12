var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
console.log(span);

btn.onclick = () => {
    modal.style.display= "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = function(event) {
    console.log(event);
    if (event.target === modal) {
        modal.style.display = "none";
    }
}