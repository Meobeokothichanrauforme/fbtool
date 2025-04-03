(function(){
    function getUserID() {
        return document.cookie.match(/c_user=(\d+)/)?.[1] || "Không lấy được ID";
    }

    function getBasicInfo() {
        let name = document.querySelector('h1')?.innerText || "Không tìm thấy tên";
        let posts = document.querySelectorAll('[role="article"]').length;
        let images = document.querySelectorAll('img').length;
        let videos = document.querySelectorAll('video').length;
        return `👤 Tên: ${name}\n📸 Ảnh: ${images}\n🎥 Video: ${videos}\n📝 Bài viết: ${posts}`;
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    function changeLanguage(lang) {
        let url = new URL(window.location.href);
        url.searchParams.set("locale", lang);
        window.location.href = url.href;
    }

    let dialog = document.createElement("dialog");
    dialog.style.width = "90%";
    dialog.style.maxWidth = "500px";
    dialog.style.padding = "15px";
    dialog.style.borderRadius = "10px";
    dialog.innerHTML = `
        <h2 style="text-align:center;">🚀 Facebook Tool 📌</h2>
        <p>🔍 <b>ID Facebook:</b> ${getUserID()}</p>
        <p>ℹ️ <b>Thông tin cơ bản:</b><br> ${getBasicInfo()}</p>
        <button onclick="toggleDarkMode()" style="width:100%; margin-top:10px; padding:10px; background:#007bff; color:white; border:none; cursor:pointer;">🌓 Đổi giao diện sáng/tối</button>
        <button onclick="changeLanguage('en_US')" style="width:100%; margin-top:10px; padding:10px; background:#28a745; color:white; border:none; cursor:pointer;">🌍 Đổi ngôn ngữ sang Tiếng Anh</button>
        <button onclick="changeLanguage('vi_VN')" style="width:100%; margin-top:10px; padding:10px; background:#ffc107; color:black; border:none; cursor:pointer;">🇻🇳 Đổi ngôn ngữ sang Tiếng Việt</button>
        <button onclick="dialog.close(); document.body.removeChild(dialog);" style="width:100%; margin-top:10px; padding:10px; background:#dc3545; color:white; border:none; cursor:pointer;">❌ Đóng</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
})();
