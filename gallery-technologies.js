const largeImages = document.querySelectorAll(".gallery__large__image");
const descriptions = document.querySelectorAll(".gallery__item-text");
const thumbnails = document.querySelectorAll(".thumbnails__image");
const buttons = document.querySelectorAll(".gallery__buttons button");
let index = 0;

largeImages.forEach((img, idx) => {
    const image = img.lastElementChild;
    const description = image.getAttribute("alt");
    descriptions[idx].innerHTML = description;
});

function removeImages() {
    largeImages.forEach((image) => {
        image.classList.remove("current-img");
    });
}

function removeThumbs() {
    thumbnails.forEach((item) => {
        item.classList.remove("current-thumb");
    });
}

function checkImages() {
    if(index < 0) index = largeImages.length - 1;
    if(index > largeImages.length - 1) index = 0;
}

thumbnails.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => {
        removeImages();
        largeImages[idx].classList.add("current-img");

        descriptions[idx].classList.add("current-txt");
        setTimeout(() => descriptions[idx].classList.remove("current-txt"), 1000);

        removeThumbs();
        thumb.classList.add("current-thumb");

        index = idx;
    });
});

function showImages(index) {
    removeImages();
    largeImages[index].classList.add("current-img");

    descriptions[index].classList.add("current-txt");
    setTimeout(() => descriptions[index].classList.remove("current-txt"), 1000);

    removeThumbs();
    thumbnails[index].classList.add("current-thumb");
}

buttons.forEach((button) => {    
    button.addEventListener("click", () => {
        if(button.classList.contains("left-btn")) {
            index--;
        }
        if(button.classList.contains("right-btn")) {
            index++;
        }

        checkImages();
        showImages(index);
    });
});