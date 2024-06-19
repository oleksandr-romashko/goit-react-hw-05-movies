import imgLeftArrow from "images/left-arrow.svg";
import imgNoImage from "images/no-image.jpg";
import imgSpool from "images/spool.svg";

const preloadedImages = [
  imgLeftArrow, 
  imgNoImage,
  imgSpool
];

export function loadCriticalImages() {
  preloadedImages.forEach(image => {new Image().src = image});
}
