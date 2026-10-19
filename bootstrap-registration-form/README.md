# BÀI TẬP: THIẾT KẾ TRANG ĐĂNG KÝ VỚI BOOTSTRAP FORMS

> **Mục tiêu:** Luyện tập sử dụng các thành phần biểu mẫu của Bootstrap 5 (Forms, Form Controls, Buttons, Text Elements, Input Groups và Form Validation) để tạo trang đăng ký người dùng chuyên nghiệp, chuẩn responsive.

---

## 1. Danh sách các trường và thành phần Bootstrap đã triển khai

| STT | Trường thông tin | Loại phần tử HTML | Lớp (Class) Bootstrap áp dụng |
| :---: | :--- | :--- | :--- |
| **1** | **Họ và tên** | Input text | `form-control`, `input-group`, `input-group-text` |
| **2** | **Email** | Input email | `form-control`, `text-muted`, `form-text` |
| **3** | **Mật khẩu** | Input password | `form-control` (Tối thiểu 6 ký tự) |
| **4** | **Xác nhận mật khẩu** | Input password | `form-control`, xác thực khớp mật khẩu |
| **5** | **Giới tính** | Radio button | `form-check`, `form-check-input`, `form-check-label` (Nam, Nữ, Khác) |
| **6** | **Sở thích** | Checkbox | `form-check`, `form-check-input` (Đọc sách, Lập trình, Thể thao, Du lịch) |
| **7** | **Quốc gia** | Dropdown Select | `form-select` (Việt Nam, Nhật Bản, Hàn Quốc, Mỹ, ...) |
| **8** | **Nút Submit** | Button | `btn btn-primary w-100 py-2 fs-5 fw-bold shadow-sm` |

---

## 2. Các điểm nổi bật về UX và Kỹ thuật

- **Bố cục Responsive:** Sử dụng hệ thống lưới Bootstrap `col-12 col-md-10 col-lg-7 col-xl-6 mx-auto` giúp form căn giữa hoàn hảo trên màn hình lớn và vừa vặn trên điện thoại di động.
- **Biểu tượng Input Groups:** Thêm icon trực quan (`👤`, `📧`) ở đầu các ô nhập liệu quan trọng.
- **Xác thực biểu mẫu (Validation):** Kết hợp các lớp phản hồi `invalid-feedback` và `was-validated` của Bootstrap 5 cùng mã JavaScript kiểm tra khớp mật khẩu theo thời gian thực.
- **Định dạng văn bản:** Sử dụng linh hoạt các lớp `text-muted`, `text-center`, `form-text`, `fw-semibold`, `text-danger` để làm nổi bật các trường bắt buộc và hướng dẫn người dùng.

---

## 3. Cấu trúc thư mục dự án

```text
bootstrap-registration-form/
├── index.html     # Giao diện HTML của trang đăng ký Bootstrap
├── style.css      # Tùy chỉnh hiệu ứng đổ bóng, focus và hover
├── script.js      # Xử lý xác thực form và kiểm tra khớp mật khẩu
└── README.md      # Báo cáo thực hành chi tiết
```
