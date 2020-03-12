var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    start = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scrollDown = document.querySelector(".scroll"),
    section = document.querySelectorAll("section"),
    footer = document.querySelector("footer"),
    indicator = document.querySelectorAll(".indicator"),
    video = document.querySelector(".video"),
    pageIndex = 0,
    synopsisIndex = 0,
    castingIndex = 0,
    trailerIndex = 0;

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

        for (var i = 0; i < section[1].querySelectorAll("article").length; i++) {
            section[1].querySelectorAll("article")[i].classList.remove("active");
        }

        for (var i = 0; i < section[2].querySelectorAll("article").length; i++) {
            section[2].querySelectorAll("article")[i].classList.remove("active");
        }

        for (var i = 0; i < video.querySelectorAll("div").length; i++) {
            video.querySelectorAll("div")[i].classList.remove("active");
        }
        trailerIndex = 0;
    });
} // 메뉴 선택

for (var i = 0; i < indicator[0].children.length; i++) {
    indicator[0].children[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        for (var i = 0; i < indicator[0].children.length; i++) {
            indicator[0].children[i].classList.remove("active");
            section[1].querySelectorAll("article")[i].classList.remove("active");
        }

        indicator[0].children[pressedIndex].classList.add("active");
        section[1].querySelectorAll("article")[pressedIndex].classList.add("active");

        section[1].style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";
    });
}

menu.children[1].addEventListener("click", function() {
    section[1].querySelectorAll("article")[0].classList.add("active");
    section[1].style = "background-image: url('img/Synopsis_00.jpg')";

    for (var i = 0; i < indicator[0].children.length; i++) {
        indicator[0].children[i].classList.remove("active");
    }
    indicator[0].children[0].classList.add("active");
}); // Synopsis 페이지 구현

indicator[1].querySelector("i").addEventListener("click", function() {
    this.classList.toggle("active"); // 화살표
    indicator[1].querySelector("div").classList.toggle("active"); // 배우 리스트
});

menu.children[2].addEventListener("click", function() {
    for (var i = 0; i < section[2].querySelectorAll("article").length; i++) {
        section[2].querySelectorAll("article")[i].classList.remove("active");
    }
    section[2].querySelectorAll("article")[0].classList.add("active");
    section[2].style = "background-image: url('img/Casting_00.jpg')";
});

for (var i = 0; i < indicator[1].querySelectorAll("div div img").length; i++) {
    indicator[1].querySelectorAll("div div img")[i].addEventListener("click", function() {
        var pressedIndex = getIndex(event.target);

        for (var i = 0; i < section[2].querySelectorAll("article").length; i++) {
            section[2].querySelectorAll("article")[i].classList.remove("active");
        }
        section[2].querySelectorAll("article")[pressedIndex].classList.add("active");

        section[2].style = "background-image: url('img/Casting_0" + pressedIndex + ".jpg')";
    });
} // Casting 페이지 구현

menu.children[3].addEventListener("click", function() {
    video.querySelectorAll("div")[0].classList.add("active");
});

section[3].querySelectorAll("i")[0].addEventListener("click", function() {
    if (trailerIndex > 0) {
        trailerIndex--;

        for (var i = 0; i < video.querySelectorAll("div").length; i++) {
            video.querySelectorAll("div")[i].classList.remove("active");
        }
        video.querySelectorAll("div")[trailerIndex].classList.add("active");

        console.log(trailerIndex);
    }
});

section[3].querySelectorAll("i")[1].addEventListener("click", function() {
    if (trailerIndex < video.querySelectorAll("div").length - 1) {
        trailerIndex++;

        for (var i = 0; i < video.querySelectorAll("div").length; i++) {
            video.querySelectorAll("div")[i].classList.remove("active");
        }
        video.querySelectorAll("div")[trailerIndex].classList.add("active");

        console.log(trailerIndex);
    }
}); //trailer 페이지 구현

for (var i = 0; i < section[4].querySelectorAll("i").length; i++) {
    section[4].querySelectorAll("i")[i].addEventListener("click", function() {
        if (event.target.classList.contains("fa-play")) {
            for (var i = 0; i < section[4].querySelectorAll("video").length; i++) {
                section[4].querySelectorAll("i")[i].classList.replace("fa-pause", "fa-play");
                section[4].querySelectorAll("video")[i].pause();
            }
            event.target.classList.replace("fa-play", "fa-pause");
            event.target.parentNode.parentNode.querySelector("video").play();
        } else {
            event.target.classList.replace("fa-pause", "fa-play");
            event.target.parentNode.parentNode.querySelector("video").pause();
        }
    });
} //Ost 페이지 구현
