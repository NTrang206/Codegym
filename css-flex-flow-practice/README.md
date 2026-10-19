# BÀI THỰC HÀNH: CSS FLEXBOX | THUỘC TÍNH FLEX-FLOW

> **Mục tiêu:** Nắm vững cách sử dụng thuộc tính viết tắt `flex-flow` trong CSS Flexbox để gộp hai khai báo `flex-direction` và `flex-wrap` vào một dòng lệnh duy nhất.

---

## 1. Cú pháp và Nguyên lý hoạt động

```css
flex-flow: <flex-direction> <flex-wrap>;
```

- **Lưu ý quan trọng:** Thuộc tính này chỉ có tác dụng khi đặt tại phần tử cha (**Flex Container** có `display: flex` hoặc `display: inline-flex`).
- **Giá trị mặc định:** `flex-flow: row nowrap;`

---

## 2. Chi tiết 2 ví dụ theo yêu cầu đề bài

| Ví dụ | Cú pháp `flex-flow` | Chi tiết thành phần | Kết quả quan sát trên trình duyệt |
| :--- | :--- | :--- | :--- |
| **Ví dụ 1 (Container 1)** | `row nowrap` *(Mặc định)* | `flex-direction: row;`<br>`flex-wrap: nowrap;` | Các ô `1`, `2`, `3` xếp thành một hàng ngang theo chiều đọc văn bản (**trái sang phải**), không xuống dòng. |
| **Ví dụ 2 (Container 2)** | `row-reverse nowrap` | `flex-direction: row-reverse;`<br>`flex-wrap: nowrap;` | Các ô `1`, `2`, `3` xếp thành một hàng ngang nhưng theo chiều đảo ngược (**phải sang trái**: `3` &larr; `2` &larr; `1`), các ô bắt đầu từ mép phải của Container. |

---

## 3. Cấu trúc thư mục dự án

```text
css-flex-flow-practice/
├── index.html     # Giao diện HTML gồm 2 ví dụ đề bài, các ví dụ mở rộng và bảng điều khiển trực quan
├── style.css      # Mã nguồn CSS định kiểu container-1, container-2 và các kết hợp flex-flow
└── README.md      # Báo cáo thực hành chi tiết
```
