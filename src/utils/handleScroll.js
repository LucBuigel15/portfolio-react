export const handleScroll = (e, id) => {
    e.preventDefault();
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
        window.lenis.scrollTo(id, {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    } else {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
};
