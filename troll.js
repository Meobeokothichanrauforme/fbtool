javascript:(function(){
  const trollURL = "https://meobeokothichanrauforme.github.io/fbtool/troll.webp";

  // Thêm CSS siêu loạn
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes chaosColor { 0%{color:red;}25%{color:yellow;}50%{color:lime;}75%{color:cyan;}100%{color:magenta;} }
    @keyframes shake { 0%{transform:translate(0,0) rotate(0);} 25%{transform:translate(2px,-2px) rotate(2deg);} 50%{transform:translate(-2px,2px) rotate(-2deg);} 75%{transform:translate(2px,2px) rotate(2deg);} 100%{transform:translate(-2px,-2px) rotate(-2deg);} }
    @keyframes spin { 0%{transform:rotate(0);} 100%{transform:rotate(360deg);} }
    @keyframes float { 0%{transform:translateY(0);} 50%{transform:translateY(-20px);} 100%{transform:translateY(0);} }

    .chaos-char {
      display:inline-block;
      animation: chaosColor 0.5s infinite alternate, shake 0.3s infinite;
      font-weight: bold;
      font-size: 1.3em;
    }

    img, video {
      animation: spin 2s linear infinite !important;
      filter: hue-rotate(360deg) saturate(200%) !important;
    }

    body {
      animation: shake 0.2s infinite;
    }

    .troll-img {
      position: fixed;
      width: 70px;
      z-index: 9999;
      pointer-events: none;
      animation: float 1s infinite;
    }
  `;
  document.head.appendChild(style);

  // Wrap từng chữ
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
    } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT','STYLE','IFRAME','NOSCRIPT'].includes(node.tagName)) {
      [...node.childNodes].forEach(wrapChars);
    }
  }
  wrapChars(document.body);

  // Troll face lao vào chữ
  const chars = document.querySelectorAll('.chaos-char');
  let eaten = 0;
  function launchTroll() {
    if (eaten >= chars.length) return;
    const img = document.createElement("img");
    img.src = trollURL;
    img.className = "troll-img";
    const char = chars[eaten];
    const rect = char.getBoundingClientRect();
    img.style.top = (rect.top + window.scrollY - 20) + "px";
    img.style.left = (rect.left + window.scrollX - 20) + "px";
    document.body.appendChild(img);

    setTimeout(() => {
      char.textContent = "TROLL";
      char.style.color = "magenta";
      char.style.transform = "rotate(720deg) scale(1.5)";
      img.remove();
    }, 400);

    eaten++;
    setTimeout(launchTroll, 150);
  }
  launchTroll();
})();
