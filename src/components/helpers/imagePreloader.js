export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export const preloadImages = (imagesArray) => {
  const promises = imagesArray.map((src) => preloadImage(src));
  return Promise.all(promises);
};