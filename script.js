gsap.registerPlugin(TextPlugin);

window.addEventListener('DOMContentLoaded', () => {
    const textReveal = document.querySelector('.logo');
    const text = textReveal.textContent;
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    textReveal.innerHTML = '';
    textReveal.appendChild(textSpan);

    gsap.to(textSpan, {
        duration: 2,
        y: 0,
        ease: 'power4.inOut'
    });

});

