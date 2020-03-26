window.onload = function () {   //window 로드가 완료되면 실행

    //loading
    var loading = document.querySelector(".load_image"),
        loadingImags = document.querySelector(".loading_images"),

        //menu
        header = document.querySelector("header"),
        pcMenubutton = header.querySelector(".header__menu_button"),
        pcMenus = header.querySelector(".header__pc_menus"),
        pcMenu = header.querySelectorAll(".header__pc_menus li"),
        mobileMenuButton = header.querySelector(".header__mobile_button"),
        mobileMenus = header.querySelector(".header__mobile_menus"),
        mobileMenu = header.querySelectorAll(".header__mobile_menus li"),
        section = document.querySelectorAll("section"),

        //home
        home = document.querySelector(".home"),
        homeTitle = home.querySelector(".home__title"),
        director = home.querySelector(".home__director"),
        directorTitle = director.querySelector(".home__director_title span"),
        directorName = director.querySelector(".home__director_name span"),

        //synopsis
        synopsis = document.querySelector(".synopsis"),
        synopsisList = synopsis.querySelectorAll("article"),
        synopsisInd = synopsis.querySelectorAll(".synopsis__indicators li"),
        synopsisIndex = 0,

        //casting
        casting = document.querySelector(".casting"),
        castingList = casting.querySelectorAll("article"),
        castingCon = casting.querySelector(".casting__control"),
        castingInds = casting.querySelector(".casting__indicators"),
        castingInd = casting.querySelectorAll(".casting__indicators img"),

        //trailer
        trailer = document.querySelector(".trailer"),
        trailerPrev = trailer.querySelector(".trailer__prev"),
        trailerNext = trailer.querySelector(".trailer__next"),
        video = trailer.querySelectorAll(".trailer__video"),
        firstTrailer = trailer.querySelector(".trailer__video"),
        trailerIndex = 0,

        //ost
        ost = document.querySelector(".ost"),
        ostList = ost.querySelectorAll(".ost__list"),
        ostControls = ost.querySelectorAll(".ost__control"),
        ostControl = ost.querySelectorAll(".ost__control i"),
        ostPlay = ost.querySelectorAll(".ost__play"),
        ostStop = ost.querySelectorAll(".ost__stop"),
        ostMusic = ost.querySelectorAll(".ost__music"),
        ostSlide = ost.querySelector(".ost__slide"),
        ostIndex = 0,
        startTime,

        //gallery
        gallery = document.querySelector(".gallery"),
        photos = gallery.querySelectorAll(".gallery__photos img"),
        photoView = gallery.querySelector(".gallery__view"),
        photoHand = gallery.querySelector(".gallery__slide"),
        photoViewIndex = 0,

        //footer
        footer = document.querySelector("footer"),
        musicPlayer = footer.querySelector(".footer__music_player"),
        musicPlayerTitle = footer.querySelector(".footer__music_title"),

        //touch
        synopsisTouchStart,
        synopsisTouchEnd,
        ostTouchStart,
        ostTouchEnd,
        trailerTouchStart,
        trailerTouchEnd;




    loadingImags.remove(); //로딩이 완료된 이미지 제거
    start(); //로딩이 완료되면 웹사이트 실행

    pcMenubutton.addEventListener("click", menuToggle); //메뉴 토글
    for (var i = 0; i < pcMenu.length; i++) {
        pcMenu[i].addEventListener("click", menuSelect); //메뉴 선택
    }


    mobileMenuButton.addEventListener("click", mobileMenuToggle) //mobile메뉴 토글
    for (var i = 0; i < mobileMenu.length; i++) {
        mobileMenu[i].addEventListener("click", mobileMenuSelect); //mobile메뉴 선택
    }


    pcMenu[1].addEventListener("click", synopsisImg); //synopsis img 변경
    mobileMenu[1].addEventListener("click", synopsisImg); //mobile synopsis img 변경
    for (var i = 0; i < synopsisInd.length; i++) {
        synopsisInd[i].addEventListener("click", synopsisIndicator); //synopsis indicator 버튼
    }
    synopsis.addEventListener("touchstart", synopsisStartTouch) //synopsis 터치가 시작했을 때
    synopsis.addEventListener("touchend", synopsisEndTouch) //synopsis 터치가 끝났을 때 이전곡 혹은 다음곡 보기


    castingCon.addEventListener("click", castingOnOff); //casting on/off 버튼
    pcMenu[2].addEventListener("click", catingImg); //casting img 변경
    mobileMenu[2].addEventListener("click", catingImg); //mobile casting img 변경
    for (var i = 0; i < castingInd.length; i++) {
        castingInd[i].addEventListener("click", castingIndicator); //Casting indicator 버튼
    }


    pcMenu[3].addEventListener("click", TarilerStart); //Trailer 첫화면
    mobileMenu[3].addEventListener("click", TarilerStart); //mobile Trailer 첫화면
    trailerPrev.addEventListener("click", prevTrailer); //Trailer prev 버튼
    trailerNext.addEventListener("click", nextTrailer); //trailer next 버튼
    trailer.addEventListener("touchstart", trailerStartTouch, true); //trailer 터치가 시작했을 때
    trailer.addEventListener("touchend", trailerEndTouch); //trailer 터치가 끝났을 때 이전 혹은 다음 trailer 보기


    pcMenu[4].addEventListener("click", ostStart) //ost 첫화면
    mobileMenu[4].addEventListener("click", ostStart) //mobile ost 첫화면
    for (var i = 0; i < ostMusic.length; i++) {
        ostPlay[i].addEventListener("click", playPause); //음악 실행 및 일시정지 버튼
        ostStop[i].addEventListener("click", stop); //음악 정지 버튼
    }
    ost.addEventListener("touchstart", ostStartTouch) //ost 터치가 시작했을 때
    ost.addEventListener("touchend", ostEndTouch) //ost 터치가 끝났을 때 이전곡 혹은 다음곡 보기
    musicPlayer.addEventListener("click", musicInPlay); //음악 플레이어


    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", visiblePhoto); //선택한 사진 보기
    }
    photoView.addEventListener("touchstart", photoViewStartTouch) //photoView 터치가 시작했을 때
    photoView.addEventListener("touchend", photoViewEndTouch) //photoView 터치가 끝났을 때 이전 혹은 다음사진 보기
    photoView.addEventListener("click", hiddenPhoto); //사진 닫기





    function getIndex(target) { //선택한 요소가 동일요소 목록 중 몇번째 요소인지 확인
        var i = 0;

        while ((target = target.previousSibling) != null) {
            if (target.nodeType == 3) {
            } else {
                i++;
            }
        }
        return i;
    }

    function start() { //start
        loading.classList.add("active");

        setTimeout(function () {
            header.classList.add("active");
            home.classList.add("active");
            homeTitle.classList.add("active");
            director.classList.add("active");
            directorTitle.classList.add("active");
            directorName.classList.add("active");
            footer.classList.add("active");
        }, 100);
    }

    function menuToggle() { //메뉴 토글
        event.preventDefault();

        pcMenubutton.classList.toggle("active");
        pcMenus.classList.toggle("active");
        pcMenubutton.classList.remove("flash");
    }

    function mobileMenuToggle() { //berger메뉴 토글
        event.preventDefault();

        mobileMenuButton.classList.toggle("active");
        mobileMenus.classList.toggle("active");
    }

    function menuSelect(e) { //메뉴 선택
        var pressedIndex = getIndex(e.target);

        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("active");  //모든 section active클래스 제거
        }
        section[pressedIndex].classList.add("active");

        pcMenubutton.classList.toggle("active");
        pcMenus.classList.toggle("active");

        for (var i = 0; i < synopsisList.length; i++) {
            synopsisList[i].classList.remove("active"); //모든 synopsisList active클래스 제거
        }
        for (var i = 0; i < castingList.length; i++) {
            castingList[i].classList.remove("active"); //모든 castingList active클래스 제거
        }
        for (var i = 0; i < video.length; i++) {
            video[i].classList.remove("active"); //모든 video active클래스 제거
        }
        for (var i = 0; i < ostList.length; i++) {
            ostList[i].classList.remove("active"); //모든 ostList active클래스 제거
        }

        photoView.classList.remove("active"); //gallery 안에 보고있던 사진 끄기

        trailerIndex = 0;
    }

    function mobileMenuSelect(e) {
        var pressedIndex = getIndex(e.target);

        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("active");  //모든 section active클래스 제거
        }
        section[pressedIndex].classList.add("active");

        mobileMenuButton.classList.remove("active");
        mobileMenus.classList.remove("active");

        for (var i = 0; i < synopsisList.length; i++) {
            synopsisList[i].classList.remove("active"); //모든 synopsisList active클래스 제거
        }
        for (var i = 0; i < castingList.length; i++) {
            castingList[i].classList.remove("active"); //모든 castingList active클래스 제거
        }
        for (var i = 0; i < video.length; i++) {
            video[i].classList.remove("active"); //모든 video active클래스 제거
        }
        for (var i = 0; i < ostList.length; i++) {
            ostList[i].classList.remove("active"); //모든 ostList active클래스 제거
        }

        photoView.classList.remove("active"); //gallery 안에 보고있던 사진 끄기

        trailerIndex = 0;
    }

    function synopsisIndicator(e) { //Synopsis indicator 버튼
        var pressedIndex = getIndex(e.target);

        for (var i = 0; i < synopsisInd.length; i++) {
            synopsisInd[i].classList.remove("active");
            synopsisList[i].classList.remove("active");
        }

        synopsisInd[pressedIndex].classList.add("active");
        synopsisList[pressedIndex].classList.add("active");

        synopsis.style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";

        synopsisIndex = pressedIndex;
    }

    function synopsisImg() { //Synopsis 페이지 구현
        synopsis.style = "background-image: url('img/Synopsis_00.jpg')";

        for (var i = 0; i < synopsisInd.length; i++) {
            synopsisInd[i].classList.remove("active"); //모든 synopsisInd active클래스 제거
        }
        synopsisList[0].classList.add("active");
        synopsisInd[0].classList.add("active");
    }

    function synopsisStartTouch(e) { //터치가 시작했을 때
        synopsisTouchStart = e.changedTouches[0].screenX; //screenX값
    }

    function synopsisEndTouch(e) { //터치가 끝났을 때
        synopsisTouchEnd = e.changedTouches[0].screenX; //screenX값

        if (synopsisTouchStart - synopsisTouchEnd <= -50) { //왼쪽에서 오른쪽으로 50px 이상 터치
            prevSynopsis(); //이전곡
        } else if (synopsisTouchStart - synopsisTouchEnd >= 50) { //오른쪽에서 왼쪽으로 50px 이상 터치
            nextSynopsis(); //다음곡
        }
    }

    function prevSynopsis() { //이전 synopsis
        if (synopsisIndex == 0) { //synopsisIndex값을 0~2 사이에서 변경
            synopsisIndex = synopsisList.length - 1;
        } else {
            synopsisIndex--;
        }

        for (var i = 0; i < synopsisList.length; i++) {
            synopsisList[i].classList.remove("active"); //모든 synopsisList active클래스 제거
            synopsisInd[i].classList.remove("active"); //모든 synopsisList active클래스 제거            
        }

        synopsisList[synopsisIndex].classList.add("active"); //이전 synopsisList에 active클래스 추가
        synopsisInd[synopsisIndex].classList.add("active");
        synopsis.style = "background-image: url('img/Synopsis_0" + synopsisIndex + ".jpg')";
    }

    function nextSynopsis() { //다음 synopsis
        if (synopsisIndex == synopsisList.length - 1) { //synopsisIndex값을 0~2 사이에서 변경
            synopsisIndex = 0
        } else {
            synopsisIndex++;
        }

        for (var i = 0; i < synopsisList.length; i++) { //모든 synopsisList active클래스 제거
            synopsisList[i].classList.remove("active");
            synopsisInd[i].classList.remove("active");
        }

        synopsisList[synopsisIndex].classList.add("active"); //다음 synopsisList에 active클래스 추가
        synopsisInd[synopsisIndex].classList.add("active");
        synopsis.style = "background-image: url('img/Synopsis_0" + synopsisIndex + ".jpg')";
    }

    function castingOnOff() { //casting on/off 버튼
        this.classList.toggle("active"); //화살표
        castingInds.classList.toggle("active"); //배우 리스트
    }

    function catingImg() { //casting img 변경
        casting.style = "background-image: url('img/Casting_00.jpg')";

        for (var i = 0; i < castingList.length; i++) {
            castingList[i].classList.remove("active"); //모든 castingList active클래스 제거
        }
        castingList[0].classList.add("active");
    }

    function castingIndicator() { //Casting indicator 버튼
        var pressedIndex = getIndex(event.target);

        casting.style = "background-image: url('img/Casting_0" + pressedIndex + ".jpg')";

        for (var i = 0; i < castingList.length; i++) {
            castingList[i].classList.remove("active"); //모든 castingList active클래스 제거
        }
        castingList[pressedIndex].classList.add("active");
    }

    function TarilerStart() {
        firstTrailer.classList.add("active"); //Trailer 첫화면
    }

    function prevTrailer() {
        if (trailerIndex > 0) {
            trailerIndex--;

            for (var i = 0; i < video.length; i++) {
                video[i].classList.remove("active"); //모든 video active클래스 제거
            }
            video[trailerIndex].classList.add("active"); //선택한 video active클래스 추가

            if (trailerIndex == 0) {
                trailerPrev.style.visibility = "hidden";
            }
        }

        trailerNext.style.visibility = "visible";
    } //Trailer prev 버튼

    function nextTrailer() {
        if (trailerIndex < video.length - 1) {
            trailerIndex++;

            for (var i = 0; i < video.length; i++) {
                video[i].classList.remove("active"); //모든 video active클래스 제거
            }
            video[trailerIndex].classList.add("active"); //선택한 video active클래스 추가

            if (trailerIndex == video.length - 1) {
                trailerNext.style.visibility = "hidden";
            }
        }

        trailerPrev.style.visibility = "visible";
    } //Trailer next 버튼

    function playPause(e) {
        var target = e.target,
            targetParent = target.parentNode.parentNode,
            targetCons = targetParent.querySelectorAll("i"),
            targetCon = target.parentNode,
            targetMusic = targetParent.querySelectorAll(".ost__music"),
            targetPlay = targetParent.querySelector("i"),
            targetTitle = targetParent.querySelector(".ost__title"),
            ostLengthTime = targetParent.querySelector(".ost__length_time").textContent,
            ostPlayTime = targetParent.querySelector(".ost__play_time").textContent,
            sec = targetParent.querySelector(".ost__sec"),
            secText = sec.textContent,
            min = targetParent.querySelector(".ost__min"),
            minText = min.textContent;

        if (target.classList.contains("fa-play")) {

            //재생 버튼
            for (var i = 0; i < ostMusic.length; i++) { //모든 노래 멈춤
                ostPlay[i].classList.replace("fa-pause", "fa-play"); //모든 ost 아이콘 초기화
                ostMusic[i].pause(); //모든 ost 멈춤

                ostControls[i].classList.remove("active"); //bounce 정지
            }

            target.classList.replace("fa-play", "fa-pause"); //선택한 노래 아이콘 변경
            targetMusic[0].play(); //선택한 노래 재생
            targetCon.classList.add("active"); //bounce 실행

            clearInterval(startTime); //노래 일시정지

            startTime = setInterval(function () { //재생 중인 음악 시간 체크
                if (secText < 9) { // 시간초가 1자리 일 때
                    sec.innerHTML = "0" + ++secText;
                } else if (secText == 59) { // 시간초가 59초 일 때
                    sec.innerHTML = "00";
                    min.innerHTML = "0" + ++minText;
                    secText = 0;
                } else { // 시간초가 2자리 일 때
                    sec.innerHTML = ++secText;
                }

                if (ostPlayTime.slice(0, 5) == ostLengthTime) { //재생 중인 음악이 끝났을 때
                    clearInterval(startTime); //재생 중인 음악 시간 체크 멈춤

                    min.innerHTML = "00"; //재생 중인 음악 시간분 초기화
                    sec.innerHTML = "00"; //재생 중인 음악 시간초 초기화

                    targetPlay.classList.replace("fa-pause", "fa-play"); //재생 중인 음악 아이콘 변경
                    for (var i = 0; i < 2; i++) {
                        targetCons[i].classList.remove("active"); //재생 아이콘 초기화
                    }
                    for (var i = 0; i < ostControls.length; i++) {
                        ostControls[i].classList.remove("active"); //bounce 정지
                    }
                }
            }, 1000);

            for (var i = 0; i < ostControl.length; i++) {
                ostControl[i].classList.remove("active"); //모든 재생 아이콘 초기화
            }
            for (var i = 0; i < 2; i++) {
                targetCons[i].classList.add("active"); //선택한 ost 아이콘 변경
            }

            musicPlayerTitle.textContent = targetTitle.textContent; //노래 재생시 음악플레이어 타이틀 변경
            musicPlayer.classList.add("active"); //노래 재생시 헤드폰 출현
        } else {

            //일시정지 버튼
            target.classList.replace("fa-pause", "fa-play"); //재생 중인 ost의 아이콘 변경
            targetParent.querySelector("video").pause(); //재생 중인 ost 정지
            clearInterval(startTime); //재생 중인 ost의 시간 정지

            for (var i = 0; i < 2; i++) {
                targetCons[i].classList.remove("active"); //재생 아이콘 초기화
            }
            for (var i = 0; i < ostControls.length; i++) {
                ostControls[i].classList.remove("active"); //bounce 정지
            }

            musicPlayer.classList.remove("active"); //노래 정지시 헤드폰 숨김
        }
    } //Ost 시작 및 일시정지 버튼

    function stop(e) {  //Ost 정지 버튼
        var target = e.target,
            targetParent = target.parentNode.parentNode,
            targetPreSibling = target.previousSibling.previousSibling,
            targetCons = targetParent.querySelectorAll("i"),
            targetMusic = targetParent.querySelector(".ost__music"),
            targetMin = targetParent.querySelector(".ost__min"),
            targetSec = targetParent.querySelector(".ost__sec");

        targetMusic.load(); //선택한 노래 정지
        targetPreSibling.classList.replace("fa-pause", "fa-play"); //선택한 노래 아이콘 변경

        targetMin.innerHTML = "00"; //선택한 노래 시간 초기화
        targetSec.innerHTML = "00"; //선택한 노래 시간 초기화

        for (var i = 0; i < 2; i++) {
            targetCons[i].classList.remove("active"); //재생 아이콘 초기화
        }

        for (var i = 0; i < ostControls.length; i++) {
            ostControls[i].classList.remove("active"); //bounce 정지
        }

        clearInterval(startTime); //선택한 노래 정지
        sec = 1; //선택한 노래 시간 초기화
        min = 1; //선택한 노래 시간 초기화

        musicPlayer.classList.remove("active"); //노래 정지시 헤드폰 숨김
    }

    function prevOst() { //이전 ost
        if (ostIndex == 0) { //ostIndex값을 0~2 사이에서 변경
            ostIndex = ostList.length - 1;
        } else {
            ostIndex--;
        }

        for (var i = 0; i < ostList.length; i++) {
            ostList[i].classList.remove("active"); //모든 ostList active클래스 제거
        }

        ostList[ostIndex].classList.add("active"); //이전 ostList에 active클래스 추가
    }

    function nextOst() { //다음 ost
        if (ostIndex == ostList.length - 1) { //ostIndex값을 0~2 사이에서 변경
            ostIndex = 0
        } else {
            ostIndex++;
        }

        for (var i = 0; i < ostList.length; i++) { //모든 ostList active클래스 제거
            ostList[i].classList.remove("active");
        }

        ostList[ostIndex].classList.add("active"); //다음 ostList에 active클래스 추가
    }

    function ostStart() { //모바일 ost메뉴 선택
        ostList[0].classList.add("active"); //첫번째 ost에 active클래스 추가
        ostSlide.classList.add("active"); //슬라이드 이미지 재생
    }

    function musicInPlay() {
        for (var i = 0; i < section.length; i++) {
            section[i].classList.remove("active");//모든 페이지에 active클래스 제거
        }
        section[4].classList.add("active"); //ost 페이지에 active클래스 추가
        ostList[ostIndex].classList.add("active"); //현재 재생중인 ostList에 active클래스 추가
    }

    function visiblePhoto(e) {
        photoView.src = e.target.src;
        photoView.classList.add("active"); //보여줄 photo의 active클래스 추가

        photoHand.classList.add("active"); //손가락 애니메이션 추가
        photoViewIndex = getIndex(event.target);
    }

    function hiddenPhoto() {
        photoView.classList.remove("active"); //보고있던 photo의 active클래스 제거
        photoHand.classList.remove("active"); //손가락 애니메이션 제거
    }

    function ostStartTouch(e) { //터치가 시작했을 때
        ostTouchStart = e.changedTouches[0].screenX; //screenX값
    }

    function ostEndTouch(e) { //터치가 끝났을 때
        ostTouchEnd = e.changedTouches[0].screenX; //screenX값

        if (ostTouchStart - ostTouchEnd <= -50) { //왼쪽에서 오른쪽으로 50px 이상 터치
            prevOst(); //이전곡
        } else if (ostTouchStart - ostTouchEnd >= 50) { //오른쪽에서 왼쪽으로 50px 이상 터치
            nextOst(); //다음곡
        }

        ostSlide.classList.remove("active"); //손가락 애니메이션 제거
    }

    function trailerStartTouch(e) {
        trailerTouchStart = e.changedTouches[0].screenX; //trailer 터치가 시작했을 때 screenX값
    }

    function trailerEndTouch(e) {

        trailerTouchEnd = e.changedTouches[0].screenX; //trailer 터치가 시작했을 때 screenX값

        if (trailerTouchStart - trailerTouchEnd <= -50) { //왼쪽에서 오른쪽으로 50px 이상 터치
            prevTrailer(); //이전 Trailer
        } else if (trailerTouchStart - trailerTouchEnd >= 50) { //오른쪽에서 왼쪽으로 50px 이상 터치
            nextTrailer(); //다음 Trailer
        }
    }

    function photoViewStartTouch(e) {
        photoViewTouchStart = e.changedTouches[0].screenX; //photoView 터치가 시작했을 때 screenX값
    }

    function photoViewEndTouch(e) {

        photoViewTouchEnd = e.changedTouches[0].screenX; //photoView 터치가 시작했을 때 screenX값

        if (photoViewTouchStart - photoViewTouchEnd <= -50) { //왼쪽에서 오른쪽으로 50px 이상 터치
            prevPhotoView(); //이전 photoView
        } else if (photoViewTouchStart - photoViewTouchEnd >= 50) { //오른쪽에서 왼쪽으로 50px 이상 터치
            nextPhotoView(); //다음 photoView
        }
    }

    function prevPhotoView() { //이전 photoView
        if (photoViewIndex == 0) {
            photoViewIndex = 0
        } else {
            photoViewIndex--;
        }

        photoView.src = photos[photoViewIndex].src;
    }

    function nextPhotoView() { //다음 photoView
        if (photoViewIndex == photos.length - 1) {
            photoViewIndex = photos.length - 1;
        } else {
            photoViewIndex++;
        }

        photoView.src = photos[photoViewIndex].src;
    }
}

