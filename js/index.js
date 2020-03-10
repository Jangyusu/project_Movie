var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    start = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scroll = document.querySelector(".scroll"),
    section = document.getElementsByTagName("section"),
    footer = document.querySelector("footer"),
    aside = document.querySelector("aside");

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
        footer.classList.add("active");
    }, 10);
}); // 시작버튼 생성

for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].children[0].addEventListener("click", function() {
        var orgTarget = this.getAttribute("href"),
            tabTarget = orgTarget.replace("#", "");

        event.preventDefault();
        menu.classList.remove("active");
        menuButton.classList.remove("active");

        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("click");
            section[i].classList.remove("active");
        }
        section[tabTarget].classList.add("click");
    });
} // 메뉴 선택시 화면 전환

for (var i = 0; i < aside.children.length; i++) {
    aside.children[i].addEventListener("click", function() {
        var orgTarget = this.getAttribute("href"),
            tabTarget = orgTarget.replace("#", "");

        for (var i = 0; i < aside.children.length; i++) {
            aside.children[i].classList.remove("active");
            section[1].querySelectorAll("article")[i].classList.remove("active");
        }

        this.classList.add("active");
        section[1].querySelectorAll("article")[tabTarget].classList.add("active");
        section[1].classList.remove("first", "second", "third");

        if (tabTarget == 0) {
            section[1].classList.add("first");
        } else if (tabTarget == 1) {
            section[1].classList.add("second");
        } else {
            section[1].classList.add("third");
        }
    });
} // Synopsis 화면 전환
