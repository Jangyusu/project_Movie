var menuButton = document.querySelector(".menu_button"),
    menu = document.querySelector(".menu"),
    startButton = document.querySelector(".start"),
    header = document.querySelector("header"),
    director = document.querySelector(".director"),
    scrollDown = document.querySelector(".scroll"),
    section = document.querySelectorAll("section"),
    footer = document.querySelector("footer"),
    music = footer.querySelector(".music"),
    musicTitle = footer.querySelector(".music p"),
    indicator = document.querySelectorAll(".indicator"),
    video = document.querySelector(".video"),
    synopsisIndex = 0,
    castingIndex = 0,
    trailerIndex = 0,
    startTime,
    sec,
    min;

startButton.addEventListener("click", start); //시작 버튼
menuButton.addEventListener("click", menuToggle); //메뉴 토글

for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener("click", menuSelect);
} //메뉴 선택

for (var i = 0; i < indicator[0].children.length; i++) {
    indicator[0].children[i].addEventListener("click", synopsisIndicator);
} //synopsis indicator 버튼
menu.children[1].addEventListener("click", synopsisImg); //synopsis img 변경

indicator[1].querySelector("i").addEventListener("click", castingOnOff); //casting on/off 버튼
menu.children[2].addEventListener("click", catingImg); //casting img 변경
for (var i = 0; i < indicator[1].querySelectorAll("img").length; i++) {
    indicator[1].querySelectorAll("img")[i].addEventListener("click", castingIndicator);
} //Casting indicator 버튼

menu.children[3].addEventListener("click", function() {
    video.querySelectorAll("div")[0].classList.add("active");
}); //Trailer 첫화면

section[3].querySelectorAll("i")[0].addEventListener("click", prevTrailer); //Trailer prev 버튼
section[3].querySelectorAll("i")[1].addEventListener("click", nextTrailer); //trailer next 버튼

for (var i = 0; i < section[4].querySelectorAll("div").length; i++) {
    section[4]
        .querySelectorAll("div")
        [i].querySelector("i")
        .addEventListener("click", playPause); //음악 실행 및 일시정지 버튼

    section[4]
        .querySelectorAll("div")
        [i].querySelectorAll("i")[1]
        .addEventListener("click", stop); //음악 정지 버튼
} //Ost 음악 재생 및 정지 버튼

music.addEventListener("click", musicInPlay); //음악 플레이어

function getIndex(target) {
    var i = 0;

    while ((target = target.previousSibling) != null) {
        if (target.nodeType == 3) {
        } else {
            i++;
        }
    }
    return i;
} // 선택한 요소가 동일요소 목록 중 몇번째 요소인지 확인

function start() {
    startButton.classList.add("active");

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
        section[4].querySelector("i").click();
    }, 10);
} //시작 버튼

function menuToggle() {
    event.preventDefault();

    menuButton.classList.toggle("active");
    menu.classList.toggle("active");
} //메뉴 토글

function menuSelect() {
    var pressedIndex = getIndex(event.target);

    for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("active");
    }
    section[pressedIndex].classList.add("active");

    menuButton.classList.toggle("active");
    menu.classList.toggle("active");

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
} //메뉴 선택

function synopsisIndicator() {
    var pressedIndex = getIndex(event.target);

    for (var i = 0; i < indicator[0].children.length; i++) {
        indicator[0].children[i].classList.remove("active");
        section[1].querySelectorAll("article")[i].classList.remove("active");
    }

    indicator[0].children[pressedIndex].classList.add("active");
    section[1].querySelectorAll("article")[pressedIndex].classList.add("active");

    section[1].style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";
} //Synopsis indicator 버튼

function synopsisImg() {
    section[1].querySelectorAll("article")[0].classList.add("active");
    section[1].style = "background-image: url('img/Synopsis_00.jpg')";

    for (var i = 0; i < indicator[0].children.length; i++) {
        indicator[0].children[i].classList.remove("active");
    }
    indicator[0].children[0].classList.add("active");
} //Synopsis 페이지 구현

function castingOnOff() {
    this.classList.toggle("active"); // 화살표
    indicator[1].querySelector("div").classList.toggle("active"); // 배우 리스트
} //casting on/off 버튼

function catingImg() {
    for (var i = 0; i < section[2].querySelectorAll("article").length; i++) {
        section[2].querySelectorAll("article")[i].classList.remove("active");
    }
    section[2].querySelectorAll("article")[0].classList.add("active");
    section[2].style = "background-image: url('img/Casting_00.jpg')";
} //casting img 변경

function castingIndicator() {
    var pressedIndex = getIndex(event.target);

    for (var i = 0; i < section[2].querySelectorAll("article").length; i++) {
        section[2].querySelectorAll("article")[i].classList.remove("active");
    }
    section[2].querySelectorAll("article")[pressedIndex].classList.add("active");

    section[2].style = "background-image: url('img/Casting_0" + pressedIndex + ".jpg')";
} //Casting indicator 버튼

