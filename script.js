// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all section headers
    const headers = document.querySelectorAll('.section h2');

    // Add click event listener to each header
    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the 'active' class on the clicked header
            this.classList.toggle('active');

            // Get the content associated with this header
            const content = this.nextElementSibling;

            // Toggle the visibility of the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});