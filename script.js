// Japanese-inspired portfolio interactions

// Sakura (cherry blossom) petals animation
function createSakuraPetals() {
    const sakuraContainer = document.getElementById('sakura');
    const petalCount = 15;
    
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.classList.add('sakura-petal');
            
            // Random properties
            const size = Math.random() * 10 + 8;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 8;
            const delay = Math.random() * 5;
            
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${left}%`;
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;
            
            sakuraContainer.appendChild(petal);
            
            // Remove and recreate petal after animation
            setTimeout(() => {
                petal.remove();
                createSinglePetal(sakuraContainer);
            }, (duration + delay) * 1000);
        }, i * 300);
    }
}

function createSinglePetal(container) {
    const petal = document.createElement('div');
    petal.classList.add('sakura-petal');
    
    const size = Math.random() * 10 + 8;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 8;
    
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    
    container.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
        createSinglePetal(container);
    }, duration * 1000);
}

// Navigation scroll effect
function handleNavigationScroll() {
    const navigation = document.querySelector('.navigation');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
}

// Smooth scroll for navigation links
function smoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = `${progress}%`;
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Fade in sections on scroll
function fadeInSection() {
    const sections = document.querySelectorAll('.section-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Project card hover effect enhancement
function enhanceProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createSakuraPetals();
    handleNavigationScroll();
    smoothScroll();
    animateSkillBars();
    fadeInSection();
    enhanceProjectCards();
    
    console.log('Portfolio loaded successfully! 🌸');
});