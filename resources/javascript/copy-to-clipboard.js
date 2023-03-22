// Copy mail to clipboard

const mail = document.querySelector(".header-contact-email");
const popUp = document.querySelector(".copied-popup");

mail.addEventListener("click", () => {
  const mailAdress = mail.innerText;
  copyToClipBoard(mailAdress);

  function copyToClipBoard(mailAdress) {
    navigator.clipboard
      .writeText(mailAdress)
      .then(() => {
        popUp.style.display = "block";  
      })
      .catch((e) => console.error(e));
  }
});

