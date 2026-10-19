# [Dự án / Thực hành] Xây dựng Trang Web Tĩnh Giới Thiệu Về Sách (Book Landing Page)

Trang web tĩnh giới thiệu sách chuyên nghiệp, hiện đại và chuẩn responsive được phát triển bằng **HTML5, CSS3, Bootstrap 5.3 Framework và Font Awesome 6**.

---

## 🎯 Mục tiêu dự án
- Vận dụng toàn diện kiến thức về **Bootstrap Grid System, Flexbox, Utilities, Cards, Accordion, Buttons, Forms**.
- Thiết kế giao diện hiện đại với hiệu ứng bìa sách 3D (3D Book Cover Mockup với CSS perspective và shadows).
- Tối ưu hóa trải nghiệm người dùng (UX/UI) và tương thích 100% trên mọi kích thước màn hình (Mobile, Tablet, Laptop, Desktop).

---

## 🏗️ Cấu trúc các thành phần chính theo yêu cầu

| Thành phần | Chi tiết triển khai | Kỹ thuật / Bootstrap Component |
| :--- | :--- | :--- |
| **1. Header & Navbar** | Thanh điều hướng cố định trên đầu trang (`sticky-top`), logo thương hiệu có icon, menu liên kết neo mượt mà và nút CTA "Mua Ngay". | `.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark`, `.sticky-top` |
| **2. Book Overview** | Khu vực Hero giới thiệu sách: Huy hiệu Bestseller, đánh giá sao, tiêu đề, thông điệp cốt lõi, thống kê số trang/dự án, cụm nút kêu gọi hành động và mockup bìa sách 3D. | `.hero-section`, `.display-4`, `.btn-warning`, `.book-cover-3d` |
| **3. Author** | Giới thiệu tác giả Nguyễn Hoàng Nam (Senior Software Architect): Ảnh đại diện bo tròn, các cột mốc kinh nghiệm, tóm tắt tiểu sử và liên kết mạng xã hội. | `.rounded-circle`, `.author-img`, `.author-badge`, Grid `.row` |
| **4. Features** | 6 thẻ tính năng nội dung nổi bật có icon màu sắc + Mục lục sách chi tiết dạng accordion tương tác đóng mở. | `.card`, `.feature-card`, `.accordion`, `.accordion-collapse` |
| **5. Prices** | Bảng giá 3 gói sách (Bản Ebook, Sách In + Ebook, Combo Đặc Biệt VIP) kèm ribbon nổi bật cho gói phổ biến nhất và danh sách quyền lợi chi tiết. | `.pricing-card`, `.featured-ribbon`, `.display-5`, Buttons |
| **6. Download** | Khối kêu gọi tải đọc thử miễn phí 3 chương đầu tiên với biểu mẫu nhập Tên, Email và lựa chọn định dạng PDF/EPUB. | `.download-section`, `.form-control`, `.form-select`, `.btn-warning` |
| **7. Reader’s Say** | Nhận xét từ các độc giả (kỹ sư phần mềm, Tech Lead, học viên) với đánh giá 5 sao, trích dẫn cảm nghĩ và ảnh đại diện độc giả. | `.review-card`, `.avatar-sm`, Font Awesome `.quote-icon` |
| **8. Footer** | Chân trang chuyên nghiệp gồm thông tin nhà xuất bản, liên kết nhanh, địa chỉ liên hệ/hotline, form đăng ký bản tin và bản quyền thương hiệu. | `.bg-dark`, `.text-white`, `.input-group`, Grid 4 cột |

---

## 📁 Cấu trúc thư mục

```text
book-landing-page/
├── images/
│   ├── book-cover.jpg    # Ảnh bìa sách thiết kế chuẩn 3D
│   ├── author.jpg        # Ảnh chân dung tác giả
│   ├── reader1.jpg       # Ảnh đại diện độc giả Trần Quang Minh
│   ├── reader2.jpg       # Ảnh đại diện độc giả Lê Mai Lan
│   └── reader3.jpg       # Ảnh đại diện độc giả Vũ Hoàng Tuấn
├── index.html            # Mã nguồn HTML5 chuẩn ngữ nghĩa và Bootstrap 5
├── style.css             # CSS tùy biến hiệu ứng 3D, typography và màu sắc
└── README.md             # Tài liệu dự án chi tiết
```

---

## 🚀 Hướng dẫn chạy và xem trang
1. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox).
2. Hoặc sử dụng tính năng **Live Server** trong VS Code để xem trực tiếp tại `http://localhost:5500`.
