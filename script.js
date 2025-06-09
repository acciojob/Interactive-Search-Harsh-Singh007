//your JS code here. If required.
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
