# BÀI TẬP: TẠO TRANG WEB VỚI MÀU NỀN VÀ ẢNH NỀN

> **Mục tiêu:** Luyện tập sử dụng màu nền (`background-color`) và ảnh nền (`background-image`) để thiết kế giao diện trang web hiện đại, thẩm mỹ và cân đối.

---

## 1. Yêu cầu và Giải pháp thực hiện

| Yêu cầu đề bài | Cách thực hiện trong CSS / HTML | Chi tiết kỹ thuật |
| :--- | :--- | :--- |
| **Tiêu đề `<h1>`** | `<h1>Chào mừng đến với trang web của tôi</h1>` | Chữ to, in đậm, căn giữa phần đầu trang |
| **Đoạn văn `<p>`** | `<p class="description">...</p>` | Đoạn văn mô tả ngắn gọn về chủ đề trang |
| **Khối `<div>` nội dung quan trọng** | `<div class="featured-banner">` | Khối banner chứa trích dẫn và nút kêu gọi hành động |
| **Màu nền cho trang web** | `body { background-color: #e2e8f0; }` | Gam màu xám xanh dịu mắt, làm nổi bật các khối nội dung |
| **Ảnh nền cho khối `<div>`** | `background-image: url('images/banner-bg.jpg');` | Đi kèm `background-size: cover; background-position: center;` |
| **Căn giữa nội dung trong `<div>`** | `display: flex; justify-content: center; align-items: center; text-align: center;` | Căn giữa nội dung hoàn hảo cả theo phương ngang và phương dọc |

---

## 2. Điểm nổi bật trong thiết kế
- **Lớp phủ Gradient mờ (Overlay):** Kết hợp `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65))` cùng `background-image` giúp nâng cao độ tương phản, chữ màu trắng hiển thị sắc nét trên nền ảnh bất kỳ.
- **Tối ưu hiển thị ảnh nền:**
  - `background-size: cover`: Ảnh phủ kín toàn bộ diện tích khung hình mà không bị méo.
  - `background-position: center`: Luôn giữ trọng tâm ảnh ở chính giữa.
  - `background-repeat: no-repeat`: Không bị lặp lại khi kích thước màn hình thay đổi.

---

## 3. Cấu trúc thư mục

```text
background-image-practice/
├── index.html            # Cấu trúc HTML chính của trang
├── style.css             # Định kiểu màu nền, ảnh nền và căn giữa
├── images/
│   └── banner-bg.jpg     # Ảnh nền cho khối banner
└── README.md             # Tài liệu tóm tắt bài tập
```
