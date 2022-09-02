const slider = document.querySelector(".image-slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = [
  "Qubbatus Sahra.jpg",
  "Shaik Zayed Grand Mosque.jpg",
  "Jama Masjid Delhi.jpg",
  "Sultan Ahmet Camii.jpg",
];

const headings = [
  "Qubbatus Sahra",
  "Shaik Zayed Grand Mosque",
  "Jama Masjid Delhi",
  "Sultan Ahmet Camii",
];

const descriptions = [
  "An old mosque in Al-Aqsa (Quds)",
  "Beautiful masjid in UAE",
  "The biggest mosque in Delhi",
  "Beautiful mosque in Istanbul",
];

let id = 0;

function slide(id) {
  slider.style.backgroundImage = `url("img/${images[id]}")`;

  slider.classList.add('image-fade');

  setTimeout(() => {
    slider.classList.remove('image-fade')
  }, 550);

  heading.innerText = headings[id];

  description.innerText = descriptions[id];
}

leftArrow.addEventListener("click", () => {
  id--;

  if (id < 0) {
    id = images.length - 1;
  }

  //   console.log("sola tiklandi");
  slide(id);
});

rightArrow.addEventListener("click", () => {
  id++;

  if (id > images.length - 1) {
    id = 0;
  }
  //   console.log("saga tiklandi");

  slide(id);
});
