// script.js
document.addEventListener('DOMContentLoaded', function() {
  var link = "https://example.com/initial-link"; // Ganti dengan link awal untuk tombol verifikasi

  var verificationButtonHTML = `<a href="${link}" class="verification-button">Verifikasi Sekarang</a>`;
  document.getElementById('verificationButton').innerHTML = verificationButtonHTML;
});