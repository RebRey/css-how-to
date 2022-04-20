// nav toggle - select button(#navToggle) and links(#nav-links)
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

// add event listener - on button click create an arrow function to display 100vh for CSS nav-open
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
