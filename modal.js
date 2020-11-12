var myModal = document.querySelector("#myModal");
myModal.classList.add("hideModal");
console.log(myModal);

var modalBtn = document.getElementById("myBtn");
var closeBtn = document.getElementsByClassName("close")[0];
console.log(closeBtn);

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

