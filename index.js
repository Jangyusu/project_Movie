var menuButton = document.getElementsByClassName("menu_button")[0],
    menu = document.getElementsByClassName("menu")[0];

console.log(menuButton);
console.log(menu);

menuButton.addEventListener("click", function() {
    event.preventDefault();

    menuButton.classList.toggle("active");
    menu.classList.toggle("active");
});
