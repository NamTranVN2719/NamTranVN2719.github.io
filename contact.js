// Contact page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar active highlight
    const currentPage = 'contact.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Back to top functionality
    const backToTopBtn = document.getElementById('back-to-top');

    function toggleBackToTop() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Initial check
    toggleBackToTop();
});

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return false;
    }

    const subject = encodeURIComponent('Liên hệ từ website');
    const body = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\n\nTin nhắn:\n${message}`);

    const mailtoLink = `mailto:nam45444544@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Reset form after sending
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 1000);

    return false;
}