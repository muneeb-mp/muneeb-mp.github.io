// Code to toggle Navbar on clicking Hamburger Button

// Selecting the classes at 0th index
const navbarLinks = document.getElementsByClassName("nav-list")[0];
const navMenu = document.getElementById("hamburger-button");

// Adding a click listener to hamburger design
navMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Close navbar menu when clicked on an list item
document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-list")) {
    navbarLinks.classList.toggle("active");
  }
});

// Code for active menu on scroll
const li = document.querySelectorAll(".nav-listItem");
const section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  li.forEach((link) => link.classList.remove("activeNav"));
  li[len].classList.add("activeNav");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
