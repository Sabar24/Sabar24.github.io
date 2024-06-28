function fetchLinkFromServer() {
    $.ajax({
        url: 'http://10.86.129.69:5000/fetch-link',
        success: function(response) {
            if (response.link) {
                var verificationButton = document.getElementById('verificationButton');
                verificationButton.href = response.link;
            } else {
                console.error('Failed to fetch link:', response);
                alert('Failed to fetch link. Please try again later.');
            }
        },
        error: function(error) {
            console.error('Failed to fetch link:', error);
            alert('Failed to fetch link. Please try again later.');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchLinkFromServer();
});
