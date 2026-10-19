# BÀI TẬP: THIẾT KẾ TRANG WEB VỚI BOOTSTRAP GRID SYSTEM

> **Mục tiêu:** Luyện tập sử dụng Bootstrap Containers và Grid System (`row`, `col-xx`) để tạo bố cục trang web đáp ứng (responsive), chia thành 2 cột trên Desktop và chuyển thành 1 cột trên Mobile.

---

## 1. Yêu cầu và Giải pháp triển khai

| Khu vực | Yêu cầu đề bài | Cách triển khai bằng Bootstrap 5 |
| :--- | :--- | :--- |
| **Container** | Giới hạn độ rộng nội dung | Sử dụng lớp `.container` bao bọc thanh điều hướng, khu vực nội dung chính và chân trang. |
| **Header** | Chứa tiêu đề trang web | `<header class="bg-primary text-white text-center py-4">` với tiêu đề `h1` và dòng mô tả nổi bật. |
| **Navbar** | Menu điều hướng có Dropdown | `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` kèm nút `navbar-toggler` và danh mục thả xuống `dropdown-menu`. |
| **Main Content** | 8 cột trên Desktop, 1 cột trên Mobile | Sử dụng lớp `col-12 col-lg-8` (hoặc `col-md-8`) bên trong `.row`. |
| **Sidebar** | 4 cột trên Desktop, xếp dưới trên Mobile | Sử dụng lớp `col-12 col-lg-4` (hoặc `col-md-4`) bên trong `.row`. |
| **Footer** | Chứa thông tin bản quyền | `<footer class="bg-dark text-white text-center py-4 mt-auto">`. |

---

## 2. Quy tắc Grid System (Breakpoints)

- **Trên màn hình lớn (Desktop ≥ 992px):**
  - Cột chính (Main Content): chiếm **8/12 cột** (`col-lg-8`).
  - Cột phụ (Sidebar): chiếm **4/12 cột** (`col-lg-4`).
  - Hai cột nằm song song cạnh nhau trên cùng một hàng.
- **Trên màn hình nhỏ (Mobile < 992px):**
  - Cả hai cột đều có lớp `col-12`, tự động chiếm trọn **100% bề ngang** và xếp chồng lên nhau (Sidebar nằm ngay dưới Main Content).

---

## 3. Cấu trúc thư mục dự án

```text
bootstrap-grid-layout/
├── index.html     # Cấu trúc HTML áp dụng Bootstrap Grid (Header, Navbar, Row, Col, Footer)
├── style.css      # Tùy chỉnh hiệu ứng hover và giao diện thẻ bổ trợ
└── README.md      # Báo cáo thực hành chi tiết
```
