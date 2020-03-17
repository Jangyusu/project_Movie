window.onload = function () {
    // start
    var startButton = document.querySelector(".start"),
        // header
        header = document.querySelector("header"),
        // menu
        menuButton = document.querySelector(".menu_button"),
        menus = document.querySelector(".menus"),
        menu = document.querySelectorAll(".menu"),
        wheelIndex = 0,
        wheelDelay = true,
        section = document.querySelectorAll("section"),
        // home
        home = document.querySelector(".home"),
        homeTitle = home.querySelector(".home_title"),
        director = home.querySelector(".director"),
        directorTitle = director.querySelector(".director_title"),
        directorName = director.querySelector(".director_name"),
        scrollPlease = home.querySelector(".scroll_please"),
        scrollPleaseIco = scrollPlease.querySelector(".scroll_please_icon"),
        // synopsis
        synopsis = document.querySelector(".synopsis"),
        synopsisInd = synopsis.querySelectorAll(".synopsis_indicator"),
        synopsisList = synopsis.querySelectorAll("article"),
        // casting
        casting = document.querySelector(".casting"),
        castingList = casting.querySelectorAll("article"),
        castingCon = casting.querySelector(".casting_control"),
        castingInds = casting.querySelector(".casting_indicators"),
        castingInd = casting.querySelectorAll(".casting_indicator"),
        // trailer
        trailer = document.querySelector(".trailer"),
        tarilerPrev = trailer.querySelector(".tariler_prev"),
        tarilerNext = trailer.querySelector(".tariler_next"),
        videos = trailer.querySelector(".videos"),
        video = trailer.querySelectorAll(".video"),
        firstVideo = trailer.querySelector(".video"),
        trailerIndex = 0,
        // ost
        ost = document.querySelector(".ost"),
        music = ost.querySelectorAll(".music"),
        musicControls = ost.querySelectorAll("i"),
        musicControl = ost.querySelectorAll(".music_control"),
        playMusic = ost.querySelectorAll(".play_music"),
        stopMusic = ost.querySelectorAll(".stop_music"),
        startTime,
        sec,
        min,
        // gallery
        gallery = document.querySelector(".gallery"),
        photos = gallery.querySelectorAll(".photo"),
        photoView = gallery.querySelector(".photo_view"),
        // footer
        footer = document.querySelector("footer"),
        playingMusic = footer.querySelector(".playing_music"),
        playingMusicTitle = footer.querySelector(".playing_music_title");


    window.addEventListener("mousewheel", scrolling); //마우스 휠
    startButton.addEventListener("click", start); //시작 버튼
    menuButton.addEventListener("click", menuToggle); //메뉴 토글
    menu.forEach(menu => menu.addEventListener("click", menuSelect)); //메뉴 선택

    synopsisInd.forEach(synopsisInd => synopsisInd.addEventListener("click", synopsisIndicator)); //synopsis indicator 버튼
    menu[1].addEventListener("click", synopsisImg); //synopsis img 변경

    castingCon.addEventListener("click", castingOnOff); //casting on/off 버튼
    menu[2].addEventListener("click", catingImg); //casting img 변경

    castingInd.forEach(castingInd => castingInd.addEventListener("click", castingIndicator)); //Casting indicator 버튼

    menu[3].addEventListener("click", function () {
        firstVideo.classList.add("active");
    }); //Trailer 첫화면

    tarilerPrev.addEventListener("click", prevTrailer); //Trailer prev 버튼
    tarilerNext.addEventListener("click", nextTrailer); //trailer next 버튼

    for (var i = 0; i < music.length; i++) {
        playMusic[i].addEventListener("click", playPause); //음악 실행 및 일시정지 버튼
        stopMusic[i].addEventListener("click", stop); //음악 정지 버튼
    } //Ost 음악 재생 및 정지 버튼

    playingMusic.addEventListener("click", musicInPlay); //음악 플레이어

    photos.forEach(photo => photo.addEventListener("click", visiblePhoto)); //선택한 사진 보기
    photoView.addEventListener("click", hiddenPhoto); //사진 닫기

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

        setTimeout(function () {
            header.classList.add("active");
            home.classList.add("active");
            homeTitle.classList.add("active");
            director.classList.add("active");
            directorTitle.classList.add("active");
            directorName.classList.add("active");
            scrollPlease.classList.add("active");
            scrollPleaseIco.classList.add("active");
            footer.classList.add("active");
            playMusic[0].click();
        }, 10);
    } //시작 버튼

    function menuToggle() {
        event.preventDefault();

        menuButton.classList.toggle("active");
        menus.classList.toggle("active");
        menuButton.classList.remove("flash");
    } //메뉴 토글

    function menuSelect() {
        var pressedIndex = getIndex(event.target);

        section.forEach(section => section.classList.remove("active"));
        section[pressedIndex].classList.add("active");

        menuButton.classList.toggle("active");
        menus.classList.toggle("active");

        synopsisList.forEach(synopsisList => synopsisList.classList.remove("active"));

        castingList.forEach(castingList => castingList.classList.remove("active"));
        video.forEach(video => video.classList.remove("active"));

        trailerIndex = 0;
    } //메뉴 선택

    function synopsisIndicator() {
        var pressedIndex = getIndex(event.target);

        for (var i = 0; i < synopsisInd.length; i++) {
            synopsisInd[i].classList.remove("active");
            synopsisList[i].classList.remove("active");
        }

        synopsisInd[pressedIndex].classList.add("active");
        synopsisList[pressedIndex].classList.add("active");

        synopsis.style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";
    } //Synopsis indicator 버튼

    function synopsisImg() {
        synopsis.style = "background-image: url('img/Synopsis_00.jpg')";

        synopsisInd.forEach(synopsisInd => synopsisInd.classList.remove("active"));
        synopsisList[0].classList.add("active");
        synopsisInd[0].classList.add("active");
    } //Synopsis 페이지 구현

    function castingOnOff() {
        this.classList.toggle("active"); // 화살표
        castingInds.classList.toggle("active"); // 배우 리스트
    } //casting on/off 버튼

    function catingImg() {
        casting.style = "background-image: url('img/Casting_00.jpg')";

        castingList.forEach(castingList => castingList.classList.remove("active"));
        castingList[0].classList.add("active");
    } //casting img 변경

    function castingIndicator() {
        var pressedIndex = getIndex(event.target);

        casting.style = "background-image: url('img/Casting_0" + pressedIndex + ".jpg')";

        castingList.forEach(castingList => castingList.classList.remove("active"));
        castingList[pressedIndex].classList.add("active");
    } //Casting indicator 버튼

    function prevTrailer() {
        if (trailerIndex > 0) {
            trailerIndex--;

            video.forEach(video => video.classList.remove("active"));
            video[trailerIndex].classList.add("active");
        }
    } //Trailer prev 버튼

    function nextTrailer() {
        if (trailerIndex < video.length - 1) {
            trailerIndex++;

            video.forEach(video => video.classList.remove("active"));
            video[trailerIndex].classList.add("active");
        }
    } //Trailer next 버튼

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
    }

    function visiblePhoto(e) {
        photoView.src = e.target.src;
        photoView.classList.add("active");
    }

    function hiddenPhoto() {
        photoView.classList.remove("active");
    }

    function scrolling(e) {
        if (wheelDelay == true) {
            wheelDelay = false;

            if (e.deltaY > 0 && 0 <= wheelIndex && wheelIndex < section.length - 1) {
                wheelIndex++;
            } else if (e.deltaY < 0 && 0 < wheelIndex && wheelIndex <= section.length) {
                wheelIndex--;
            }

            section.forEach(section => section.classList.remove("active"));
            section[wheelIndex].classList.add("active");

            menuButton.classList.remove("active");
            menus.classList.remove("active");

            for (var i = 0; i < synopsisList.length; i++) {
                synopsisList[i].classList.remove("active");
            }
            for (var i = 0; i < castingList.length; i++) {
                castingList[i].classList.remove("active");
            }

            video.forEach(video => video.classList.remove("active"));
            trailerIndex = 0;

            setTimeout(function () {
                wheelDelay = true;
            }, 1200);
        }
    }
}

