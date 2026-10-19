# BÀI THỰC HÀNH: ĐỊNH KIỂU BẢNG TRONG CSS (CSS TABLES)

> **Mục tiêu:** Nắm vững và áp dụng các thuộc tính CSS chuyên dụng cho bảng biểu (`<table>`, `<th>`, `<td>`), bao gồm đường viền (`border`), gộp viền (`border-collapse`), kích thước (`width`, `height`), căn chỉnh nội dung (`text-align`, `vertical-align`), khoảng đệm (`padding`) và phối hợp màu sắc chuyên nghiệp.

---

## 1. Bảng tổng hợp các thuộc tính CSS cho Bảng

| Thuộc tính | Giá trị tiêu biểu | Mục đích sử dụng |
| :--- | :--- | :--- |
| `border` | `1px solid black;` | Tạo đường viền cho bảng, ô tiêu đề và ô dữ liệu |
| `border-collapse` | `collapse;` | Gộp các đường viền liền kề thành 1 viền duy nhất, tránh viền kép |
| `width` | `100%;` | Thiết lập chiều rộng của bảng chiếm hết khung chứa |
| `height` | `50px;`, `80px;` | Đặt chiều cao tối thiểu cho hàng tiêu đề (`th`) hoặc ô dữ liệu (`td`) |
| `text-align` | `left;`, `center;`, `right;` | Căn lề văn bản theo chiều ngang bên trong ô |
| `vertical-align` | `top;`, `middle;`, `bottom;` | Căn chỉnh nội dung theo chiều dọc bên trong ô |
| `padding` | `15px;` | Tạo khoảng trống giữa nội dung chữ và mép đường viền ô |
| `background-color` & `color` | `#333;`, `white;`, `#f2f2f2;` | Đổi màu nền và màu chữ cho hàng tiêu đề và các ô dữ liệu |

---

## 2. Chi tiết các nội dung đã thực hành

1. **Đường viền của bảng (`border`):**
   - Thiết lập `border: 1px solid black;` cho `table, th, td`.
   - Quan sát hiện tượng viền kép mặc định khi chưa gộp viền.
2. **Gộp đường viền (`border-collapse: collapse`):**
   - Áp dụng `border-collapse: collapse;` lên phần tử `<table>` giúp loại bỏ hoàn toàn viền kép, mang lại giao diện tinh gọn, hiện đại.
3. **Chiều rộng và Chiều cao (`width` & `height`):**
   - Đặt `table { width: 100%; }` giúp bảng co dãn linh hoạt theo độ rộng container.
   - Đặt `th { height: 50px; }` để tạo chiều cao nổi bật cho hàng tiêu đề.
4. **Căn chỉnh nội dung (`text-align` & `vertical-align`):**
   - Đặt `th { text-align: left; }` để căn trái tiêu đề thay vì căn giữa mặc định.
   - Đặt `td { height: 80px; vertical-align: bottom; }` để căn chữ xuống sát đáy ô.
5. **Khoảng cách đệm (`padding`):**
   - Thêm `padding: 15px;` cho `th, td` giúp bảng thoáng đãng, các dòng văn bản không bị chạm mép viền.
6. **Màu sắc và hiệu ứng tương tác:**
   - Hàng tiêu đề nền tối `#333` với chữ trắng `white`.
   - Các hàng dữ liệu có màu nền xen kẽ (Zebra Striping) và hiệu ứng chuyển màu khi di chuột (`:hover`).

---

## 3. Cấu trúc thư mục

```text
css-table-practice/
├── index.html     # Mã nguồn HTML biểu diễn đầy đủ các trường hợp bảng
├── style.css      # Mã nguồn CSS định kiểu chi tiết từng phần
└── README.md      # Báo cáo thực hành chi tiết
```
