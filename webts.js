javascript:(function(){if(document.getElementById('webInfoDialog'))return;const dialog=document.createElement('dialog');dialog.id='webInfoDialog';dialog.innerHTML='<h2>Thông tin trang web 🌟</h2><pre id="infoOutput"></pre><button onclick="this.parentElement.close()">Đóng 🚀</button>';document.body.appendChild(dialog);const style=document.createElement('style');style.textContent='dialog{border:none;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.3);padding:20px;max-width:500px;}button{padding:10px 20px;cursor:pointer;background-color:#007BFF;color:white;border:none;border-radius:5px;}button:hover{background-color:#0056b3;}pre{background-color:#f8f9fa;padding:10px;border-radius:5px;max-height:300px;overflow-y:auto;}';document.head.appendChild(style);const output=document.getElementById('infoOutput');const url=window.location.href;const title=document.title||'Không có tiêu đề';const imageCount=document.getElementsByTagName('img').length;const linkCount=document.getElementsByTagName('a').length;const cookies=document.cookie||'Không có cookie';const metaDesc=document.querySelector('meta[name="description"]')?.content||'Không có meta description';output.textContent=`URL: ${url}\nTiêu đề: ${title}\nSố ảnh: ${imageCount}\nSố liên kết: ${linkCount}\nCookie: ${cookies}\nMeta Description: ${metaDesc}`.trim();dialog.showModal();})()
