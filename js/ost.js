for (var i = 0; i < music.length; i++) {
    playMusic[i].addEventListener("click", playPause); //음악 실행 및 일시정지 버튼
    stopMusic[i].addEventListener("click", stop); //음악 정지 버튼
} //Ost 음악 재생 및 정지 버튼

playingMusic.addEventListener("click", musicInPlay); //음악 플레이어

function playPause(e) {
    var target = e.target,
        targetParent = target.parentNode.parentNode,
        targetCons = targetParent.querySelectorAll("i"),
        targetCon = target.parentNode,
        targetMusic = targetParent.querySelectorAll("video"),
        targetPlay = targetParent.querySelector("i"),
        targetTitle = targetParent.querySelector("p"),
        musicTimeTxt = targetParent.querySelector(".music_time").textContent,
        timeText = targetParent.querySelector(".time").textContent,
        sec = targetParent.querySelector(".sec"),
        secText = sec.textContent,
        min = targetParent.querySelector(".min"),
        minText = min.textContent;

    if (target.classList.contains("fa-play")) {
        //재생 버튼
        for (var i = 0; i < music.length; i++) {
            playMusic[i].classList.replace("fa-pause", "fa-play");
            music[i].pause();

            musicControl[i].classList.remove("active"); //bounce 정지
        } // 모든 노래 멈춤

        target.classList.replace("fa-play", "fa-pause"); // 선택한 노래 아이콘 변경
        targetMusic[0].play(); // 선택한 노래 재생
        targetCon.classList.add("active"); //bounce 실행

        clearInterval(startTime); // 노래 일시정지

        startTime = setInterval(function () {
            if (secText < 9) {
                sec.innerHTML = "0" + ++secText;
            } else if (secText == 59) {
                sec.innerHTML = "00";
                min.innerHTML = "0" + ++minText;
                secText = 0;
            } else {
                sec.innerHTML = ++secText;
            }

            if (timeText.slice(0, 5) == musicTimeTxt) {
                clearInterval(startTime);

                min.innerHTML = "00";
                sec.innerHTML = "00";

                targetPlay.classList.replace("fa-pause", "fa-play");
                for (var i = 0; i < 2; i++) {
                    targetCons[i].classList.remove("active"); // 재생 아이콘 초기화
                }
                for (var i = 0; i < musicControl.length; i++) {
                    musicControl[i].classList.remove("active"); //bounce 정지
                }
            }
        }, 1000);

        for (var i = 0; i < musicControls.length; i++) {
            musicControls[i].classList.remove("active");
        }
        for (var i = 0; i < 2; i++) {
            targetCons[i].classList.add("active");
        }

        playingMusicTitle.textContent = targetTitle.textContent;
        playingMusic.classList.add("active"); //노래 재생시 헤드폰 출현
    } else {
        //일시정지 버튼
        target.classList.replace("fa-pause", "fa-play");
        targetParent.querySelector("video").pause();
        clearInterval(startTime);

        for (var i = 0; i < 2; i++) {
            targetCons[i].classList.remove("active"); //재생 아이콘 초기화
        }
        for (var i = 0; i < musicControl.length; i++) {
            musicControl[i].classList.remove("active"); //bounce 정지
        }

        playingMusic.classList.remove("active"); //노래 정지시 헤드폰 숨김
    }
} //Ost 시작 및 일시정지 버튼

function stop(e) {
    var target = e.target, //선택 요소
        targetParent = target.parentNode.parentNode, //선택의 부모요소
        targetPreSibling = target.previousSibling.previousSibling, //선택의 자식요소
        targetCons = targetParent.querySelectorAll("i"),
        targetMusic = targetParent.querySelector("video"),
        targetMin = targetParent.querySelector(".min"),
        targetSec = targetParent.querySelector(".sec");

    targetMusic.load(); //선택한 노래 정지
    targetPreSibling.classList.replace("fa-pause", "fa-play"); //선택한 노래 아이콘 변경

    targetMin.innerHTML = "00"; //선택한 노래 시간 초기화
    targetSec.innerHTML = "00"; //선택한 노래 시간 초기화

    for (var i = 0; i < 2; i++) {
        targetCons[i].classList.remove("active"); //재생 아이콘 초기화
    }

    for (var i = 0; i < musicControl.length; i++) {
        musicControl[i].classList.remove("active"); //bounce 정지
    }

    clearInterval(startTime); //선택한 노래 정지
    sec = 1; //선택한 노래 시간 초기화
    min = 1; //선택한 노래 시간 초기화

    playingMusic.classList.remove("active"); //노래 정지시 헤드폰 숨김
} //Ost 정지 버튼

function musicInPlay() {
    for (var i = 0; i < section.length; i++) {
        section[i].classList.remove("active");
    }
    section[4].classList.add("active");
} //음악 플레이어