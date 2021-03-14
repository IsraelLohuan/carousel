
const elementArrowLeft = document.getElementsByClassName("arrow-left")[0];
const elementArrowRight = document.getElementsByClassName("arrow-right")[0];
const elementDescriptionNotice = document.getElementsByClassName("description-image")[0];
const elementTotalImages = document.getElementsByClassName("footer-info-image")[0];

const Carousel = {
    getImageCurrent: () => document.getElementById("visible"),
    getImages: () => document.getElementsByTagName("img")
};

const DOM = {
    updateCarousel: (notice) => {
        DOM.updateImageCarousel();
        DOM.changeDescription(notice.description);
        DOM.updateTotal();
    },
    updateImageCarousel: () => {
        const imageCurrent = Carousel.getImageCurrent();
        const images = Carousel.getImages();
        images[currentIndex].id = "visible";
        imageCurrent.removeAttribute('id');
    }, 
    changeDescription: (value) => elementDescriptionNotice.innerHTML = value,
    updateTotal: () => elementTotalImages.innerHTML = (currentIndex + 1) + "/" + notices.length
};

const notices = [
    {
        description: "Aglomeração no grande centro de Goiás",
        image: "/assets/images/0.jpeg"
    },
    {
        description: "Aglomeração no grande centro de SP",
        image: "/assets/images/1.jpeg"
    },
    {
        description: "Aglomeração no grande centro de Santa Catarina",
        image: "/assets/images/2.jpeg"
    }
];

let currentIndex = 0;

elementArrowRight.addEventListener("click", () => {
    if(currentIndex < (notices.length - 1)) {
       DOM.updateCarousel( notices[ ++ currentIndex] );
    }
});

elementArrowLeft.addEventListener("click", () => {
    if(currentIndex != 0) {
        DOM.updateCarousel( notices[ -- currentIndex] );
    }
});
