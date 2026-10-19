# BÀI THỰC HÀNH: CSS FLEXBOX | THUỘC TÍNH FLEX-WRAP

> **Mục tiêu:** Nắm vững bản chất và cách sử dụng thuộc tính `flex-wrap` trong CSS Flexbox để kiểm soát hành vi xuống dòng của các Flex Item khi không đủ không gian trong Flex Container.

---

## 1. Cú pháp và Bảng so sánh 4 giá trị của `flex-wrap`

```css
flex-wrap: nowrap | wrap | wrap-reverse | initial;
```

| Giá trị | Hành vi của Flex Item | Hướng trục chéo (Cross Axis) | Ý nghĩa thực tế |
| :--- | :--- | :--- | :--- |
| **`wrap`** | **Cho phép xuống dòng** | Trên &rarr; Dưới (Mặc định) | Khi tổng độ rộng các item vượt quá kích thước container, các item thừa sẽ tự động chuyển xuống hàng mới. |
| **`nowrap`** *(Mặc định)* | **Không xuống dòng** | Không có dòng mới | Toàn bộ item bị ép nằm trên cùng 1 hàng duy nhất; các item sẽ tự động co nhỏ (`flex-shrink`) hoặc bị tràn ra ngoài viền container. |
| **`wrap-reverse`** | **Cho phép xuống dòng** | Dưới &rarr; Trên (Đảo ngược) | Các dòng được tạo ra theo chiều ngược lại: dòng đầu tiên nằm ở đáy, dòng tiếp theo nằm ở trên. Thứ tự item trong mỗi dòng vẫn được giữ nguyên. |
| **`initial`** | **Khôi phục mặc định** | Tương đương `nowrap` | Đặt giá trị thuộc tính về mặc định của CSS (`nowrap`), đưa các item về lại 1 dòng duy nhất. |

---

## 2. Kết quả quan sát trên ví dụ tổng hợp

Với Container kích thước `width: 600px; height: 300px; gap: 10px; border: 2px solid black;` chứa 6 Items mỗi ô `width: 180px; height: 80px;`:

1. **Khi áp dụng `flex-wrap: wrap;`:**
   - Hàng 1 chứa vừa 3 items: `Item 1`, `Item 2`, `Item 3` (tổng độ rộng: `180*3 + 10*2 = 560px < 600px`).
   - `Item 4`, `Item 5`, `Item 6` tự động xuống dòng thứ 2 theo hướng từ trên xuống dưới.
2. **Khi áp dụng `flex-wrap: nowrap;`:**
   - Cả 6 items bị ép nằm trên 1 hàng duy nhất, chiều rộng thực tế của mỗi item tự co lại còn khoảng `90px` để vừa với khung 600px.
3. **Khi áp dụng `flex-wrap: wrap-reverse;`:**
   - Dòng chứa `Item 1`, `Item 2`, `Item 3` bị đẩy xuống đáy container.
   - Dòng chứa `Item 4`, `Item 5`, `Item 6` được xếp ở phía trên.
4. **Khi áp dụng `flex-wrap: initial;`:**
   - Quay về trạng thái mặc định như `nowrap`, 6 items nằm trên cùng 1 dòng.

---

## 3. Cấu trúc thư mục dự án

```text
css-flex-wrap-practice/
├── index.html     # Giao diện HTML gồm khung thử nghiệm tương tác và so sánh 4 trường hợp
├── style.css      # Mã nguồn CSS định kiểu container 600x300, items 180x80 và các quy tắc wrap
└── README.md      # Báo cáo thực hành chi tiết
```
