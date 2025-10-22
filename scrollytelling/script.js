function handleParallax(scrollPosition = 0) {
    const parallaxContainers = document.querySelectorAll('.parallax-container');
    parallaxContainers.forEach(container => {
        const speed = 0.5;
        container.style.backgroundPositionY = `${(container.offsetTop - scrollPosition) * speed}px`;
    });
}

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    handleParallax(scrollPosition);
});

handleParallax();
