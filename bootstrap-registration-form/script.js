document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const successAlert = document.getElementById('successAlert');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Kiểm tra khớp mật khẩu
    let isPasswordMatch = true;
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Mật khẩu xác nhận không khớp');
      isPasswordMatch = false;
    } else {
      confirmPassword.setCustomValidity('');
    }

    if (!form.checkValidity() || !isPasswordMatch) {
      form.classList.add('was-validated');
    } else {
      form.classList.add('was-validated');
      successAlert.classList.remove('d-none');
      successAlert.scrollIntoView({ behavior: 'smooth' });

      // Reset form sau 3 giây nếu muốn
      setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
      }, 3000);
    }
  });

  // Tự động kiểm tra lại khi người dùng gõ xác nhận mật khẩu
  confirmPassword.addEventListener('input', () => {
    if (password.value === confirmPassword.value) {
      confirmPassword.setCustomValidity('');
    } else {
      confirmPassword.setCustomValidity('Mật khẩu xác nhận không khớp');
    }
  });
});
