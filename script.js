const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navBar = document.getElementsByClassName("nav-bar")[0];
const upperNav = document.getElementsByClassName("upper-nav")[0];
const mainLogo = document.getElementsByClassName("logo")[0];
const signBtns = document.getElementsByClassName("sign-buttons")[0];
const mainHeader = document.getElementsByTagName("header")[0];
console.log(mainHeader);


navToggle.addEventListener('click', () => {
    navBar.classList.toggle("pblock-100vh");
    upperNav.classList.toggle("bg-dark-purple");
    mainLogo.classList.toggle("d-none");
    signBtns.classList.toggle("d-block");
    navLinks.classList.toggle('active');
    navToggle.classList.toggle("color-white");
    mainHeader.classList.toggle("p-top-100vh");
})



let subNavToggle = document.getElementsByClassName("subnav-toggles");
for (let i = 0; i<subNavToggle.length; i++){
subNavToggle[i].addEventListener("click", () => {
    console.log(i);
    let subNav = document.getElementsByClassName("popular-subnav")[i];
    console.log(subNav);
    subNav.classList.toggle("d-none");
})
}