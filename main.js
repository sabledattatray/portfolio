document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const leftSidebar = document.querySelector('.left-sidebar');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            leftSidebar.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Pagination buttons
    const paginationButtons = document.querySelectorAll('.btn-pagination');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Question hover effect
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
        
        question.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});
document.querySelector("body > div.container > div.left-sidebar.js-pinned-left-sidebar.ps-relative")