let sidenav = document.getElementById("burgermenu-opened");
let openBtn = document.getElementById("burgermenu-openbtn");
let closeBtn = document.getElementById("burgermenu-closebtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}