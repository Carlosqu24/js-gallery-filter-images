export const getData = async () => {
      const res = await fetch(`https://pixabay.com/api/?key=24553463-a5a5d4ac90ef0100b4c2ebe18&q=cars&image_type=photo&pretty=true`);
      const data = await res.json();
      const photos = await data.hits

      showImages("#gallery", photos);
};

const showImages = async (element, photos) => {
      const $element = document.querySelector(element);

      let html = "";

      photos.forEach(photo => {
            let firstTag = photo.tags.slice(0, photo.tags.indexOf(","));

            html += `
                  <figure class="image">
                        <img src="${photo.largeImageURL}" >
                        <figcaption>${firstTag}</figcaption>
                  </figure>
            `;
      });

      $element.innerHTML = html;
};