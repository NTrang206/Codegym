# BÀI THỰC HÀNH: TẠO FORM TÌM KIẾM GOOGLE

> **Mục tiêu:** Luyện tập cơ chế gửi dữ liệu từ Form HTML lên Server qua giao thức HTTP (phương thức GET/POST) và cấu hình thuộc tính `action`, `name`.

---

## 1. Cấu trúc mã nguồn cơ bản

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8">
    <title>Form Tìm kiếm Google</title>
</head>
<body>
    <form action="https://www.google.com.vn/search" method="GET" target="_blank"> 
        <input type="text" name="q" placeholder="Nhập từ khóa tìm kiếm..."/>
        <input type="submit" value="Tìm kiếm"/>
    </form>
</body>
</html>
```

---

## 2. Giải thích các thuộc tính quan trọng

1. **`action="https://www.google.com.vn/search"`**:
   - URL của máy chủ tiếp nhận và xử lý dữ liệu tìm kiếm.
2. **`method="GET"`**:
   - Phương thức HTTP truyền dữ liệu. Với `GET`, các cặp `key=value` sẽ được gắn trực tiếp vào đuôi URL:
     `https://www.google.com.vn/search?q=từ_khóa`
   - Phù hợp tuyệt đối với tính năng tìm kiếm, cho phép người dùng lưu bookmark, chia sẻ liên kết kết quả hoặc quay lại trang trước/sau qua lịch sử trình duyệt.
3. **`name="q"`**:
   - Định danh của trường dữ liệu theo quy ước của Google (`q` viết tắt của *query*). Nếu đặt sai tên (ví dụ `name="search"`), Google sẽ không nhận diện được từ khóa để trả về kết quả.

---

## 3. Câu hỏi thảo luận và thực nghiệm

### Câu hỏi 1: Nếu muốn sử dụng trang tìm kiếm của Bing thì làm thế nào?
- **Trả lời:**
  Máy chủ tìm kiếm của Microsoft Bing cũng sử dụng chung tham số `q` để nhận từ khóa. Do đó, ta chỉ cần thay đổi thuộc tính `action` của thẻ `<form>`:
  ```html
  <form action="https://www.bing.com/search" method="GET" target="_blank">
      <input type="text" name="q" placeholder="Tìm kiếm trên Bing..."/>
      <input type="submit" value="Tìm kiếm trên Bing"/>
  </form>
  ```

### Câu hỏi 2: So sánh khi đổi `method="GET"` sang `method="POST"`
- **Khi dùng `GET`:** Dữ liệu hiển thị rõ ràng trên thanh địa chỉ URL (`?q=...`), truy vấn nhanh, có thể cache và lưu bookmark.
- **Khi dùng `POST`:** Dữ liệu được đóng gói ngầm trong phần thân (Request Body) của gói tin HTTP. Khi gửi request `POST` đến URL tìm kiếm của Google (`https://www.google.com.vn/search`), Google sẽ trả về mã phản hồi **405 Method Not Allowed** vì dịch vụ tìm kiếm của Google được thiết kế chỉ chấp nhận phương thức GET.
- **Kết luận:** Dùng `GET` cho các form tìm kiếm, lọc dữ liệu (không chứa dữ liệu nhạy cảm). Dùng `POST` cho các form gửi thông tin nhạy cảm (mật khẩu, thanh toán) hoặc làm thay đổi trạng thái dữ liệu (đăng ký, cập nhật).
