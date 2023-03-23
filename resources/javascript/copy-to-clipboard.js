// Copy mail to clipboard

// Elements

const mail = document.querySelector(".header-contact-email");
const popUp = document.querySelector(".copied-popup");


// Events

mail.addEventListener("click", () => {
  const mailAdress = mail.innerText;
  copyToClipBoard(mailAdress, popUp);
  setTimeout(() => {
    popUp.style.opacity = '0';
  }, 800)
});

// Functions


function copyToClipBoard(text, element) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        element.style.display = "block";  
      })
      .catch((e) => console.error(e));
  }
