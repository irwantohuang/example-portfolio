const logo = [
    { name: 'HTML', code: 'bg-[#E44D26] text-backgroundColor' },
    { name: 'CSS', code: 'bg-[#1572B6] text-backgroundColor' },
    { name: 'Javascript', code: 'bg-[#F7DF1E] text-textColor' },
    { name: 'Vue.js', code: 'bg-[#4FC08D] text-backgroundColor' },
    { name: 'TailwindCSS', code: 'bg-[#38B2AC] text-backgroundColor' },
    { name: 'Sprint Boot', code: 'bg-[#6DB33F] text-backgroundColor' },
    { name: 'Bootstrap', code: 'bg-[#7952B3] text-textColor' },
    { name: 'PostgreSQL', code: 'bg-[#336791] text-textColor' },
    { name: 'Java', code: 'bg-[#007396] text-textColor' },
]

export const getLogoColors = (techName) => {
    const tech = logo.find(i => i.name.toLowerCase() === techName.toLowerCase());
    return tech ? tech.code : null;
}