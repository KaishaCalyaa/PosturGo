document.addEventListener('DOMContentLoaded', () => {
    // ===== Element Selection =====
    const preloader = document.querySelector('.preloader');
    const scrollTopBtn = document.querySelector('.scroll-top');
    const navbar = document.querySelector('.header');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const currentYear = document.getElementById('current-year');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const qnaQuestions = document.querySelectorAll('.qna-question');
  
    // ===== Preloader =====
    window.addEventListener('load', () => {
      preloader.classList.add('hidden');
    });
  
    // ===== Navbar Scroll & Scroll-to-Top Button =====
    const handleScroll = () => {
      // Show/hide scroll-to-top button and add scrolled class to navbar
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
        navbar.classList.add('scrolled');
      } else {
        scrollTopBtn.classList.remove('show');
        navbar.classList.remove('scrolled');
      }
  
      // Active Nav Link on Scroll
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // ===== Mobile Menu =====
    const toggleMenu = () => {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    };
  
    mobileMenu.addEventListener('click', toggleMenu);
  
    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  
    // ===== Update Copyright Year =====
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }
  
    // ===== Tabbed Solutions Section =====
    if (tabButtons.length) {
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Deactivate all buttons and panes
          tabButtons.forEach(btn => btn.classList.remove('active'));
          document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
  
          // Activate clicked button and corresponding pane
          button.classList.add('active');
          const targetTab = button.getAttribute('data-tab');
          document.getElementById(targetTab).classList.add('active');
        });
      });
    }
  
    // ===== Q&A Accordion =====
    if (qnaQuestions.length) {
      qnaQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const parentItem = question.parentElement;
          
          // Close other open items
          document.querySelectorAll('.qna-item').forEach(item => {
            if (item !== parentItem && item.classList.contains('active')) {
              item.classList.remove('active');
            }
          });
  
          // Toggle the clicked item
          parentItem.classList.toggle('active');
        });
      });
    }
  
    // ===== Contact Form Handling =====
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission
        alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
        contactForm.reset();
      });
    }
  
    // ===== Newsletter Form Handling =====
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission
        alert('Terima kasih telah berlangganan!');
        newsletterForm.reset();
      });
    }
  
  });