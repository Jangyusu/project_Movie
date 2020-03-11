var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    start = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scrollDown = document.querySelector(".scroll"),
    section = document.querySelectorAll("section"),
    footer = document.querySelector("footer"),
    indicator = document.querySelectorAll(".indicator"),
    pageIndex = 0,
    synopsisIndex = 0,
    castingIndex = 0;

function getIndex(target) {
    var i = 0;

    while ((target = target.previousSibling) != null) {
        if (target.nodeType == 3) {
        } else {
            i++;
        }
    }
    return i;
} // getIndex

start.addEventListener("click", function() {
    start.classList.add("active");

    setTimeout(function() {
        header.classList.add("active");
        section[0].classList.add("active");
        section[0].querySelector("p").classList.add("active");
        director.classList.add("active");
        director.querySelectorAll("span")[0].classList.add("active");
        director.querySelectorAll("span")[2].classList.add("active");
        scrollDown.classList.add("active");
        scrollDown.querySelector("i").classList.add("active");
        footer.classList.add("active");
    }, 10);
}); // 시작버튼 생성

menuButton.addEventListener("click", function() {
    event.preventDefault();

    menuButton.classList.toggle("active");
    menu.classList.toggle("active");
}); // 메뉴 토글

for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        menuButton.classList.toggle("active");
        menu.classList.toggle("active");

        section[pageIndex].classList.remove("active");
        section[pressedIndex].classList.add("active");

        pageIndex = pressedIndex;
    });
} // 메뉴 선택

for (var i = 0; i < indicator[0].children.length; i++) {
    indicator[0].children[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        indicator[0].children[synopsisIndex].classList.remove("active");
        indicator[0].children[pressedIndex].classList.add("active");

        section[1].querySelectorAll("article")[synopsisIndex].classList.remove("active");
        section[1].querySelectorAll("article")[pressedIndex].classList.add("active");

        section[1].style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";

        synopsisIndex = pressedIndex;
    });
} // Synopsis 페이지 구현

section[2].querySelector("a").addEventListener("click", function() {
    event.preventDefault();

    this.classList.toggle("active"); // 화살표
    indicator[1].querySelector("div").classList.toggle("active"); // 배우 리스트
});

for (var i = 0; i < indicator[1].querySelectorAll("div div img").length; i++) {
    indicator[1].querySelectorAll("div div img")[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        section[2].querySelectorAll("article")[castingIndex].classList.remove("active");
        section[2].querySelectorAll("article")[pressedIndex].classList.add("active");

        section[2].style = "background-image: url('img/Casting_0" + pressedIndex + ".jpg')";

        castingIndex = pressedIndex;
    });
} // Casting 페이지 구현