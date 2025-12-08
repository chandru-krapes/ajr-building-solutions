// ===== Hero Slider =====
let slideIndex = 1;
let slideTimer;

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    autoSlide();

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Next/previous controls
function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
    autoSlide();
}

// Dot controls
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    autoSlide();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

// Auto slide every 5 seconds
function autoSlide() {
    slideTimer = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        autoSlide();
    }, 5000);
}

// ===== Stats Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.phone || !data.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
            showMessage('Please enter a valid 10-digit phone number.', 'error');
            return;
        }

        // Simulate form submission (in production, this would send to a server)
        try {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Log form data (in production, this would be sent to server)
            console.log('Form submitted:', data);

            // Show success message
            showMessage('Thank you for your message! We will get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // In production, you would send this data to your email or backend:
            // Example using EmailJS or similar service:
            /*
            emailjs.send('service_id', 'template_id', {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                service: data.service,
                message: data.message,
                to_email: 'ajrbuildingsolution@gmail.com'
            }).then(() => {
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }).catch(() => {
                showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            });
            */

        } catch (error) {
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .service-detail-card, .feature-card, .area-tag, .contact-detail-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===== Active Page Highlight =====
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ===== Lazy Loading for Images (if you add images later) =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== Utility Functions =====

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Copy to clipboard functionality (useful for contact info)
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard:', text);
        });
    }
}

// ===== Performance Optimization =====

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===== Google Analytics (Placeholder) =====
// Add your Google Analytics tracking code here when ready
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-TRACKING-ID');
*/

// ===== Service Modal =====
const serviceData = {
    'painting': {
        icon: 'fas fa-paint-roller',
        title: 'Painting Services',
        description: 'Professional interior and exterior painting services with attention to detail and high-quality paints. We transform your spaces with premium finishes that last.',
        features: [
            'Interior painting',
            'Exterior painting',
            'Texture painting',
            'Color consultation',
            'Wall preparation & priming',
            'Premium quality paints',
            'Clean finish guarantee'
        ]
    },
    'wooden-polishing': {
        icon: 'fas fa-tree',
        title: 'Wooden Polishing',
        description: 'Expert wood restoration and polishing services to bring back the natural beauty of your wooden furniture and fixtures.',
        features: [
            'Furniture polishing',
            'Door & window polishing',
            'Wood restoration',
            'Premium finish',
            'Scratch repair',
            'Wood treatment',
            'Long-lasting shine'
        ]
    },
    'deep-cleaning': {
        icon: 'fas fa-broom',
        title: 'Deep Cleaning',
        description: 'Comprehensive deep cleaning services for homes and offices ensuring every corner is spotless and sanitized.',
        features: [
            'Home deep cleaning',
            'Office cleaning',
            'Kitchen & bathroom',
            'Sanitization services',
            'Carpet & upholstery',
            'Window cleaning',
            'Post-construction cleanup'
        ]
    },
    'electrical-plumbing': {
        icon: 'fas fa-bolt',
        title: 'Electrical & Plumbing',
        description: 'Professional electrical and plumbing solutions for all requirements with licensed technicians and quality workmanship.',
        features: [
            'Electrical repairs & installation',
            'Plumbing repairs & installation',
            'Carpenter work',
            'Wiring & rewiring',
            'Fixture installation',
            'Emergency services',
            'Safety compliance'
        ]
    },
    'glass-upvc': {
        icon: 'fas fa-window-maximize',
        title: 'Glass & UPVC Work',
        description: 'High-quality toughened glass and UPVC door installations with precision and modern designs.',
        features: [
            'Toughened glass installation',
            'UPVC door & window',
            'Glass partitions',
            'Shower cubicles',
            'Custom designs',
            'Energy efficient',
            'Professional installation'
        ]
    },
    'fabrication': {
        icon: 'fas fa-tools',
        title: 'Fabrication Work',
        description: 'MS/SS fabrication services for custom requirements including gates, railings, and structural elements.',
        features: [
            'MS fabrication',
            'SS fabrication',
            'Custom gates & railings',
            'Structural fabrication',
            'Welding services',
            'Design & installation',
            'Durable & strong'
        ]
    }
};

function openServiceModal(serviceId) {
    const service = serviceData[serviceId];
    if (!service) return;

    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');

    modalBody.innerHTML = `
        <div class="service-modal-icon">
            <i class="${service.icon}"></i>
        </div>
        <h2>${service.title}</h2>
        <p class="service-description">${service.description}</p>
        <ul class="service-modal-features">
            ${service.features.map(feature => `
                <li><i class="fas fa-check"></i> ${feature}</li>
            `).join('')}
        </ul>
        <div class="service-modal-cta">
            <a href="contact.html" class="btn btn-primary">Get a Quote</a>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServiceModal();
    }
});

// ===== Console Welcome Message =====
console.log('%c Welcome to AJR Building Solutions! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('%c For inquiries, call: 9843006765 ', 'color: #2563eb; font-size: 14px;');
