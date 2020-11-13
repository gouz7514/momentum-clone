var myModal = document.querySelector("#myModal");
myModal.classList.add("hideModal");

var modalBtn = document.getElementById("myBtn");
var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.addEventListener('click', closeModal); 
modalBtn.addEventListener('click', openModal);

function openModal() {
    myModal.classList.remove("hideModal");
    myModal.classList.add("showModal");
}

function closeModal() {
    myModal.classList.remove("showModal");
    myModal.classList.add("hideModal");
}

