// gsap.from('.header', { duration: 1, y: '100vh', ease: 'bounce' })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 1, x: "-100vw", delay: 2, ease: "power2.in" })
// gsap.from('.left', { duration: 1, x: "-100%", delay: 1, })
// gsap.from('.footer', { duration: 1, y: '-100vh', delay: 3 })
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720, delay: 4 }, { duration: 1, rotation: 0, opacity: 1, scale: 1, delay: 4 })

const timeline = gsap.timeline({ defaults: { duration: .5 } })
timeline.from('.header', { x: '-100vw', ease: 'bounce' });
timeline.from('.link', { opacity: 0, stagger: .5 });
timeline.from('.right', { x: '-100vw', ease: 'power2.in' });
timeline.from('.left', { x: '-100%' }, '<.5');
timeline.to('.footer', { y: 0, ease: 'elastic',duration:3 })
timeline.fromTo('.button',{opacity:0,rotation:720,scale:0},{opacity:1,scale:1,rotation:0})


//for reverse
const button =document.querySelector('.button');
button.addEventListener('click',()=>{
    timeline.timeScale(1);
    timeline.reverse();
})