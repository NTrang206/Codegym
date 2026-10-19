# BÀI THỰC HÀNH: TẠO NAVBAR VỚI BOOTSTRAP 5

> **Mục tiêu:** Luyện tập sử dụng thư viện **Bootstrap 5** (Navbar Component) để tạo thanh điều hướng chuyên nghiệp, đáp ứng (responsive), hỗ trợ menu đa cấp (dropdown) và tự động thu gọn trên thiết bị di động.

---

## 1. Các bước đã triển khai

### Bước 1: Cài đặt Bootstrap 5 qua CDN
- Nhúng tệp CSS vào `<head>`:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  ```
- Nhúng tệp JavaScript Bundle (bao gồm cả Popper.js để xử lý Dropdown & Collapse) trước thẻ đóng `</body>`:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  ```

### Bước 2: Xây dựng cấu trúc Navbar
- Thẻ `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` tạo thanh điều hướng nền tối.
- Logo/Thương hiệu: `<a class="navbar-brand" href="#">MyWebsite</a>`.
- Nút bấm mở menu trên Mobile:
  ```html
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  ```
- Danh sách liên kết điều hướng trong `<div class="collapse navbar-collapse" id="navbarNav">`:
  - `Home`: mục đang hoạt động (`active`).
  - `About`: liên kết thông thường.
  - `Services`: menu thả xuống (Dropdown) với các mục con `Web Design`, `SEO`.
  - `Contact`: liên kết liên hệ.

---

## 2. Cấu trúc thư mục dự án

```text
bootstrap-navbar-practice/
├── index.html     # Mã nguồn HTML tích hợp Bootstrap Navbar đầy đủ tính năng
├── style.css      # Tùy chỉnh hiệu ứng hover và giao diện thẻ bổ trợ
└── README.md      # Báo cáo thực hành chi tiết
```

---

## 3. Hướng dẫn kiểm tra

1. Mở tệp `index.html` bằng trình duyệt (hoặc Live Server).
2. **Kiểm tra trên Desktop (≥ 992px):** Menu hiển thị nằm ngang; bấm vào `Services` menu con sẽ xổ xuống.
3. **Kiểm tra trên Mobile (< 992px):** 
   - Menu ngang tự động thu gọn thành nút icon 3 gạch (`navbar-toggler`).
   - Bấm vào icon 3 gạch: Menu xổ xuống trơn tru. Bấm vào `Services`: Các danh mục con mở ra bình thường.
