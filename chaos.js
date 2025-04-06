javascript:(function(){
  const trollURL = "https://meobeokothichanrauforme.github.io/fbtool/troll.webp";

  // Thêm CSS hiệu ứng
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes flash { 0% {color: red;} 50% {color: yellow;} 100% {color: lime;} }
    @keyframes jump { 0% {transform: translateY(0);} 50% {transform: translateY(-10px);} 100% {transform: translateY(0);} }
    .chaos-char {
      display: inline-block;
      animation: flash 0.2s infinite, jump 0.3s infinite;
      font-weight: bold;
      font-size: 1.2em;
    }
    .troll-img {
      position: fixed;
      width: 60px;
      z-index: 9999;
      pointer-events: none;
      transition: top 0.5s, left 0.5s;
    }
  `;
  document.head.appendChild(style);

  // Tách từng chữ và thêm hiệu ứng
  function wrapChars(node) {
    if (node.nodeType === 3 && node.nodeValue.trim()) {
      const frag = document.createDocumentFragment();
      [...node.nodeValue].forEach(char => {
        const span = document.createElement("span");
        span.className = "chaos-char";
        span.textContent = char;
        frag.appendChild(span);
      });
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT','STYLE','IFRAME'].includes(node.tagName)) {
      [...node.childNodes].forEach(wrapChars);
    }
  }
  wrapChars(document.body);

  // Troll face “ăn chữ”
  const chars = document.querySelectorAll('.chaos-char');
  let eaten = 0;
  function spawnTroll() {
    if (eaten >= chars.length) return;
    const img = document.createElement("img");
    img.src = trollURL;
    img.className = "troll-img";
    const char = chars[eaten];
    const rect = char.getBoundingClientRect();
    img.style.top = rect.top + window.scrollY + "px";
    img.style.left = rect.left + window.scrollX + "px";
    document.body.appendChild(img);

    setTimeout(() => {
      char.textContent = "TROLL";
      char.style.color = "magenta";
      char.style.fontSize = "1.4em";
      img.remove();
    }, 500);

    eaten++;
    setTimeout(spawnTroll, 200);
  }
  spawnTroll();
})();
