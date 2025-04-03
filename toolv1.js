(function(){
    function getUserID() {
        return document.cookie.match(/c_user=(\d+)/)?.[1] || "Không lấy được ID";
    }

    function getBasicInfo() {
        let name = document.querySelector('h1')?.innerText || "Không tìm thấy tên";
        let posts = document.querySelectorAll('[role="article"]').length;
        return `👤 Tên: ${name}\n 📝 Bài viết: ${posts}`;
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        alert("🌙 Đã đổi giao diện!");
    }

    function changeLanguage(lang) {
        let url = new URL(window.location.href);
        url.searchParams.set("locale", lang);
        alert("🌍 Đang đổi ngôn ngữ...");
        window.location.href = url.href;
    }

    alert(`🚀 Facebook Tool 📌\n\n🔍 ID Facebook: ${getUserID()}\n\nℹ️ Thông tin cơ bản:\n${getBasicInfo()}\n\n🌓 Để đổi giao diện, mở console và nhập: toggleDarkMode()\n🌍 Để đổi ngôn ngữ, nhập: changeLanguage('en_US') hoặc ('vi_VN')`);
    alert("🌍 V1 Code Bởi Hoàng Mạnh Phước")
})();
