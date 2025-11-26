// === PAGE TRANSITION LOGIC (SMOOTH) ===

window.addEventListener('load', () => {
    const overlay = document.querySelector('.transition-overlay');

    // 1. On Page Load: Play "Reveal" (Center -> Left)
    // Small timeout allows the DOM to settle, but CSS blocks the view initially
    setTimeout(() => {
        if (overlay) {
            overlay.classList.add('animate-reveal');
        }
    }, 50);

    // 2. Intercept Link Clicks
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Validate link (internal links only)
            if (href && !href.startsWith('#') && link.getAttribute('target') !== '_blank') {
                e.preventDefault();

                if (overlay) {
                    // STEP A: Reset animations
                    overlay.classList.remove('animate-reveal');

                    // STEP B: Instantly snap bars to the RIGHT side (off-screen)
                    // We add a helper class to force them to the right without animation
                    overlay.classList.add('snap-right');

                    // STEP C: Force browser to repaint (Critical for the snap to work)
                    void overlay.offsetWidth;

                    // STEP D: Remove snap and Play Exit Animation (Right -> Center)
                    overlay.classList.remove('snap-right');
                    overlay.classList.add('animate-exit');
                }

                // Wait for animation (800ms) then navigate
                setTimeout(() => {
                    window.location.href = href;
                }, 800);
            }
        });
    });
});