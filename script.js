console.log('hoi');

// -> observer
const options = {
    rootMargin: "0px 0px -100px 0px",
    threshold: 0,
}
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const boxes = entry.target.querySelectorAll('.box');
            boxes.forEach((box, index) => {
                const delay = index * 100;
                setTimeout(() => {
                    box.classList.remove('hidden');
                }, delay)
            })
            observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver(callback, options);

// -> observer starten
const containers = document.querySelectorAll('.reveals');
containers.forEach(container => {
    observer.observe(container);
});
