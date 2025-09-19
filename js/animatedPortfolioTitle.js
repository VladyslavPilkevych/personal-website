const timeline = gsap.timeline({ repeat: -10 });
const chars = document.querySelectorAll(".text");

timeline
    .from(chars, { opacity: 1, scale: 0, ease: "sine", delay: 1 })
    .to(
        ".text",
        {
            "--font-weight": 900,
            duration: 1.9,
            ease: "sine.inOut",
            stagger: { yoyo: true, each: 0.1, repeat: -3 },
        },
        1
    );