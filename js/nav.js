/* ============================================================
   AAA GAS ENGINEERING
   File: js/nav.js
   Purpose: Navigation scroll effect + mobile menu
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const nav = document.querySelector('nav');

  /* ── Scroll: nav background solid on scroll ── */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(11, 28, 53, 1)';
    } else {
      nav.style.background = 'rgba(11, 28, 53, 0.97)';
    }
  });

  /* ── Mobile menu toggle ── */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    let currentSection = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

});
