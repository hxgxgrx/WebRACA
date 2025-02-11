document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".title", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".menu ul li", { duration: 1, x: -50, opacity: 0, stagger: 0.2 });

    let sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        gsap.from(section, { 
            scrollTrigger: section,
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    });
});
