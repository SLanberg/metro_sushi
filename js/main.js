window.addEventListener('DOMContentLoaded', function() {
    function setScreenHeight() {
      var height = window.innerHeight;
      document.documentElement.style.setProperty('--screen-height', height + "px");
    }
    setScreenHeight();

    new Splide(".splide", {
        pagination: false,
    }).mount();
  });