const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Xóa lỗi cũ
    usernameError.textContent = "";
    passwordError.textContent = "";

    username.classList.remove("input-error");
    password.classList.remove("input-error");


    // Kiểm tra tài khoản
    if (username.value.trim() === "") {

        usernameError.textContent = "Vui lòng nhập tài khoản.";

        username.classList.add("input-error");

        isValid = false;
    }


    // Kiểm tra mật khẩu
    if (password.value.trim() === "") {

        passwordError.textContent = "Vui lòng nhập mật khẩu.";

        password.classList.add("input-error");

        isValid = false;
    }


    // Nếu không có lỗi
    if (isValid) {

        alert("Đăng nhập thành công!");

        window.location.href = "admin.html";
    }

});