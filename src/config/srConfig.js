import { sr } from "../plugins/scrollReveal";

export const applyScrollReveal = () => {
    const revealEl = () => {
        sr().reveal('.sr_hero__img', { origin: 'right' });
        sr().reveal('.sr_hero__text', { origin: 'left' });
        sr().reveal('.sr_about__title', { scale: 0.8, distance: 0, origin: 'none' });
        sr().reveal('.sr_about__content', { scale: 0.8, delay: 1000, duration: 4000, opacity: 0, distance: 0, origin: 'none' });
        sr().reveal('.sr_skill__title', { scale: 0.8, distance: 0, origin: 'none' });
        sr().reveal('.sr_skill__subtitle', { delay: 1000, distance: '50px' });
        sr().reveal('.sr_skill__content', { scale: 0.3, distance: 0, origin: 'none', interval: 100  });
        sr().reveal('.sr_portfolio__title', { scale: 0.8, distance: 0, origin: 'none' });
        sr().reveal('.sr_portfolio__subtitle', { delay: 1000, distance: '20px', origin: 'top' });
        sr().reveal('.sr_portfolio__content', { distance: '25px', delay: 200 });
        sr().reveal('.sr_client__title', { scale: 0.8, distance: 0, origin: 'none' });
        sr().reveal('.sr_client__subtitle', { delay: 1000, distance: '20px' });
        sr().reveal('.sr_client__content', { distance: '35px', delay: 200, interval: 150 });
        sr().reveal('.sr_contact__title', { scale: 0.8, distance: 0, origin: 'none' });
        sr().reveal('.sr_contact__subtitle', { delay: 500, distance: '20px' });
        sr().reveal('.sr_contact__detail_text', { delay: 1000, distance: '20px' });
        sr().reveal('.sr_contact__content', { delay: 200, interval: 150, origin: 'left' });
        sr().reveal('.sr_contact__form', { delay: 200, interval: 150, origin: 'right' });
        sr().reveal('.sr_footer__profile', { delay: 200, origin: 'top', distance: '25px' });
        sr().reveal('.sr_footer__profile_social', { delay: 500, origin: 'right', interval: 150, distance: '25px' });
        sr().reveal('.sr_footer__title', { delay: 200, origin: 'bottom', distance: '10px' });
        sr().reveal('.sr_footer__content', { delay: 500, origin: 'left', interval: 150, distance: '10px' });
        sr().reveal('.sr_footer', { delay: 1000, distance: '10px' });


    }

    revealEl();

    const handler = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            sr().reveal('.sr_hero__img', { origin: 'top' });
            sr().reveal('.sr_hero__text', { origin: 'bottom' });
        }
    }

    handler();
    window.addEventListener('resize', handler)

}
