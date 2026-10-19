# [Thực hành] Xây dựng Landing Page với Bootstrap

## Mục tiêu
Luyện tập sử dụng Bootstrap 5 để xây dựng một Landing Page chuyên nghiệp, hiện đại và chuẩn responsive với các thành phần:
- **Navbar**: Thanh điều hướng có nút thu gọn (Hamburger toggler) khi chuyển sang màn hình nhỏ.
- **Hero Section**: Phần mở đầu nổi bật với tiêu đề lớn, thông điệp kêu gọi hành động (Call To Action - CTA).
- **Grid System (Services)**: Hệ thống lưới 3 cột hiển thị các dịch vụ chính dưới dạng thẻ Card.
- **Buttons & Cards**: Sử dụng hệ thống component của Bootstrap cho thẻ dịch vụ và nút bấm.
- **Footer**: Chân trang chứa thông tin bản quyền và thiết kế responsive.

---

## Cấu trúc thư mục
```text
bootstrap-landing-page/
├── index.html        # Trang Landing Page hoàn chỉnh sử dụng Bootstrap 5.3 CDN
└── README.md         # Tài liệu hướng dẫn và mô tả bài thực hành
```

---

## Chi tiết các thành phần chính trong `index.html`

1. **Bootstrap 5.3 CDN**:
   - CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
   - JavaScript Bundle: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`

2. **Thanh điều hướng (Navbar)**:
   - Sử dụng `.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark`.
   - Hỗ trợ responsive với `.navbar-toggler` và data-attributes của Bootstrap 5 (`data-bs-toggle="collapse"`).

3. **Phần mở đầu (Hero Section)**:
   - Căn giữa với `.text-center`, khoảng cách `.py-5`, nền `.bg-primary`, chữ trắng `.text-white`.
   - Nút kêu gọi hành động với class `.btn`, `.btn-light`, `.btn-lg`.

4. **Khu vực dịch vụ (Grid & Cards)**:
   - Sử dụng `.container`, `.row`, `.col-md-4` chia bố cục 3 cột đồng đều trên máy tính và xếp chồng trên thiết bị di động.
   - Thẻ hiển thị `.card` với hiệu ứng đổ bóng `.shadow-sm` và viền tinh tế `.border-0`.

5. **Chân trang (Footer)**:
   - Nền tối `.bg-dark`, chữ sáng `.text-white`, căn giữa `.text-center` và ghim cuối trang với Flexbox utilities (`d-flex flex-column min-vh-100`, `mt-auto`).
