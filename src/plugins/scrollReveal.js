import ScrollReveal from "scrollreveal";

export const defaultOptions = {
    origin: 'bottom',
    distance: '50px',
    duration: '2000',
    delay: '500'
}

export const sr = () => ScrollReveal({
    ...defaultOptions
})
