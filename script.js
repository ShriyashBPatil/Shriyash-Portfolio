function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Image Modal Logic
document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal = document.getElementById("imageModal");

  // Get the image and insert it inside the modal
  var img = document.getElementById("hackathonImg");
  var modalImg = document.getElementById("modalImage");
  if (img) {
    img.onclick = function(){
      modal.style.display = "flex";
      modalImg.src = this.src;
    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-modal")[0];

  // When the user clicks on <span> (x), close the modal
  if (span) {
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal content, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
