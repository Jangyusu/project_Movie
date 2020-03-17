castingCon.addEventListener("click", castingOnOff); //casting on/off 버튼
menu[2].addEventListener("click", catingImg); //casting img 변경

castingInd.forEach(castingInd => castingInd.addEventListener("click", castingIndicator)); //Casting indicator 버튼

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