import { capitalizeString } from "./js/format_strings.js";
import { getData } from "./js/images_gallery.js";

// VARIABLES
const $inputFilter = document.querySelector('#input-filter');




// EVENTS
document.addEventListener("DOMContentLoaded", getData);


$inputFilter.addEventListener("keyup", e => {
      console.log(e.target.value);

      const allImages = document.querySelectorAll(".image");

      allImages.forEach(image => {
            if (!image.innerText.includes(e.target.value)) {
                  image.classList.add("filtered")
            };

            if (image.innerText.includes(e.target.value) && image.classList.contains("filtered")) {
                  image.classList.remove("filtered")
            };
      });
});
