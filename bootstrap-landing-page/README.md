# [Bài tập] Tạo Landing Page với Bootstrap và Hình Ảnh

Dự án Landing Page responsive hoàn chỉnh được xây dựng bằng **Bootstrap 5.3 CDN**, kết hợp hệ thống hình ảnh linh hoạt, Bootstrap Grid System và CSS tùy biến.

---

## 🎯 Mục tiêu bài học
- Luyện tập sử dụng **Bootstrap Containers** (`container`, `container-fluid`).
- Khai thác sức mạnh của **Bootstrap Grid System** (`row`, `col-12`, `col-sm-6`, `col-lg-3`, `col-lg-6`) để tạo bố cục co giãn mượt mà trên desktop và mobile.
- Ứng dụng **Bootstrap Buttons** (`btn-primary`, `btn-warning`, `btn-lg`, `rounded-pill`) để tạo các nút kêu gọi hành động (Call To Action - CTA) nổi bật.
- Tận dụng **Bootstrap Images** (`img-fluid`, `object-fit-cover`) giúp hình ảnh co giãn tỷ lệ và hiển thị hoàn hảo trên mọi kích thước màn hình.
- Nắm rõ điểm khác biệt giữa các phiên bản Bootstrap (Bootstrap 5 đã loại bỏ component `.jumbotron`, thay vào đó sử dụng Hero section được xây dựng bằng Utility classes và CSS).

---

## 🏗️ Bố cục & Cấu trúc trang (Landing Page Layout)

```text
Landing Page
│
├── 1. Thanh điều hướng (Navbar)
│   ├── Logo / Thương hiệu
│   ├── Menu điều hướng (Trang chủ, Giới thiệu, Tính năng, Đăng ký)
│   └── Nút thu gọn (Hamburger menu cho Mobile)
│
├── 2. Banner / Hero Section
│   ├── Ảnh nền lớn kết hợp hiệu ứng phủ màu (Linear Gradient Overlay)
│   ├── Tiêu đề lớn & Badge nổi bật
│   ├── Đoạn văn giới thiệu ngắn
│   └── Cụm nút CTA ("Đăng Ký Ngay" - btn-primary, "Tìm Hiểu Thêm" - btn-outline-light)
│
├── 3. Giới thiệu (About Section)
│   ├── Cột 1: Hình ảnh minh họa sản phẩm/dịch vụ (lớp .img-fluid)
│   └── Cột 2: Tiêu đề, đoạn mô tả chi tiết và danh sách ưu điểm
│
├── 4. Danh sách tính năng (Features Section)
│   ├── Hàng (row) gồm 4 cột (col-12 col-sm-6 col-lg-3)
│   ├── Tính năng 1: ⚡ Tốc Độ Vượt Trội
│   ├── Tính năng 2: 📱 Responsive Chuẩn
│   ├── Tính năng 3: 🛡️ Bảo Mật Tối Đa
│   └── Tính năng 4: 🎯 Dễ Dàng Mở Rộng
│
├── 5. Nút Kêu Gọi Hành Động (CTA Section)
│   ├── Thông điệp thúc đẩy đăng ký
│   └── Nút hành động lớn ("Đăng Ký Ngay" - btn-warning, btn-lg)
│
└── 6. Chân trang (Footer)
    └── Thông tin bản quyền thương hiệu & bài học
```

---

## 📁 Cấu trúc thư mục

```text
bootstrap-landing-page/
├── images/
│   ├── image1.jpg        # Ảnh minh họa khu vực Giới thiệu
│   ├── image2.jpg        # Ảnh nền cho Hero Banner
│   ├── image3.jpg        # Ảnh bổ trợ
│   └── product.jpg       # Ảnh sản phẩm
├── index.html            # Mã nguồn HTML5 với Bootstrap 5.3 CDN
├── style.css             # CSS tùy chỉnh hiệu ứng, banner và micro-interactions
└── README.md             # Hướng dẫn chi tiết bài tập
```

---

## 🚀 Các kỹ thuật & Lớp Bootstrap được áp dụng

| Thành phần | Lớp Bootstrap / Kỹ thuật sử dụng | Ghi chú |
| :--- | :--- | :--- |
| **Grid System** | `.container`, `.row`, `.col-12`, `.col-lg-6`, `.col-lg-3`, `.g-4`, `.g-5` | Phân chia cột responsive từ mobile đến màn hình lớn |
| **Images** | `.img-fluid`, `.w-100`, `.object-fit-cover`, `.rounded-4` | Ảnh tự động co dãn theo khung chứa, không bị vỡ giao diện |
| **Buttons** | `.btn`, `.btn-primary`, `.btn-warning`, `.btn-lg`, `.rounded-pill`, `.shadow` | Các nút CTA kích thước lớn, màu sắc tương phản thu hút |
| **Hero / Banner** | `.py-5`, `.text-white`, `.text-center`, `.display-4`, `.lead` | Thay thế cho `.jumbotron` (đã bị gỡ bỏ ở Bootstrap 5) |
| **Cards & Badges** | `.card`, `.badge`, `.shadow-sm`, `.border` | Tạo các khối tính năng và nhãn danh mục chuyên nghiệp |

---

## 💻 Hướng dẫn mở và xem trang

1. Mở trực tiếp file `index.html` bằng trình duyệt web bất kỳ (Google Chrome, Edge, Firefox, Cốc Cốc,...).
2. Hoặc sử dụng extension **Live Server** trên VS Code để xem trang với chế độ tự động reload khi chỉnh sửa code.
