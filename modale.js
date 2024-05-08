var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalTriggers = document.getElementsByClassName("modal-trigger");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener("click", function() {
    var imageURL = this.getAttribute("src");
    modalImage.setAttribute("src", imageURL);
    modal.style.display = "block";
  });
}

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
  