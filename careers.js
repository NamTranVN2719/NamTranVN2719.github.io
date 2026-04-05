// Careers page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar active highlight
    const currentPage = 'careers.html';
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

    // Career category click handlers
    const careerCards = document.querySelectorAll('.career-category-card');
    careerCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            openCareerModal(category);
        });
    });

    // Modal overlay click to close
    const modal = document.getElementById('career-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Initial check
    toggleBackToTop();
});

// Career data for modal
const careerData = {
    'cong-nghe': {
        name: 'Công Nghệ Thông Tin',
        description: 'Lĩnh vực công nghệ bao gồm phát triển phần mềm, trí tuệ nhân tạo, phân tích dữ liệu và nhiều hơn nữa.',
        skills: ['Lập trình', 'Giải thuật', 'Cơ sở dữ liệu', 'AI/ML', 'DevOps'],
        opportunities: ['Kỹ sư phần mềm', 'Nhà khoa học dữ liệu', 'Kỹ sư AI', 'Chuyên gia an ninh mạng'],
        salary: '15-50 triệu VND/tháng'
    },
    'y-te': {
        name: 'Y Tế',
        description: 'Ngành y tế cung cấp dịch vụ chăm sóc sức khỏe, nghiên cứu y học và quản lý bệnh viện.',
        skills: ['Kiến thức y học', 'Giao tiếp', 'Quản lý thời gian', 'Đạo đức nghề nghiệp'],
        opportunities: ['Bác sĩ', 'Dược sĩ', 'Điều dưỡng', 'Nghiên cứu viên y học'],
        salary: '10-40 triệu VND/tháng'
    },
    'ky-thuat': {
        name: 'Kỹ Thuật',
        description: 'Ngành kỹ thuật bao gồm thiết kế, sản xuất và bảo trì các hệ thống kỹ thuật.',
        skills: ['Thiết kế kỹ thuật', 'Phân tích', 'Lập trình', 'Quản lý dự án'],
        opportunities: ['Kỹ sư cơ khí', 'Kỹ sư điện', 'Kỹ sư xây dựng', 'Kỹ sư hóa học'],
        salary: '12-35 triệu VND/tháng'
    },
    'kinh-doanh': {
        name: 'Kinh Doanh & Quản Trị',
        description: 'Ngành kinh doanh tập trung vào quản lý doanh nghiệp, marketing và tài chính.',
        skills: ['Lãnh đạo', 'Marketing', 'Tài chính', 'Đàm phán'],
        opportunities: ['Quản lý kinh doanh', 'Marketing Manager', 'Tài chính doanh nghiệp', 'Tư vấn chiến lược'],
        salary: '15-45 triệu VND/tháng'
    },
    'ngon-ngu': {
        name: 'Ngoại Ngữ',
        description: 'Ngành ngoại ngữ bao gồm giảng dạy, dịch thuật và giao tiếp quốc tế.',
        skills: ['Ngôn ngữ', 'Dịch thuật', 'Giảng dạy', 'Văn hóa quốc tế'],
        opportunities: ['Phiên dịch viên', 'Giáo viên ngoại ngữ', 'Nhà biên phiên dịch', 'Chuyên gia văn hóa'],
        salary: '8-25 triệu VND/tháng'
    },
    'thiet-ke': {
        name: 'Thiết Kế & Mỹ Thuật',
        description: 'Ngành thiết kế sáng tạo bao gồm đồ họa, kiến trúc và nghệ thuật.',
        skills: ['Thiết kế đồ họa', 'Kiến trúc', 'Sáng tạo', 'Công cụ thiết kế'],
        opportunities: ['Thiết kế đồ họa', 'Kiến trúc sư', 'Thiết kế nội thất', 'Nghệ sĩ'],
        salary: '10-30 triệu VND/tháng'
    },
    'toa-dam': {
        name: 'Pháp Luật',
        description: 'Ngành pháp luật đảm bảo công lý và tuân thủ pháp luật trong xã hội.',
        skills: ['Kiến thức pháp luật', 'Phân tích', 'Giao tiếp', 'Đạo đức'],
        opportunities: ['Luật sư', 'Thẩm phán', 'Chuyên gia pháp lý', 'Tư vấn pháp luật'],
        salary: '15-50 triệu VND/tháng'
    },
    'giao-duc': {
        name: 'Giáo Dục',
        description: 'Ngành giáo dục tập trung vào giảng dạy và phát triển giáo dục.',
        skills: ['Giảng dạy', 'Tâm lý học', 'Quản lý lớp học', 'Đánh giá'],
        opportunities: ['Giáo viên', 'Nhà giáo dục', 'Chuyên gia đào tạo', 'Quản lý trường học'],
        salary: '8-20 triệu VND/tháng'
    }
};

// Modal functions
function openCareerModal(category) {
    const modal = document.getElementById('career-modal');
    const modalTitle = document.getElementById('modal-title');
    const careerDetail = document.getElementById('career-detail');
    
    const career = careerData[category];
    if (!career) return;
    
    modalTitle.textContent = career.name;
    
    careerDetail.innerHTML = `
        <p>${career.description}</p>
        
        <div class="career-skills">
            <h3>🛠️ Kỹ Năng Cần Thiết</h3>
            <ul>
                ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        
        <div class="career-opportunities">
            <h3>🎯 Cơ Hội Nghề Nghiệp</h3>
            <ul>
                ${career.opportunities.map(opp => `<li>${opp}</li>`).join('')}
            </ul>
        </div>
        
        <div class="career-salary">
            <strong>💰 Mức Lương Dự Kiến: ${career.salary}</strong>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('career-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Clear form
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
}

function sendCareerInquiry() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const careerName = document.getElementById('modal-title').textContent;
    
    if (!name || !email) {
        alert('Vui lòng điền đầy đủ họ tên và email!');
        return;
    }
    
    const subject = encodeURIComponent(`Tư vấn ngành nghề: ${careerName}`);
    const body = encodeURIComponent(`Họ và tên: ${name}\nEmail: ${email}\n\nNội dung tư vấn:\n${message}\n\nNgành nghề quan tâm: ${careerName}`);
    
    const mailtoLink = `mailto:nam45444544@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Close modal after sending
    setTimeout(() => {
        closeModal();
    }, 1000);
}