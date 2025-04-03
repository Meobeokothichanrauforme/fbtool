(function(){
    function getUserID() {
        return document.cookie.match(/c_user=(\d+)/)?.[1] || "⚠ Không lấy được ID!";
    }

    function getAvatar() {
        let avatar = document.querySelector("img")?.src || "⚠ Không tìm thấy ảnh đại diện!";
        return avatar;
    }

    function getCookie() {
        return document.cookie || "⚠ Không lấy được cookie!";
    }

    function showUpdateInfo() {
        return "🚀 Facebook Tool v2\n🔹 Credit: Phuoc2k9evn 💙\n🔹 Cập nhật: Lấy ID, avatar, cookie, xem cập nhật mới nhất.\n🔹 Dùng alert() gọn nhẹ hơn!";
    }

    let choice = prompt("📌 Facebook Tool v2 🚀\n🔹 Credit: Phuoc2k9evn 💙\n\n1️⃣ Lấy Cookie 🍪\n2️⃣ Xem Link Ảnh Đại Diện 🖼\n3️⃣ Xem ID Facebook 🔍\n4️⃣ Xem Bản Cập Nhật 📢\n\nNhập số lệnh:");

    switch(choice) {
        case "1":
            alert("🍪 Cookie của bạn:\n\n" + getCookie());
            break;
        case "2":
            alert("🖼 Link ảnh đại diện của bạn:\n\n" + getAvatar());
            break;
        case "3":
            alert("🔍 ID Facebook của bạn:\n\n" + getUserID());
            break;
        case "4":
            alert(showUpdateInfo());
            break;
        default:
            alert("⚠ Lệnh không hợp lệ! Hãy nhập từ 1 đến 4. 🔄");
    }
})();
