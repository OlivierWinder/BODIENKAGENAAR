const vw = (coef) => window.innerWidth * (coef/100)
const vh = (coef) => window.innerHeight * (coef/100)
gsap.registerPlugin(ScrollTrigger)

gsap.to('.logo', {
    width: vw(80),
    top: 0,
    duration: 2,
            scrollTrigger: {
            trigger: 'header',
            scrub: true,
            pin: true,
            pinSpacing: false
        }
})

gsap.to('header', 
    {
        backgroundColor: "rgba(rgb(220, 220, 220), $alpha: 0)",
        height: 300,
        duration: 3,
        scrollTrigger: {
            trigger: 'header',
            pin: true,
            scrub: 1,
            pinSpacing: false
        }
    }
)

gsap.to('.halo', {
    opacity: 0,
    duration: 0.5,
            scrollTrigger: {
            trigger: 'header',
            scrub: true,
            pin: true,
            pinSpacing: false
        }
})

