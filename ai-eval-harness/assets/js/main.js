// ============================================
// AI EVAL HARNESS — INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Animate elements into view on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const animTargets = document.querySelectorAll(
    '.problem-card, .principle-card, .deliver-item, ' +
    '.eval-tier, .pipeline-step, .change-card, ' +
    '.shadow-card, .baseline-card, .gt-step'
  );

  animTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

  // ── Add visible class styles via JS (avoids FOUC)
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  // ── Verdict badge pulse on hero page
  const badges = document.querySelectorAll('.verdict-badge');
  badges.forEach((badge, i) => {
    badge.style.animationDelay = `${i * 0.15}s`;
    badge.classList.add('badge-pulse');
  });

  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes badgePulse {
      0%   { opacity: 0; transform: translateX(20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .badge-pulse {
      animation: badgePulse 0.5s ease forwards;
      opacity: 0;
    }
  `;
  document.head.appendChild(pulseStyle);

  // ── Active nav highlight based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ── Pipeline step expand on click (mobile friendly)
  document.querySelectorAll('.pipeline-step').forEach(step => {
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      step.classList.toggle('expanded');
    });
  });

  const expandStyle = document.createElement('style');
  expandStyle.textContent = `
    .pipeline-step { transition: box-shadow 0.2s ease; }
    .pipeline-step:hover { box-shadow: 0 0 0 1px var(--accent); }
    .pipeline-step.expanded { box-shadow: 0 0 0 2px var(--accent); }
  `;
  document.head.appendChild(expandStyle);

});
