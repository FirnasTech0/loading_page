
// Modal Logic
window.openModal = function (modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    modal.classList.remove('invisible', 'opacity-0');
    modal.querySelector('.modal-content').classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function (modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    modal.classList.add('invisible', 'opacity-0');
    modal.querySelector('.modal-content').classList.add('scale-95');
    document.body.style.overflow = '';
};

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section > div > *, section > div > div > *').forEach(el => {
        observer.observe(el);
    });

    // Close modal on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal('firnasAI');
            closeModal('edAI');
        }
    });

    // Close modal on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal.id.split('-')[1]);
            }
        });
    });
});