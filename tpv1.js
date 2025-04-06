javascript:(function(){
  const trollSites = [
    "pornhub.com", "xvideos.com", "xnxx.com", 
    "xhamster.com", "redtube.com", "youporn.com"
  ];
  
  const msgList = [
    "Ồ, chăm chỉ học sinh lý nhỉ?",
    "Tao vừa nói cho mẹ mày biết rồi đó!",
    "Học không lo học, lo tìm… kiến thức mới ha!",
    "Đã bảo tắt chế độ ẩn danh mà không nghe!",
    "Xem xong nhớ rửa mắt với nước muối sinh lý!",
    "Hãy mạnh mẽ thừa nhận: NGHIỆN!"
  ];

  const currentHost = window.location.hostname.replace('www.', '');
  if (trollSites.some(site => currentHost.includes(site))) {
    const msg = msgList[Math.floor(Math.random() * msgList.length)];
    alert(`Khịa Mode ON:\n\n${msg}`);
  }
})();
