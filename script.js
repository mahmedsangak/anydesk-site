document.addEventListener("DOMContentLoaded", function () {
    // لو المستخدم مسجل دخول، يروح على الصفحة الرئيسية
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "home.html";
    }
});

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const terms = document.getElementById("terms").checked;

    const correctUsername = "mahmoud";
    const correctPassword = "123456";

    if (username !== correctUsername || password !== correctPassword) {
        alert("Wrong username or password");
        return;
    }

    if (!/^01\d{9}$/.test(phone)) {
        alert("Phone number must start with 01 and be 11 digits");
        return;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions");
        return;
    }

    // حفظ حالة الدخول
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
});
