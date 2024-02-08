const avatar = document.querySelector(".avatar");
const modal = document.querySelector(".modal");
avatar.addEventListener("click", (e) => {
  modal.classList.toggle("open");
});

const close = document.querySelector(".close");
close.addEventListener("click", (e) => {
    modal.classList.remove('open')
});

const btnSuccess = document.querySelector(".btn");
const links = document.querySelector(".links");
btnSuccess.addEventListener("click", (e) => {
  links.classList.toggle("open");
});