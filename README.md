# 배트맨 다크나이트 웹사이트
> 배트맨 다크나이트 영화의 줄거리, 배우, 트레일러, OST, 사진등 다양한 컨텐츠를 소개하는 웹사이트 제작

## 시작하며...
* 본 웹 사이트는 상업용 목적이 아닌 개인용 포트폴리오 목적으로 제작되었습니다.
* URL : https://jangyusu.github.io/project_Movie

### 작업 기간
* 2020-04 ~ 2020-05 (약 3주)

### 참여도
* 100%

### 사용 기술
* html5
* css3
* Javascript

### 호환 기종
* PC
* Tablet
* Mobile

### 웹 사이트 예시
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/index_01.jpg)
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/synopsis_01.jpg)
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/casting_01.jpg)
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/trailer_01.jpg)
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/ost_01.jpg)
![page_main](https://github.com/Jangyusu/project_Movie/blob/master/readme/img/gallery_01.jpg)

## 상세 설명
### 주요 코드
#### 메인 페이지
```javascript
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
```

#### ost 페이지
```javascript
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
```

### 기능 구현
1. 첫번째 개인 프로젝트
2. 순수 자바스크립트만을 사용하여 코딩
3. 스크롤이 없는 원페이지 레이아웃으로 웹사이트 구성
4. 메뉴를 포함한 특정 버튼들을 눌렀을 때 이미지와 텍스트를 변경하여 페이지이동 구현
5. OST서브페이지 뮤직플레이어 기능 구현
6. 웹 페이지 로딩 시 로딩화면 구현

### 크로스 브라우징
* Crome
* Firefox
* Samsung Internet

### 반응형 화면 해상도
* 1400 x ...
* 1200 x ...
* 800 x ...
* 600 x ...

### 버전 관리
* ver 1.0.0
  * 배트맨 다크나이트 웹 사이트 오픈

### 정보
* 장유수
  * *Github* (https://github.com/Jangyusu)
  * *E-mail* (dbtnss@naver.com)

### 개선해야할 점
* 웹 사이트 로딩 시 로딩임을 명확히 인지할 수 있게 기능 변경
* IE 브라우저에서도 정상적으로 동작할 수 있게 크로스 브라우징 구현
