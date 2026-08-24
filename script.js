document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const viewer = document.getElementById("image-viewer");
  const largeImage = document.getElementById("large-image");
  const closeViewer = document.getElementById("close-viewer");
  const galleryImages = document.querySelectorAll(".gallery img");

  if (!viewer || !largeImage || !closeViewer) {
    return;
  }

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      largeImage.src = image.src;
      largeImage.alt = image.alt;
      viewer.showModal();
    });
  });

  closeViewer.addEventListener("click", function () {
    viewer.close();
  });

  viewer.addEventListener("click", function (event) {
    if (event.target === viewer) {
      viewer.close();
    }
  });
});