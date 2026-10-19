# Báo Cáo Thực Hành: Trực Quan Hóa Box Model Với Các Khối `<div>`

## 1. Thông Tin Bài Thực Hành
- **Môn học/Chủ đề**: CSS Cơ bản - Mô hình hộp (Box Model)
- **Tệp nguồn chính**:
  - [box-model.html](file:///d:/Em/Codegym/box-model.html)
  - [style.css](file:///d:/Em/Codegym/style.css)

---

## 2. Nhật Ký Các Bước Đã Thực Hiện

### Phần 1: Khởi tạo "Phòng thí nghiệm"
1. **Tạo cấu trúc HTML ([box-model.html](file:///d:/Em/Codegym/box-model.html))**:
   - Khởi tạo khung HTML5 chuẩn, đặt `lang="vi"`.
   - Đặt tiêu đề `<title>Thí nghiệm Box Model</title>`.
   - Nhúng liên kết tệp định dạng: `<link rel="stylesheet" href="style.css">`.
   - Tạo hai khối phần tử mục tiêu trong `<body>`:
     - `<div class="box box-1">Đây là Hộp 1</div>`
     - `<div class="box box-2">Đây là Hộp 2</div>`

### Phần 2: Thí nghiệm các lớp của Box Model ([style.css](file:///d:/Em/Codegym/style.css))
1. **Bước 1 - Vùng Content (Nội dung)**:
   - Đặt `.box` với `width: 250px;` và `height: 150px;`.
   - Vùng hiển thị nội dung chữ có kích thước ban đầu đúng 250px × 150px.
2. **Bước 2 - Tô màu nền (Background)**:
   - `.box-1`: `background-color: lightskyblue;`
   - `.box-2`: `background-color: lightsalmon;`
   - *Hiện tượng*: Hai hình chữ nhật màu nằm sát nhau theo trục dọc (vì `<div>` là phần tử khối - block element).
3. **Bước 3 - Thêm Padding (Vùng đệm bên trong)**:
   - Thêm `padding: 20px;` vào `.box`.
   - *Hiện tượng*: Chữ không còn sát mép viền, đồng thời kích thước nhìn thấy của hộp nở to ra (màu nền bao trùm cả vùng padding).
4. **Bước 4 - Thêm Border (Đường viền)**:
   - Thêm `border: 10px solid #333;` vào `.box`.
   - *Hiện tượng*: Xuất hiện viền đen bao quanh bên ngoài lớp padding, hộp tiếp tục to ra thêm 20px mỗi chiều (10px mỗi bên).
5. **Bước 5 - Thêm Margin (Khoảng cách lề bên ngoài)**:
   - Thêm `margin: 40px;` vào `.box`.
   - *Hiện tượng*: Kích thước khối viền không đổi, nhưng sinh ra khoảng trống trong suốt 40px đẩy hai hộp cách xa nhau và cách xa mép trình duyệt.

---

## 3. Công Thức Tính Toán Kích Thước Thực Tế (Box Model Calculation)

Mặc định, CSS sử dụng `box-sizing: content-box`:

```text
Chiều rộng hiển thị (Visual Width) = width + padding-left + padding-right + border-left + border-right
= 250px + 20px + 20px + 10px + 10px = 310px

Chiều cao hiển thị (Visual Height) = height + padding-top + padding-bottom + border-top + border-bottom
= 150px + 20px + 20px + 10px + 10px = 210px

Tổng không gian chiếm dụng trên trang (gồm margin):
- Chiều rộng: 310px + 40px (margin-left) + 40px (margin-right) = 390px
- Chiều cao: 210px + 40px + 40px = 290px
(Lưu ý: Giữa 2 khối dạng block xảy ra hiện tượng Margin Collapsing - gộp lề, khoảng cách giữa Hộp 1 và Hộp 2 là 40px thay vì 80px).
```

---

## 4. Tự Khám Phá & Mở Rộng

1. **Thử thay đổi `padding-left` hoặc `margin-top` cho riêng `.box-2`**:
   - Khi tăng `padding-left: 50px;`, chữ trong Hộp 2 bị thụt sâu sang phải và chiều ngang Hộp 2 phình rộng hơn Hộp 1.
   - Khi đặt `margin-top: 80px;`, khoảng cách dọc giữa Hộp 1 và Hộp 2 tăng lên 80px (do margin-top lớn hơn margin-bottom 40px của Hộp 1).

2. **Áp dụng "thần chú" `box-sizing: border-box;`**:
   ```css
   * {
     box-sizing: border-box;
   }
   ```
   - **Kết quả**: Hộp thu nhỏ về đúng kích thước hiển thị bên ngoài là `250px × 150px`.
   - Vùng nội dung (content) sẽ tự động co lại:
     - Chiều rộng nội dung = 250px - (20px × 2) - (10px × 2) = 190px.
     - Chiều cao nội dung = 150px - (20px × 2) - (10px × 2) = 90px.
   - Đây là thuộc tính tiêu chuẩn trong thiết kế web hiện đại giúp kiểm soát layout chính xác, không bị vỡ layout khi thêm padding và border.
