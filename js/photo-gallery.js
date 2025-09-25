const cards = document.querySelectorAll(".galleryCardItem");

// Add "is-active" class to all cards initially
cards.forEach(galleryCardItem => galleryCardItem.classList.add("is-active"));

// Use event delegation for better performance
document.addEventListener("mouseenter", event => {
  const galleryCardItem = event.target.closest(".galleryCardItem");
  if (galleryCardItem) {
    cards.forEach(c => c.classList.remove("is-active"));
    galleryCardItem.classList.add("is-active");
  }
}, true);

document.addEventListener("mouseleave", event => {
  const galleryCardItem = event.target.closest(".galleryCardItem");
  if (galleryCardItem) {
    cards.forEach(c => c.classList.add("is-active"));
  }
}, true);
