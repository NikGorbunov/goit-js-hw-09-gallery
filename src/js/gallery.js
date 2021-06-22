import galleryItems from "../app.js";

const galleryStorageList = document.querySelector("ul.js-gallery");
const lightboxRef = document.querySelector("div.js-lightbox");
const onLightboxContentRef = document.querySelector(".lightbox__image");
const onCloseBtnLightboxRef = document.querySelector(
  "button[data-action=close-lightbox]"
);

const methodForCreatMarkup = galleryItems.reduce(
  (string, gallery) =>
    (gallery.innerHTML =
      string +
      `
    <li class="gallery__item">
      <a class="gallery__link" href="${gallery.original}">
        <img
          class="gallery__image"
          src="${gallery.preview}"
          data-source="${gallery.original}"
          alt="${gallery.description}"
        />
      </a>
    </li>`),
  ""
);

galleryStorageList.insertAdjacentHTML("afterbegin", methodForCreatMarkup);

galleryStorageList.addEventListener("click", modalOpenMethod);

function modalOpenMethod(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  lightboxRef.classList.add("is-open");
  onLightboxContentRef.src = evt.target.dataset.source;
  onLightboxContentRef.alt = evt.target.alt;
}

onCloseBtnLightboxRef.addEventListener("click", modalCloseMethod);

function modalCloseMethod() {
  lightboxRef.classList.remove("is-open");
  onLightboxContentRef.src = "";
  onLightboxContentRef.alt = "";
}
