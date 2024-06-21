import imgLeftArrow from "images/left-arrow.svg";
import imgNoImage from "images/no-image.jpg";
import imgSpool from "images/spool.svg";

/**
 * Preloads and caches images.
 */
export function loadCriticalImages() {
  const preloadedImages = [
    imgLeftArrow, 
    imgNoImage,
    imgSpool
  ];
  
  preloadedImages.forEach(image => {new Image().src = image});
}
