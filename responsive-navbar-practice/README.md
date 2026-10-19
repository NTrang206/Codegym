# BÀI THỰC HÀNH: TẠO THANH ĐIỀU HƯỚNG RESPONSIVE (RESPONSIVE NAVBAR)

> **Mục tiêu:** Luyện tập sử dụng kết hợp HTML, CSS (Flexbox, Media Queries) và JavaScript để tạo thanh điều hướng (navbar) đáp ứng (responsive), hiển thị tối ưu trên cả máy tính (Desktop) và thiết bị di động (Mobile).

---

## 1. Yêu cầu bài toán và Giải pháp

| Thiết bị | Trạng thái hiển thị | Giải pháp kỹ thuật |
| :--- | :--- | :--- |
| **Desktop (&gt; 768px)** | Hiển thị menu ngang đầy đủ | `.navbar` dùng `display: flex; justify-content: space-between;`. `.nav-links` dàn ngang, `.menu-icon` ẩn đi (`display: none;`). |
| **Mobile (&le; 768px)** | Ẩn menu ngang, xuất hiện icon `☰` | Sử dụng Media Query `@media (max-width: 768px)`. `.nav-links` ẩn (`display: none`), xếp dọc (`flex-direction: column`) và định vị tuyệt đối `position: absolute`. `.menu-icon` xuất hiện (`display: block`). |
| **Tương tác trên Mobile** | Nhấp vào `☰` để mở/đóng menu | JavaScript lắng nghe sự kiện `click` trên `.menu-icon`, kích hoạt `navLinks.classList.toggle("active")`. Khi có class `.active`, CSS kích hoạt `.nav-links.active { display: flex; }`. |

---

## 2. Cấu trúc thư mục dự án

```text
responsive-navbar-practice/
├── index.html     # Cấu trúc HTML của thanh điều hướng và nội dung trang
├── style.css      # Định dạng Flexbox, màu sắc, hiệu ứng hover và Media Query
├── script.js      # Mã JavaScript xử lý toggle class active cho menu
└── README.md      # Báo cáo thực hành chi tiết
```

---

## 3. Hướng dẫn kiểm tra

1. Mở tệp `index.html` bằng trình duyệt (hoặc qua Live Server trong VS Code).
2. **Trên Desktop:** Bạn sẽ thấy thanh menu nằm ngang đẹp mắt.
3. **Trên Mobile:** Kéo hẹp cửa sổ trình duyệt xuống dưới 768px (hoặc nhấn `F12` mở Device Toolbar):
   - Menu ngang tự động ẩn đi, biểu tượng `☰` xuất hiện ở góc phải.
   - Nhấp vào biểu tượng `☰`: Menu sẽ mở xổ xuống. Nhấp lại lần nữa: Menu sẽ đóng lại.
