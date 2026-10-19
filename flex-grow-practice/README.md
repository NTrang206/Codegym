# BÀI THỰC HÀNH: THUỘC TÍNH CSS flex-grow

> **Mục tiêu:** Nắm vững cơ chế hoạt động, cú pháp và công thức phân chia không gian dãn nở của thuộc tính `flex-grow` đối với các phần tử con (Flex Items) bên trong vùng chứa (Flex Container).

---

## 1. Cú pháp & Ý nghĩa
```css
flex-grow: <number> | initial | inherit;
```
- Giá trị mặc định là `0` (Item không tự động dãn nở để chiếm không gian trống).
- `<number>`: Là tỉ lệ nhận thêm không gian trống còn lại trong Flex Container so với các Flex Item khác.
- Chỉ có tác dụng khi phần tử cha có `display: flex;` hoặc `display: inline-flex;` và còn không gian trống (positive free space).

---

## 2. Các ví dụ thực hành trong dự án

### Ví dụ 1: Div thứ 2 tăng trưởng vượt trội so với 4 Div còn lại (Chuẩn đề bài)
- Vùng chứa có 5 div:
  - Div 1, 3, 4, 5: `flex-grow: 1;`
  - **Div 2:** `flex-grow: 4;`
- **Công thức tính:**
  - Tổng tỉ lệ `flex-grow` = 1 + 4 + 1 + 1 + 1 = `8 phần`.
  - Div 1, 3, 4, 5 mỗi div nhận: `1/8 (12.5%)` không gian dãn nở.
  - **Div 2 nhận:** `4/8 (50%)` không gian dãn nở -> Div 2 mở rộng vượt trội gấp 4 lần mỗi div còn lại.

```css
.flex-container {
  display: flex;
  gap: 12px;
}

.item-1, .item-3, .item-4, .item-5 {
  flex-grow: 1;
}

.item-2 {
  flex-grow: 4; /* Tăng trưởng vượt bậc */
}
```

### Ví dụ 2: Chỉ duy nhất Div thứ 2 dãn nở (`flex-grow: 1`)
- Các Div 1, 3, 4, 5 có kích thước cơ sở cố định `width: 110px; flex-grow: 0;`.
- Div 2 có `flex-grow: 1;` sẽ tự động chiếm **100% khoảng trống còn lại** của container. Thường ứng dụng trong thiết kế thanh điều hướng (Logo - Menu - Button) hoặc thanh tìm kiếm tự co giãn.

---

## 3. Cấu trúc thư mục

```text
flex-grow-practice/
├── index.html            # Trang demo trực quan các trường hợp flex-grow
├── style.css             # Định kiểu CSS Flexbox, màu sắc và hiệu ứng
└── README.md             # Thuyết minh nguyên lý và báo cáo thực hành
```
