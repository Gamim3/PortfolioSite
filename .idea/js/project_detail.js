// === LIGHTBOX LOGIC ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
    // Get the source from the clicked image (or the image inside the clicked div)
    const img = element.tagName === 'IMG' ? element : element.querySelector('img');

    if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

// Trigger animation for stat bars when they scroll into view
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.stat-fill');
    fills.forEach(fill => {
        // Simple timeout to trigger CSS transition after load
        setTimeout(() => {
            // This forces the browser to recalculate styles so the transition runs
            const targetWidth = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 100);
        }, 500);
    });
});