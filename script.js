const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close-btn')
const imageName = document.querySelector('.image-name')
const largeImage = document.querySelector('.large-image')
const imageIndex = document.querySelector('.index')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const createDivImg = (s) => {

    let DivImg = '';

    for (let i = 1; i <= s; i++) {
        DivImg += `<div class="gallery-image"><img src="img/im${i}.png" alt="" class="image"></div>`;
    }
    document.querySelector('.gallery').innerHTML = DivImg;
};
createDivImg(12)


const images = document.querySelectorAll('.image');

let index = 0

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i)
        popup.classList.toggle('active')
    })
})

const updateImage = (i) => {
    let path = `img/im${i + 1}.png`
    largeImage.src = path
    imageName.innerHTML = path
    imageIndex.innerHTML = `0${i + 1}`
    index = i
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active')
})

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1)
    }
})

rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1)
    }
})