photos.forEach(photo => photo.addEventListener("click", visiblePhoto)); //선택한 사진 보기
photoView.addEventListener("click", hiddenPhoto); //사진 닫기

function visiblePhoto(e) {
    photoView.src = e.target.src;
    photoView.classList.add("active");
}

function hiddenPhoto() {
    photoView.classList.remove("active");
}