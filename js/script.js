// === LOADER LOGIC (UPDATED) ===
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('loader-hidden')) {
        loader.classList.add('loader-hidden');
    }
}

// 1. Try to hide when everything is loaded
window.addEventListener('load', () => {
    setTimeout(hideLoader, 1000);
});

// 2. Failsafe: Force hide after 3.5 seconds if the video/3D model is taking too long
setTimeout(hideLoader, 3500);

// === DATE WIDGET ===
const dateDisplay = document.getElementById('date-display');
const now = new Date();
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

if (dateDisplay) {
    dateDisplay.innerText = `${months[now.getMonth()]}/${now.getDate()} ${days[now.getDay()]}`;
}

// === NAVIGATION & BACKGROUND LOGIC ===
function navigate(sectionId) {
    // 1. Handle Main Content Sections
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('animate-slide-in');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('animate-slide-in');
    }

    // 2. Handle Background Switching
    document.querySelectorAll('[id^="bg-"]').forEach(el => {
        el.classList.remove('opacity-100');
        el.classList.add('opacity-0');
    });

    const targetBg = document.getElementById(`bg-${sectionId}`);
    if (targetBg) {
        targetBg.classList.remove('opacity-0');
        targetBg.classList.add('opacity-100');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
function toggleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

console.log("Emi's Portfolio Loaded Successfully.");