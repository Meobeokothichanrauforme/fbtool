javascript:(function(){
  const slogans = [
    "Trắng như tâm hồn người yêu cũ!",
    "Kem đánh răng thơm như lời tỏ tình!",
    "Ngậm 1 lần – sạch cả kiếp!",
    "Đánh xong muốn cắn crush liền!",
    "Sạch từ răng tới tâm hồn!",
    "Cười toáng mà không lo hôi miệng!"
  ];

  function createPopup() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = Math.random() * 80 + "%";
    popup.style.left = Math.random() * 80 + "%";
    popup.style.zIndex = 9999;
    popup.style.background = "#fff";
    popup.style.border = "2px solid #000";
    popup.style.padding = "20px";
    popup.style.boxShadow = "0 0 20px red";
    popup.style.fontSize = "18px";
    popup.style.maxWidth = "200px";
    popup.style.transform = `rotate(${Math.random()*20-10}deg)`;
    popup.style.animation = "shake 0.5s infinite alternate";

    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    popup.innerHTML = `
      <div><b>${slogan}</b></div>
      <button style="margin-top:10px;" onclick="this.parentElement.remove()">Tắt quảng cáo</button>
    `;

    document.body.appendChild(popup);
  }

  setInterval(createPopup, 10000);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shake {
      from { transform: translate(0, 0) rotate(0deg); }
      to { transform: translate(5px, 5px) rotate(2deg); }
    }
  `;
  document.head.appendChild(style);
})();
