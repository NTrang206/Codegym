# BÀI THỰC HÀNH: ĐỊNH KIỂU DANH SÁCH TRONG CSS (CSS LISTS)

> **Mục tiêu:** Luyện tập thành thạo các thuộc tính CSS chuyên dụng cho danh sách (`<ul>`, `<ol>`), bao gồm `list-style-type`, `list-style-image`, `list-style-position`, thuộc tính rút gọn `list-style`, cùng với `color`, `background-color`, `padding` và `margin`.

---

## 1. Bảng tổng hợp các thuộc tính CSS Lists

| Thuộc tính | Giá trị tiêu biểu | Mục đích sử dụng |
| :--- | :--- | :--- |
| `list-style-type` | `disc`, `circle`, `square`, `decimal`, `upper-roman`, `none` | Đổi kiểu biểu tượng/định dạng số của dấu đầu dòng |
| `list-style-image` | `url('images/icon.png')` | Dùng hình ảnh tùy biến làm dấu đầu dòng |
| `list-style-position` | `outside` (mặc định), `inside` | Đặt dấu đầu dòng nằm ngoài lề biên hay nằm trong khối văn bản |
| `list-style` | `square inside url('icon.png')` | Thuộc tính rút gọn gom cả 3 giá trị Type, Position, Image |

---

## 2. Chi tiết các phần thực hành

1. **Thay đổi kiểu đánh dấu không thứ tự:**
   - Sử dụng `list-style-type: square;` để hiển thị dấu chấm vuông cho danh sách môn học (HTML, CSS, JavaScript, Git).
2. **Thay đổi kiểu đánh số có thứ tự:**
   - Sử dụng `list-style-type: upper-roman;` để đánh số La Mã viết hoa (I, II, III, IV) cho các bước học.
3. **Sử dụng hình ảnh làm dấu đánh dấu:**
   - Dùng `list-style-image: url('images/check-icon.png');` cho danh sách công cụ (VS Code, Chrome, GitHub, Git).
4. **Vị trí dấu đánh dấu (outside vs inside):**
   - So sánh trực quan: `outside` giữ dấu nằm thụt ra ngoài lề; `inside` đưa dấu vào cùng khối với dòng chữ đầu tiên.
5. **Thuộc tính rút gọn `list-style`:**
   - Khai báo ngắn gọn: `list-style: square inside;`.
6. **Màu sắc và khoảng cách:**
   - Phối hợp `background-color`, `color`, `padding` và `margin` tạo card danh sách nổi bật và dễ đọc.
7. **Bài tập tổng hợp - Lộ trình học lập trình Web:**
   - Danh sách 5 chặng (HTML, CSS, JavaScript, Git, GitHub) với hiệu ứng hover trượt ngang mượt mà, phân cấp màu sắc hiện đại.

---

## 3. Cấu trúc thư mục

```text
css-list-practice/
├── index.html            # Mã nguồn HTML các danh sách thực hành
├── style.css             # Mã nguồn CSS định kiểu chi tiết
├── images/
│   └── check-icon.png    # Icon dùng cho list-style-image
└── README.md             # Báo cáo thực hành
```
