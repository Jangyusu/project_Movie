var menuButton = document.getElementsByClassName("menu_button")[0],
    menu = document.getElementsByClassName("menu")[0],
    start = document.getElementsByClassName("start")[0],
    header = document.getElementsByTagName("header")[0],
    director = document.getElementsByClassName("director")[0],
    scroll = document.getElementsByClassName("scroll")[0],
    section = document.getElementsByTagName("section");

menuButton.addEventListener("click", function() {
    event.preventDefault();

    menuButton.classList.toggle("active");
    menu.classList.toggle("active");
}); // 메뉴 토글

start.addEventListener("click", function() {
    event.preventDefault();

    start.classList.add("active");

    setTimeout(function() {
        header.classList.add("active");
        director.classList.add("active");
        director.children[0].children[0].classList.add("active");
        director.children[2].children[0].classList.add("active");
        scroll.classList.add("active");
        scroll.children[1].classList.add("active");
        section[0].classList.add("active");
        section[0].children[2].classList.add("active");
    }, 3000);
}); // 시작버튼 생성

for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].children[0].addEventListener("click", function() {
        var orgTarget = this.getAttribute("href"),
            tabTarget = orgTarget.replace("#", "");

        event.preventDefault();

        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("click");
        }

        section[tabTarget].classList.add("click");
    });
}
