var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    start = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scrollDown = document.querySelector(".scroll"),
    section = document.querySelectorAll("section"),
    footer = document.querySelector("footer"),
    indicator = document.querySelectorAll(".indicator"),
    Index = 0;

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
        var orgTarget = this.querySelector("a").getAttribute("href");
        tabTarget = orgTarget.replace("#", "");
        menuButton.classList.toggle("active");
        menu.classList.toggle("active");
        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("active");
        }
        section[tabTarget].classList.add("active");
    });
} // 메뉴 선택

for (var i = 0; i < indicator[0].children.length; i++) {
    indicator[0].children[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        indicator[0].children[Index].classList.remove("active");
        indicator[0].children[pressedIndex].classList.add("active");

        section[1].style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";

        section[1].querySelectorAll("article")[Index].classList.remove("active");
        section[1].querySelectorAll("article")[pressedIndex].classList.add("active");

        Index = pressedIndex;
    });
} // Synopsis 페이지 구현

section[2].querySelector("a").addEventListener("click", function() {
    event.preventDefault();

    this.classList.toggle("active");
    indicator[1].querySelector("div").classList.toggle("active");
});

for (var i = 0; i < indicator[1].querySelectorAll("div img").length; i++) {
    indicator[1].querySelectorAll("div img")[i].addEventListener("click", function() {
        event.preventDefault();
        var pressedIndex2 = getIndex(event.target);

        console.log(event.target);

        indicator[1].querySelector("div").classList.remove("active");
        section[2].style = "background-image: url('img/Casting_0" + pressedIndex2 + ".jpg')";
    });
} // Casting 페이지 구현
