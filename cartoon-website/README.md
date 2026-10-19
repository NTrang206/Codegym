# BÀI TẬP: PHÁT TRIỂN TRANG WEB XEM HOẠT HÌNH TRỰC TUYẾN (KIDCARTON)

> **Mục tiêu:** Xây dựng một website chuyên biệt về phim hoạt hình an toàn cho trẻ em, kết hợp tạo layout phân chia khu vực bằng `<div>` và CSS, tích hợp trình phát nhúng YouTube bằng `<iframe>` và phát video trực tiếp bằng thẻ `<video>`, áp dụng hiệu ứng liên kết hover, cố định header và thiết kế đáp ứng (Responsive) trên mọi thiết bị.

---

## 1. Danh sách các mức độ yêu cầu đã hoàn thành

### 🌟 Mức 1: Bố cục Cơ Bản (Layout với `<div>` & CSS)
- **Header:** Chứa Logo nhận diện nằm bên trái (`KidCartoon`), thanh tìm kiếm phim và bộ lọc sắp xếp.
- **Head-link:** Chứa danh sách các liên kết điều hướng trang (`Trang chủ`, `Thể loại`, `Mới nhất`, `Phổ biến`, `Thuyết minh`).
- **Content (Nội dung chính chia 2 cột):**
  - **Left Content:** Menu hiển thị danh sách video hoạt hình có sẵn với ảnh đại diện (thumbnail), thời lượng, huy hiệu chất lượng (1080p, HD), tên kênh và số lượt xem.
  - **Right Content:** Khu vực xem video chính, mặc định hiển thị video đầu tiên trong danh sách, kèm thông tin chi tiết phim, huy hiệu an toàn ("Không quảng cáo", "Thuyết minh Tiếng Việt", "Chuẩn 1080p"), mô tả nội dung và lượt xem.
- **Footer:** Chân trang hiển thị thông tin bản quyền, tiêu chuẩn nội dung và chính sách an toàn cho trẻ em.

### 🌟 Mức 2: Giao diện Trung Bình (CSS Cải tiến)
- **Loại bỏ gạch chân:** Toàn bộ thẻ `<a>` được thiết lập `text-decoration: none;`.
- **Hiệu ứng rê chuột (Hover Effect):** Khi rê chuột vào các liên kết hoặc các mục video trong danh sách, văn bản tự động chuyển sang màu cam vàng `#f59e0b` và in đậm `font-weight: bold;`.
- **Header Cố định (Fixed / Sticky Header):** Sử dụng `position: sticky; top: 0; z-index: 1000;` kết hợp hiệu ứng kính mờ `backdrop-filter: blur(12px)` giúp header luôn cố định trên cùng khi người dùng cuộn trang.

### 🌟 Mức 3: Nâng cao & Tính năng Chuyên sâu (Advanced & Responsive)
- **Hỗ trợ song song cả 2 công nghệ phát video:**
  - Nhúng video hoạt hình YouTube chất lượng cao qua thẻ `<iframe>` với các thuộc tính bảo mật `allowfullscreen`, `allow`.
  - Phát video trực tiếp không quảng cáo qua thẻ `<video controls>` HTML5 chuẩn.
  - Cung cấp nút chuyển đổi mượt mà giữa chế độ YouTube Stream và Thẻ Video trực tiếp.
- **Thiết kế đáp ứng (Responsive Design):**
  - **PC (Màn hình lớn):** Bố cục 2 cột rộng rãi (`grid-template-columns: 380px 1fr`).
  - **Tablet:** Thu nhỏ bề rộng cột danh sách video để tối ưu không gian xem.
  - **Mobile (Màn hình điện thoại < 768px):** Bố cục tự động chuyển sang dạng 1 cột duy nhất (`grid-template-columns: 1fr`). Khu vực phát video (`right-content`) tự động đảo thứ tự lên trên đầu (`order: 1`), danh sách video (`left-content`) xếp bên dưới (`order: 2`) mang lại trải nghiệm xem phim tự nhiên như ứng dụng di động.
- **Tính năng tương tác bổ sung:**
  - Nhấp vào bất kỳ phim nào trong danh sách bên trái sẽ cập nhật ngay video trong khung phát cùng toàn bộ thông tin chi tiết.
  - Tìm kiếm phim theo tên trong thời gian thực.
  - Sắp xếp phim theo số lượt xem hoặc mới cập nhật.
  - Nút "Thích" (Like) có bộ đếm tương tác.

---

## 2. Cấu trúc thư mục dự án

```text
cartoon-website/
├── index.html     # Cấu trúc ngữ nghĩa trang web (Header, Left, Right, Footer, video, iframe)
├── style.css      # Định kiểu CSS, hiệu ứng hover, fixed header và responsive media queries
├── script.js      # Xử lý tương tác chọn video, đổi nguồn phát, tìm kiếm và sắp xếp
└── README.md      # Tài liệu báo cáo hoàn thành bài tập
```
