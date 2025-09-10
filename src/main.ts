// Entry point for Vanilla TS Boilerplate
import './style.css';
import { gsap } from 'gsap';

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Skip animations for users who prefer reduced motion
    gsap.set(['h1', 'p', '.flex.justify-center.mb-8', '#helloBtn', '#features', '#cta', 'footer', '.grid > div', 'nav', 'nav a'], {
      opacity: 1,
      y: 0,
      scale: 1
    });
    return;
  }

  // Responsive animation values
  const isMobile = window.innerWidth < 768;
  const titleY = isMobile ? -20 : -30;
  const contentY = isMobile ? 15 : 20;
  const sectionY = isMobile ? 30 : 40;
  const cardY = isMobile ? 20 : 30;

  // Set initial states for smooth animations
  gsap.set(['h1', 'p', '.flex.justify-center.mb-8', '#helloBtn'], {
    opacity: 0
  });
  gsap.set('h1', { y: titleY });
  gsap.set(['p', '.flex.justify-center.mb-8'], { y: contentY });
  gsap.set('#helloBtn', { scale: 0.9 });
  gsap.set(['#features', '#cta', 'footer'], { opacity: 0, y: sectionY });
  gsap.set('.grid > div', { opacity: 0, y: cardY });
  gsap.set('nav', { opacity: 0, y: -20 });
  gsap.set('nav a', { opacity: 0, y: -10 });
  gsap.set('footer p', { opacity: 0, y: 20 });
  gsap.set('footer a', { opacity: 0, scale: 0.9 });

  // Navbar animation
  gsap.to('nav', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power2.out'
  });

  // Navbar items staggered animation
  gsap.to('nav a', {
    duration: 0.4,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    stagger: 0.1,
    delay: 0.2
  });

  // Hero title animation
  gsap.to('h1', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out'
  });

  // Hero description animation
  gsap.to('p', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 0.2
  });

  // Hero buttons animation
  gsap.to('.flex.justify-center.mb-8', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 0.4
  });

  // Get Started button bounce animation
  gsap.to('#helloBtn', {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 0.6
  });

  // Features section animation
  gsap.to('#features', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 0.8
  });

  // Features cards staggered animation
  gsap.to('.grid > div', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    stagger: isMobile ? 0.1 : 0.15,
    delay: 1.0
  });

  // CTA section animation
  gsap.to('#cta', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 1.8
  });

  // Footer animation
  gsap.to('footer', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 2.2
  });

  // Footer text animation
  gsap.to('footer p', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    delay: 2.4
  });

  // Footer link animation
  gsap.to('footer a', {
    duration: 0.8,
    scale: 1,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 2.6
  });
});

// Button click handler with animation
const helloBtn = document.getElementById('helloBtn') as HTMLButtonElement;
if (helloBtn) {
  helloBtn.addEventListener('click', () => {
    // Animate the button
    gsap.to(helloBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    // Create and animate output text
    const output = document.createElement('p');
    output.textContent = 'Welcome to Vanilla TypeScript Boilerplate! 🚀';
    output.className = 'text-center text-lg font-semibold text-green-600 mt-4';
    output.style.opacity = '0';
    output.style.transform = 'translateY(20px)';

    const heroSection = document.querySelector('.bg-gradient-to-br');
    if (heroSection) {
      heroSection.appendChild(output);

      gsap.to(output, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      gsap.fromTo(mobileMenu, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(mobileMenu, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => mobileMenu.classList.add('hidden')
      });
    }
  });
}

// Navbar item hover animations
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out'
    });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    });
  });
});

// Footer link hover animations
const footerLink = document.querySelector('footer a');
if (footerLink) {
  footerLink.addEventListener('mouseenter', () => {
    gsap.to(footerLink, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  footerLink.addEventListener('mouseleave', () => {
    gsap.to(footerLink, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
}
