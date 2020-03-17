menu[3].addEventListener("click", function () {
    firstVideo.classList.add("active");
}); //Trailer 첫화면

tarilerPrev.addEventListener("click", prevTrailer); //Trailer prev 버튼
tarilerNext.addEventListener("click", nextTrailer); //trailer next 버튼

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