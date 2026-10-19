# BÀI THỰC HÀNH: CSS GRID | THUỘC TÍNH GRID-ROW

> **Mục tiêu:** Luyện tập sử dụng thuộc tính `grid-row` để thay đổi vị trí bắt đầu, vị trí kết thúc và số hàng chiếm dụng của một Grid Item trong hệ thống CSS Grid.

---

## 1. Yêu cầu bài toán

- Tạo lưới Grid gồm **3 cột và 3 hàng**:
  - `grid-template-columns: repeat(3, 1fr);`
  - `grid-template-rows: repeat(3, 100px);`
  - `gap: 10px;`
- Áp dụng các cú pháp `grid-row` khác nhau lên **Ô 1** và quan sát sự thay đổi:
  1. `grid-row: 1 / 3;`
  2. `grid-row: 2 / 4;`
  3. `grid-row: span 2;`

---

## 2. Bảng phân tích & Giải thích kết quả quan sát

| Cú pháp `grid-row` | Đường kẻ bắt đầu &rarr; kết thúc | Số hàng chiếm dụng | Kết quả quan sát trên trình duyệt |
| :--- | :--- | :--- | :--- |
| **`grid-row: 1 / 3;`** | Đường kẻ 1 &rarr; Đường kẻ 3 | **2 hàng** (Hàng 1 và 2) | Ô 1 nằm ở góc trên bên trái, kéo dài từ đỉnh xuống hết hàng số 2 của cột 1. Các ô 2, 3, 4, 5, 6 tự động điền vào các vị trí trống còn lại. |
| **`grid-row: 2 / 4;`** | Đường kẻ 2 &rarr; Đường kẻ 4 | **2 hàng** (Hàng 2 và 3) | Ô 1 tụt xuống bắt đầu từ hàng 2 và kéo dài qua hàng 3. Vị trí hàng 1 của cột 1 được nhường lại cho Ô 2, các ô còn lại dịch chuyển tương ứng theo luồng xếp tự động của Grid. |
| **`grid-row: span 2;`** | Tự động &rarr; Trải dài 2 hàng | **2 hàng** (Tính từ vị trí tự động) | Ô 1 tự động định vị ở vị trí mặc định (hàng 1) và trải dài qua 2 hàng. Kết quả hiển thị tương đương với `grid-row: 1 / span 2;`. |

---

## 3. Cấu trúc thư mục dự án

```text
css-grid-row-practice/
├── index.html     # Giao diện HTML gồm khu vực tương tác trực tiếp và so sánh 3 trường hợp
├── style.css      # Mã nguồn CSS định kiểu lưới 3x3 và các thuộc tính grid-row
└── README.md      # Báo cáo thực hành chi tiết
```
