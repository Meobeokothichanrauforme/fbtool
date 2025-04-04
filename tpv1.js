(function() {
    const emojis = "🚀✨🌟🔥🎉"; // Nhiều emoji hơn
    const credit = "Tool by Phuoc2k9evn";
    let choice = prompt(`${emojis} Chào bạn! Chọn lệnh:\n1. Lấy Cookie\n2. Xem Link Ảnh Đại Diện\n3. Xem ID\n4. Xem Bản Cập Nhật\n${credit}`, "Nhập số từ 1-4");

    switch(choice) {
        case "1": // Lấy Cookie và Alert
            let cookies = document.cookie || "Không tìm thấy cookie";
            alert(`${emojis} Cookie của bạn:\n${cookies}\n${credit}`);
            break;

        case "2": // Xem Link Ảnh Đại Diện
            let avatar = document.querySelector('img[src*="profile"]')?.src || "Không tìm thấy ảnh đại diện";
            alert(`${emojis} Link ảnh đại diện:\n${avatar}\n${credit}`);
            break;

        case "3": // Xem ID
            let fbId = document.cookie.match(/c_user=(\d+)/)?.[1] || "Không tìm thấy ID";
            alert(`${emojis} ID Facebook của bạn: ${fbId}\n${credit}`);
            break;

        case "4": // Xem Bản Cập Nhật Bookmarklet
            let updateInfo = "Cập nhật 1 (04/04/2025):\n- Chỉ lấy ID và link ảnh đại diện\n- Thêm credit Phuoc2k9evn\n- Nhiều emoji hơn\n- Giao diện nhập lệnh mới";
            alert(`${emojis} Bản cập nhật:\n${updateInfo}\n${credit}`);
            break;

        default:
            alert(`${emojis} Vui lòng chọn số từ 1-4!\n${credit}`);
    }
})();
