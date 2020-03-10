var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    start = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scrollDown = document.querySelector(".scroll"),
    section = document.querySelectorAll("section"),
    footer = document.querySelector("footer"),
    indicator = document.querySelector(".indicator");

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

var indicatorIndex = 0;

for (var i = 0; i < indicator.children.length; i++) {
    indicator.children[i].addEventListener("click", function() {
        var getIndex2 = getIndex(event.target);

        indicator.children[indicatorIndex].classList.remove("active");
        indicator.children[getIndex2].classList.add("active");

        section[1].style.background = "url('img/Synopsis_0" + getIndex2 + ".jpg')";

        indicatorIndex = getIndex2;
    });
} // synopsis

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
