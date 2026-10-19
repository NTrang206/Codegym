# [Thực hành] Tạo Trang Giới Thiệu Doanh Nghiệp với Bootstrap

## Mục tiêu
Luyện tập sử dụng thư viện Bootstrap 5 để xây dựng một website giới thiệu doanh nghiệp chuẩn responsive gồm các phần:
- **Navbar**: Thanh điều hướng có thương hiệu công ty, nút thu gọn hamburger menu trên mobile.
- **Hero Section**: Phần mở đầu ấn tượng với tiêu đề lớn, thông điệp giới thiệu và nút kêu gọi hành động CTA.
- **About Section**: Giới thiệu tổng quan về sứ mệnh, lĩnh vực hoạt động của doanh nghiệp.
- **Services Section**: Hệ thống lưới Bootstrap Grid 3 cột (`.col-md-4`) với các thẻ `.card` trình bày dịch vụ công nghệ, marketing và chăm sóc khách hàng.
- **Contact Section**: Khối thông tin liên hệ tiện lợi (Email & Hotline).
- **Footer**: Chân trang bản quyền.

---

## Cấu trúc thư mục
```text
bootstrap-company-intro/
├── index.html        # Trang web hoàn chỉnh sử dụng Bootstrap 5.3 CDN
└── README.md         # Hướng dẫn chi tiết bài thực hành
```

---

## Các thành phần chính và Bootstrap Utilities
1. **Bootstrap 5.3 CDN**:
   - `bootstrap.min.css` trong `<head>`
   - `bootstrap.bundle.min.js` trước thẻ đóng `</body>`
2. **Navbar**:
   - `.navbar`, `.navbar-expand-lg`, `.navbar-light`, `.bg-light`, `.sticky-top`
   - `.navbar-toggler` với `data-bs-toggle="collapse"` và `data-bs-target="#navbarNav"`
3. **Hero Header**:
   - `.bg-primary`, `.text-white`, `.text-center`, `.py-5`
   - `.display-4`, `.lead`, `.btn`, `.btn-light`, `.btn-lg`
4. **Grid System & Cards**:
   - `.container`, `.row`, `.col-md-4`, `.g-4`
   - `.card`, `.shadow-sm`, `.border-0`, `.p-4`, `.h-100`
5. **Footer**:
   - `.bg-dark`, `.text-white`, `.text-center`, `.py-4`, Flexbox `.mt-auto`
