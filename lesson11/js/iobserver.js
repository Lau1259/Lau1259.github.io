let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

let map = document.getElementById('footer-map')

const loadMap = (placeholder) => {
  if (map.getAttribute('src') == "images/map.jpg") {
    document.getElementById('map-container').innerHTML = map.getAttribute('data-embed')
  }
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  const mapObserver = new IntersectionObserver((mapImage, mapObserver) => {
    mapImage.forEach((placeholder) => {
      if (placeholder.isIntersecting) {
        loadMap(map);
        mapObserver.unobserve(placeholder.target);
      }
    })
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
    mapObserver.observe(map);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
  loadMap(map);
}