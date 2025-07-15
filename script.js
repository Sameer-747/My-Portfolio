const texts = ["Frontend Developer", "UI Designer", "React.js Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typingEl = document.querySelector(".typing");

  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    }

    if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
    }

    typingEl.textContent = currentText;

    if (!isDeleting && j === texts[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", type);