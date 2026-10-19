# BÀI TẬP: TẠO BỐ CỤC RESPONSIVE BẰNG CSS FLEXBOX

> **Mục tiêu:** Ứng dụng toàn diện mô hình CSS Flexbox để xây dựng bố cục trang web hoàn chỉnh, tự động thích ứng hoàn hảo (Responsive) giữa hai môi trường màn hình Desktop và Mobile.

---

## 1. Cấu trúc 5 phần chính của trang web

| Thành phần | Thẻ HTML | Vai trò & Cách định kiểu Flexbox |
| :--- | :--- | :--- |
| **1. Header** | `<header>` | Chứa Logo và Tiêu đề trang. Căn giữa hai đầu với `display: flex; justify-content: space-between; align-items: center;`. |
| **2. Navigation** | `<nav>` | Thanh thực đơn điều hướng. Dàn hàng ngang trên desktop bằng `display: flex; flex-wrap: wrap; gap: 8px;`. |
| **3. Main Content**| `<main>` | Khu vực nội dung bài viết chính. Chiếm tỉ lệ lớn `flex: 3` (~75% bề rộng trên Desktop). |
| **4. Sidebar** | `<aside>` | Thanh nội dung phụ (chuyên mục, bài đọc nhiều, quảng cáo). Chiếm tỉ lệ `flex: 1` (~25% bề rộng trên Desktop). |
| **5. Footer** | `<footer>` | Chân trang thông tin bản quyền và liên kết chính sách. Căn đều 2 bên bằng Flexbox. |

---

## 2. Cơ chế Responsive giữa Desktop và Mobile

### Trên màn hình Desktop (Màn hình lớn > 768px):
- Vùng chứa `main-wrapper` xếp theo chiều ngang (`flex-direction: row` - mặc định).
- `Main Content` (`flex: 3`) và `Sidebar` (`flex: 1`) nằm cạnh nhau một cách cân đối, tận dụng tối đa chiều rộng của màn hình.

### Trên màn hình Mobile (Điểm ngắt `@media (max-width: 768px)`):
- Vùng chứa `main-wrapper` chuyển thành cột dọc (`flex-direction: column`).
- `Main Content` và `Sidebar` đều chiếm trọn bề ngang `width: 100%`, Sidebar tự động trượt xuống dưới Main Content một cách gọn gàng, phù hợp thao tác cuộn trên điện thoại.
- Navigation Menu chuyển thành menu xếp dọc căn giữa dễ chạm bấm.

---

## 3. Kỹ thuật Sticky Footer bằng Flexbox
Bằng cách thiết lập thẻ `body`:
```css
body.site-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-wrapper {
  flex: 1; /* Tự động dãn nở chiếm toàn bộ không gian dọc còn lại */
}
```
Nhờ đó, Footer luôn được giữ nằm chắc chắn ở sát đáy trình duyệt kể cả khi nội dung trang ngắn.
