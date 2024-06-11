import ScrollReveal from "scrollreveal";

export const defaultOptions = {
    origin: 'bottom',
    distance: '50px',
    duration: '1500',
    delay: '500'
}

export const scrollReveal = {
    mounted(el, binding) {
        const options = {...defaultOptions, ...binding.value}
        ScrollReveal().reveal(el, options);
    }
}
