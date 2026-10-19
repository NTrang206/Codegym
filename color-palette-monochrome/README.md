# BÀI THỰC HÀNH: LUYỆN TẬP PHỐI MÀU ĐƠN TÔNG (MONOCHROMATIC COLOR SCHEME)

> **Mục tiêu:** Thực hiện phối lại màu trang web thương mại điện tử (Imaginary Store) theo nguyên lý phối màu đơn tông (Monochromatic), chuyển đổi toàn bộ tông màu đỏ ban đầu sang hệ màu xanh dương đồng bộ, chuyên nghiệp và trang nhã.

---

## 1. Bảng màu đơn tông chuẩn (Monochromatic Palette)
Xác định màu chính từ logo CodeGym / Imaginary Store (`#00ADEE`) làm **màu bậc 1**, giảm dần sắc độ và tăng độ sáng qua 10 bậc:

| Bậc màu | Mã Hex | Vai trò trong giao diện |
| :--- | :--- | :--- |
| **Bậc 1** | `#00ADEE` | **Màu chính chủ đạo**: Banner, nhãn ON SALE, nút Play Preview, nút tìm kiếm |
| **Bậc 2** | `#00B2EF` | Nhấn mạnh phụ, trạng thái tương tác |
| **Bậc 3** | `#00B9F0` | Tông chuyển tiếp |
| **Bậc 4** | `#00BFF2` | **Màu nền toàn bộ trang web** (`body background`) |
| **Bậc 5** | `#32CBF4` | Chi tiết trang trí |
| **Bậc 6** | `#5FD7F5` | Biểu tượng trích dẫn (`blockquote quote`) |
| **Bậc 7** | `#8DD7F7` | **Màu nền phần nội dung Previews** (thay thế nền hồng cũ `#fac7d2`) |
| **Bậc 8** | `#ACE2F8` | **Màu nền phần Info** (khối thông tin chân trang) |
| **Bậc 9** | `#C6E9FA` | **Màu nền Footer** (tạo độ sáng, hài hòa cho chân trang) |
| **Bậc 10** | `#E4F4FC` | Màu văn bản phụ trên nền đậm, viền nhạt |

---

## 2. Các bước thực hiện chi tiết

1. **Bước 1 - Xác định màu chủ đạo:**
   - Sử dụng màu xanh logo `#00ADEE` làm màu bậc 1, phân chia thang độ 10 bậc đơn tông.
2. **Bước 2 - Thay đổi màu nền (`body`):**
   - Đổi thuộc tính `background` của thẻ `body` từ nền ảnh cũ `bg.png` sang màu bậc 4: `#00BFF2`.
3. **Bước 3 - Thay đổi màu nền phần ON SALE / PREVIEW:**
   - Thay nền đỏ `#c33` của `#banner` thành màu bậc 1 `#00ADEE`.
   - Nút "Add to Cart" chuyển sang màu `#0077a4` (tông đậm của bậc 1 tạo hiệu ứng 3D khối).
   - Nhãn `.on-sale` đổi từ nền đỏ sang màu bậc 1 `#00ADEE`.
   - Huy hiệu `PREVIEW` và vòng tròn icon Play đổi từ nền đỏ `#fe0000` sang bậc 1 `#00ADEE`.
4. **Bước 4 - Đổi màu nền phần nội dung Previews:**
   - Thay nền hồng cũ `#fac7d2` của các thẻ `#main .preview li a` thành màu bậc 7 `#8DD7F7`.
   - Đặt màu chữ của khối này là màu đen `#000000` để đảm bảo độ tương phản cao, dễ đọc trên nền sáng.
5. **Bước 5 - Đổi màu nền phần Footer:**
   - Thay nền đen cũ của `footer` thành màu bậc 9 `#C6E9FA` với chữ đen, tạo sự thanh thoát và đồng bộ.
6. **Bước 6 - Màu chữ toàn bộ trang:**
   - Quy định màu chữ mặc định toàn bộ trang web là màu đen (`color: #000;`) kết hợp màu trắng trên các khối nền đậm (Banner, Badge).
7. **Bước 7 - Kiểm tra trực quan:**
   - Mở tệp `index.html` trên trình duyệt để kiểm tra toàn bộ bố cục và màu sắc.
8. **Bước 8 - Mở rộng thêm Theme thứ 2 (Emerald Green):**
   - Xây dựng thêm bảng màu đơn tông xanh ngọc lục bảo (Emerald Green) với màu chủ đạo `#10B981` tại tệp `theme-emerald.html` và `theme-emerald.css`.

---

## 3. Cấu trúc thư mục dự án

```text
color-palette-monochrome/
├── index.html            # Trang chính áp dụng Theme Xanh Dương (#00ADEE)
├── theme-emerald.html    # Trang mở rộng áp dụng Theme Xanh Ngọc (#10B981)
├── style.css             # Tệp CSS phối màu đơn tông xanh dương
├── theme-emerald.css     # Tệp CSS phối màu đơn tông xanh ngọc
├── images/               # Thư mục hình ảnh & logo xanh
├── fonts/                # Phông chữ woff
└── README.md             # Tài liệu thuyết minh dự án
```
