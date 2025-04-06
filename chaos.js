javascript:(function(){
  const trollURL = "https://meobeokothichanrauforme.github.io/fbtool/troll.webp";

  // CSS Hiệu ứng
  const style = document.createElement('style');
  style.innerHTML = `
    * { animation: flashText 0.3s infinite alternate; }
    @keyframes flashText { color: red; background: yellow; }
    .troll-img {
      position: fixed;
      width: 100px;
      z-index: 9999;
      animation: fly 3s linear infinite;
    }
    @keyframes fly {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-100px) rotate(180deg); }
      100% { transform: translateY(0) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Troll face bay loạn
  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = trollURL;
    img.className = "troll-img";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(img);
  }

  // Nền chớp màu
  let colorStep = 0;
  setInterval(() => {
    document.body.style.backgroundColor = `hsl(${colorStep}, 100%, 50%)`;
    colorStep += 30;
  }, 200);
})();
