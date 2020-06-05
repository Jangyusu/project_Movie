synopsisInd.forEach(synopsisInd => synopsisInd.addEventListener("click", synopsisIndicator)); //synopsis indicator 버튼
menu[1].addEventListener("click", synopsisImg); //synopsis img 변경

function synopsisIndicator() { //Synopsis indicator 버튼
    var pressedIndex = getIndex(event.target);

    for (var i = 0; i < synopsisInd.length; i++) {
        synopsisInd[i].classList.remove("active");
        synopsisList[i].classList.remove("active");
    }

    synopsisInd[pressedIndex].classList.add("active");
    synopsisList[pressedIndex].classList.add("active");

    synopsis.style = "background-image: url('img/Synopsis_0" + pressedIndex + ".jpg')";
}

function synopsisImg() {
    synopsis.style = "background-image: url('img/Synopsis_00.jpg')";

    synopsisInd.forEach(synopsisInd => synopsisInd.classList.remove("active"));
    synopsisList[0].classList.add("active");
    synopsisInd[0].classList.add("active");
} //Synopsis 페이지 구현