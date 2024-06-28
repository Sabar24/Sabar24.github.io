function verify() {
            var checkbox = document.getElementById("verificationCheckbox");
            var messageElement = document.getElementById("verificationMessage");

            if (checkbox.checked) {
                // Ganti URL sesuai kebutuhan
                var newURL = "https://fivegaming24.github.io/open.html";
                var verificationBtn = document.querySelector(".verification-btn");
                verificationBtn.setAttribute("onclick", `window.location.href='${newURL}'`);
                
                messageElement.textContent = "Verifikasi berhasil! Sedang mengarahkan...";
                messageElement.style.display = "block";
            } else {
                messageElement.textContent = "Mohon centang kotak verifikasi untuk melanjutkan.";
                messageElement.style.display = "block";
            }
        }