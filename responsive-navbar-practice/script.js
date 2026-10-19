document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Bắt sự kiện click vào biểu tượng ☰ (hamburger menu)
  menuIcon.addEventListener("click", function () {
    // Thêm hoặc xóa class "active" để hiển thị / ẩn menu
    navLinks.classList.toggle("active");
  });

  // Tùy chọn nâng cao: Tự động đóng menu khi người dùng bấm vào một mục liên kết
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});
