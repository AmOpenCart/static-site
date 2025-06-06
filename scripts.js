// Google Analytics Setup
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto'); // Replace with actual tracking ID
ga('send', 'pageview');

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const launchYear = document.getElementById('launch-year');
const currentYearSpan = document.getElementById('current-year-span');

// Mobile Menu Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', 
        mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-menu') && !event.target.closest('.mobile-menu-btn')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Dynamic Copyright Year
function updateCopyright() {
    const currentYear = new Date().getFullYear();
    if (launchYear && currentYearSpan) {
        const launchYearVal = parseInt(launchYear.textContent, 10);
        if (currentYear > launchYearVal) {
            currentYearSpan.textContent = '–' + currentYear;
        }
    }
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
function init() {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    updateCopyright();
    
    // Set initial ARIA states
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add fade-in animation to elements as they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should fade in
document.querySelectorAll('.deal-card, .feature-card, .contact-item').forEach(el => {
    observer.observe(el);
});

(function () {
  const style = document.createElement('style');
  style.textContent = `
    .blurred-body > *:not(.dev-banner) {
      filter: blur(10px);
      pointer-events: none;
      user-select: none;
    }

    .dev-banner {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      text-align: center;
      padding: 2rem;
    }

    .dev-banner h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .dev-banner p {
      font-size: 1.2rem;
      max-width: 600px;
    }
  `;
  document.head.appendChild(style);

  document.body.classList.add('blurred-body');

  const banner = document.createElement('div');
  banner.className = 'dev-banner';
  banner.innerHTML = `
    <h1>🚧 Under Construction</h1>
    <p>We’re working hard to improve this website.<br>Please check back soon.</p>
  `;

  document.body.appendChild(banner);
})();
