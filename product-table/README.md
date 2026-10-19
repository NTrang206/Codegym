# BÀI TẬP: TẠO BẢNG DANH SÁCH SẢN PHẨM TRONG HTML

> **Mục tiêu:** Luyện tập sử dụng cấu trúc bảng trong HTML với các thẻ `<table>`, `<tr>`, `<th>`, `<td>` để trình bày dữ liệu dạng bảng (tabular data) rõ ràng, khoa học.

---

## 1. Cấu trúc mã nguồn cơ bản

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Danh sách sản phẩm</title>
</head>
<body>
  <h1>Danh sách sản phẩm</h1>

  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bàn phím cơ không dây Logitech</td>
        <td>3.290.000 đ</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Chuột công thái học Logitech MX Master 3S</td>
        <td>2.190.000 đ</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Màn hình Dell UltraSharp 27" 4K</td>
        <td>12.500.000 đ</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Tai nghe chống ồn Sony WH-1000XM5</td>
        <td>6.990.000 đ</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Ổ cứng di động SSD Samsung T7 1TB</td>
        <td>2.650.000 đ</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

---

## 2. Giải thích cấu trúc các thẻ HTML Table
- `<table>`: Thẻ bao bọc toàn bộ bảng dữ liệu.
- `<thead>`: Phần đầu bảng, chứa các tiêu đề cột.
- `<tbody>`: Phần thân bảng, chứa dữ liệu các sản phẩm.
- `<tr>` (Table Row): Tạo một hàng mới trong bảng.
- `<th>` (Table Header): Ô tiêu đề cột, chữ tự động in đậm và căn giữa.
- `<td>` (Table Data): Ô dữ liệu thông thường.
