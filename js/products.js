const btnSuccess = document.querySelector(".btn");
const links = document.querySelector(".links");
btnSuccess.addEventListener("click", (e) => {
  links.classList.toggle("open");
});
