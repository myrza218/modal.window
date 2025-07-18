
 btns = document.querySelectorAll("[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let nomo = this.getAttribute("data-modal-btn");
    let modal = document.querySelector("[data-modal-window='" + nomo + "']");
    modal.style.display = "block";
    let close = modal.querySelector('.close-modal-window');
    close.addEventListener('click', function() {
        modal.style.display = 'none';
    })

  })
}

window.onclick = function(e) {
  if (e.target.hasAttribute("data-modal-window")) {
    e.target.style.display = 'none';
  }
}

  