function prevTrailer() {
    if (trailerIndex > 0) {
        trailerIndex--;

        for (var i = 0; i < video.querySelectorAll("div").length; i++) {
            video.querySelectorAll("div")[i].classList.remove("active");
        }
        video.querySelectorAll("div")[trailerIndex].classList.add("active");
    }
} //Trailer prev 버튼

function nextTrailer() {
    if (trailerIndex < video.querySelectorAll("div").length - 1) {
        trailerIndex++;

        for (var i = 0; i < video.querySelectorAll("div").length; i++) {
            video.querySelectorAll("div")[i].classList.remove("active");
        }
        video.querySelectorAll("div")[trailerIndex].classList.add("active");
    }
} //Trailer next 버튼

function playPause() {
    var target = event.target,
        targetParent = target.parentNode.parentNode,
        sec = targetParent.querySelector(".sec").textContent,
        min = targetParent.querySelector(".min").textContent;

    if (target.classList.contains("fa-play")) {
        //재생 버튼
        for (var i = 0; i < section[4].querySelectorAll("video").length; i++) {
            section[4]
                .querySelectorAll("div")
                [i].querySelector("i")
                .classList.replace("fa-pause", "fa-play");
            section[4].querySelectorAll("video")[i].pause();

            section[4].querySelectorAll("div")[i].classList.remove("active"); //bounce 정지
        } // 모든 노래 멈춤

        target.classList.replace("fa-play", "fa-pause"); // 선택한 노래 아이콘 변경
        targetParent.querySelector("video").play(); // 선택한 노래 재생
        target.parentNode.classList.add("active"); //bounce 실행

        clearInterval(startTime); // 노래 일시정지

        startTime = setInterval(function() {
            if (sec < 9) {
                targetParent.querySelector(".sec").innerHTML = "0" + ++sec;
            } else if (sec == 59) {
                targetParent.querySelector(".sec").innerHTML = "00";
                targetParent.querySelector(".min").innerHTML = "0" + ++min;
                sec = 0;
            } else {
                targetParent.querySelector(".sec").innerHTML = ++sec;
            }

            if (targetParent.querySelector(".time").textContent.slice(0, 5) == targetParent.querySelector(".music_time").textContent) {
                clearInterval(startTime);

                targetParent.querySelector(".min").innerHTML = "00";
                targetParent.querySelector(".sec").innerHTML = "00";

                targetParent.querySelector("i").classList.replace("fa-pause", "fa-play");
                for (var i = 0; i < 2; i++) {
                    targetParent.querySelectorAll("i")[i].classList.remove("active"); // 재생 아이콘 초기화
                }
                for (var i = 0; i < section[4].querySelectorAll("div").length; i++) {
                    section[4].querySelectorAll("div")[i].classList.remove("active"); //bounce 정지
                }
            }
        }, 1000);

        for (var i = 0; i < section[4].querySelectorAll("i").length; i++) {
            section[4].querySelectorAll("i")[i].classList.remove("active");
        }
        for (var i = 0; i < 2; i++) {
            targetParent.querySelectorAll("i")[i].classList.add("active");
        }

        musicTitle.textContent = targetParent.querySelector("p").textContent;
        music.classList.add("active"); //노래 재생시 헤드폰 출현
    } else {
        //일시정지 버튼
        target.classList.replace("fa-pause", "fa-play");
        targetParent.querySelector("video").pause();
        clearInterval(startTime);

        for (var i = 0; i < 2; i++) {
            targetParent.querySelectorAll("i")[i].classList.remove("active"); //재생 아이콘 초기화
        }
        for (var i = 0; i < section[4].querySelectorAll("div").length; i++) {
            section[4].querySelectorAll("div")[i].classList.remove("active"); //bounce 정지
        }

        music.classList.remove("active"); //노래 정지시 헤드폰 숨김
    }
} //Ost 시작 및 일시정지 버튼

function stop() {
    var target = event.target, //선택 요소
        targetParent = target.parentNode.parentNode, //선택의 부모요소
        targetPreSibling = target.previousSibling.previousSibling; //선택의 자식요소

    targetParent.querySelector("video").load(); //선택한 노래 정지
    targetPreSibling.classList.replace("fa-pause", "fa-play"); //선택한 노래 아이콘 변경

    targetParent.querySelector(".min").innerHTML = "00"; //선택한 노래 시간 초기화
    targetParent.querySelector(".sec").innerHTML = "00"; //선택한 노래 시간 초기화

    for (var i = 0; i < 2; i++) {
        targetParent.querySelectorAll("i")[i].classList.remove("active"); //재생 아이콘 초기화
    }

    for (var i = 0; i < section[4].querySelectorAll("div").length; i++) {
        section[4].querySelectorAll("div")[i].classList.remove("active"); //bounce 정지
    }

    clearInterval(startTime); //선택한 노래 정지
    sec = 1; //선택한 노래 시간 초기화
    min = 1; //선택한 노래 시간 초기화

    music.classList.remove("active"); //노래 정지시 헤드폰 숨김
} //Ost 정지 버튼

function musicInPlay() {
    for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("active");
    }
    section[4].classList.add("active");
}
