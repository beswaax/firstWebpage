const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
const images = document.querySelectorAll(".image-moto"); //an array of images
let positionOfImagesArray = 0;

next.addEventListener("click", function(){
    images[positionOfImagesArray].classList.remove("active")
    positionOfImagesArray++;
    images[positionOfImagesArray].classList.add("active");
    if (positionOfImagesArray == images.length - 1){
        next.disabled = true;
    }
    if (positionOfImagesArray !== 0) {
        prev.disabled = false;
    }

});

prev.addEventListener("click", function(){
    images[positionOfImagesArray].classList.remove("active")
    positionOfImagesArray--;
    images[positionOfImagesArray].classList.add("active");
    if (positionOfImagesArray  === 0){
        prev.disabled = true;
    }
    if (positionOfImagesArray  >= 0){
        next.disabled = false;
    }



});