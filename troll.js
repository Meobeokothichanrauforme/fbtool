(function() {
  const trollURL = 'https://meobeokothichanrauforme.github.io/fbtool/troll.webp';

  function trollAllImages() {
    const imgs = document.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].src !== trollURL) {
        imgs[i].src = trollURL;
      }
    }
  }

  trollAllImages();

  const observer = new MutationObserver(() => {
    trollAllImages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
