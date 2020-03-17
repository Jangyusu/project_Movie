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
    scrollPleaseTit = scrollPlease.querySelector(".scroll_please_title"),
    scrollPleaseIco = scrollPlease.querySelector(".scroll_please_icon"),
    // synopsis
    synopsis = document.querySelector(".synopsis"),
    synopsisInds = synopsis.querySelector(".synopsis_indicators"),
    synopsisInd = synopsis.querySelectorAll(".synopsis_indicator"),
    synopsisList = synopsis.querySelectorAll("article"),
    synopsisIndex = 0,
    // casting
    casting = document.querySelector(".casting"),
    castingList = casting.querySelectorAll("article"),
    castingCon = casting.querySelector(".casting_control"),
    castingInds = casting.querySelector(".casting_indicators"),
    castingInd = casting.querySelectorAll(".casting_indicator"),
    castingIndex = 0,
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
    ostList = ost.querySelectorAll(".ost_list"),
    music = ost.querySelectorAll(".music"),
    musicControls = ost.querySelectorAll("i"),
    musicControl = ost.querySelectorAll(".music_control"),
    musicTitle = ost.querySelectorAll(".music_title"),
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
} //스크롤링