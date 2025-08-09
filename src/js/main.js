// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const contactDropdownToggle = document.querySelector('.contact-dropdown-toggle');
    const contactDropdown = document.querySelector('.contact-dropdown');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded attribute
            const isExpanded = !mobileMenu.classList.contains('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Contact dropdown toggle functionality
    if (contactDropdownToggle && contactDropdown) {
        contactDropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            contactDropdown.classList.toggle('hidden');
            
            // Update aria-expanded attribute
            const isExpanded = !contactDropdown.classList.contains('hidden');
            contactDropdownToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
                
                // Close contact dropdown if open
                if (contactDropdown && !contactDropdown.classList.contains('hidden')) {
                    contactDropdown.classList.add('hidden');
                    contactDropdownToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        // Close contact dropdown when clicking outside
        if (contactDropdown && !contactDropdown.classList.contains('hidden')) {
            if (!contactDropdownToggle.contains(e.target) && !contactDropdown.contains(e.target)) {
                contactDropdown.classList.add('hidden');
                contactDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});