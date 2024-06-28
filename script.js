// script.js
document.getElementById('verificationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var message = document.getElementById('verificationMessage').value;
  var link = document.getElementById('verificationLink').value;

  // Simpan data menggunakan AJAX
  var xhr = new XMLHttpRequest();
  var url = 'https://api.example.com/submit'; // Ganti dengan URL backend yang sesuai
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        // Proses response dari backend jika perlu
        console.log('Response from server:', response);
      } else {
        console.error('Request failed:', xhr.status);
      }
    }
  };

  var data = JSON.stringify({ message: message, link: link });
  xhr.send(data);

  // Tampilkan tombol verifikasi
  var verificationButtonHTML = `<a href="${link}" class="verification-button">${message}</a>`;
  document.getElementById('verificationButton').innerHTML = verificationButtonHTML;
});