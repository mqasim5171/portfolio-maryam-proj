// Change nav background when scrolling
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#fff';  // Change to white when scrolling
    } else {
        header.style.backgroundColor = 'transparent';  // Transparent when at the top
    }
});
