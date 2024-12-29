document.getElementById("login-button").addEventListener("click", function (event) {
    const userName = document.getElementById("userName").value;
    const pwd = document.getElementById("pwd").value;

    if (userName === "兔子" && pwd === "meow") {
        event.preventDefault();
        const form = document.querySelector("form");
        form.style.transition = "opacity 0.5s ease";
        form.style.opacity = "0";
        const wrapper = document.querySelector(".wrapper");
        wrapper.classList.add("form-success");
        setTimeout(() => {
            location.href = "./html/testing.html";
        }, 2000);
    } else {
        alert("你不是兔子本人！！！");
    }
});