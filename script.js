const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const createDivImg = (s) => {
  let NatureDiv = '';
  let CatDiv = '';
  let DogDiv = '';

  for (let i = 1; i <= s; i++) {
    NatureDiv += `<div class="gallery-image nat"><img src="FNat/nat${i}.png" alt="" class="image"></div>`;
    CatDiv += `<div class="gallery-image cat"><img src="FCat/cat${i}.png" alt="" class="image"></div>`;
    DogDiv += `<div class="gallery-image dog"><img src="FDog/dog${i}.png" alt="" class="image"></div>`;
  }
  document.querySelector('.gallery').innerHTML = NatureDiv + CatDiv + DogDiv;
};
createDivImg(5);

const images = document.querySelectorAll('.image');

let index = 0;


images.forEach((item, i) => {
  item.addEventListener('click', (event) => {
   
    const src = event.target.src;
    updateImage(i, src);
    popup.classList.toggle('active');
  });
});

const updateImage = (i, src) => {
  console.log(`HERE: `, src);
  //   let path = `img/im${i + 1}.png`;
  const path = src;

  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i + 1}`;
  index = i;
};

// closeBtn.addEventListener('click', () => {
//   popup.classList.toggle('active');
// });

// leftArrow.addEventListener('click', () => {
//   if (index > 0) {
//     updateImage(index - 1);
//   }
// });

rightArrow.addEventListener('click', () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});

const sort = () => {
  const buttons = document.querySelectorAll('.button');
  const imDivs = document.querySelectorAll('.gallery-image');

  const filter = (category, items) => {
    items.forEach((item) => {
      const isItFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';
      if (isItFiltered && !isShowAll) {
        item.classList.add('hide');
      } else {
        item.classList.remove('hide');
      }
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, imDivs);
    });
  });
};

sort();
