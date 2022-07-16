
// Code to toggle Navbar on clicking Hamburger Button

// Selecting the classes at 0th index
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navMenu = document.getElementsByClassName('hamburger-button')[0];

// Adding a click listener to hamburger design
navMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})


// Close navbar menu when clicked on an list item
document.addEventListener('click', (e)=>{
    if(e.target.closest(".navbar-links")){
        navbarLinks.classList.toggle('active');
    }
});