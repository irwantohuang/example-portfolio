import { socialMedia } from './socialMedia'


export const contact = [
    {
        title: 'Email',
        description: 'For general inquiries, please email me.',
        link: 'irwantohng@gmail.com',
        icon: 'fa-solid fa-envelope'
    },
    {
        title: 'Phone',
        description: 'Call me directly if you prefer to talk to me.',
        link: '+62 822 8454 1764',
        icon: 'fa-solid fa-phone'
    },
    {
        title: 'Social Media',
        description: "Follow me and send me a messsage on my social media platforms.",
        icon: 'fa-solid fa-share-nodes',
        socialLinks: socialMedia
    },
    {
        title: 'Contact Form',
        description: "Alternatively, you can fill out this form, and i'll respond to your message promptly.",
        icon: 'fa-solid fa-address-card',
    }
]