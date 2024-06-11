<script setup>
import { ref } from 'vue'
const aboutData = ref([
    {
        title: 'Profile',
        text: "Hi, I'm Irwanto Huang, a dedicated front-end web developer 💻. Over the past 2 years, I've developed a strong foundatin in HTML, CSS, Javascript, and Java, along with proficiency in modern frameworks like Vue.js, TailwindCSS, Spring Boot and more. My focus is on delivering exceptional user experiences through responsive design, clean code and performance optimization. Whether I'm working on a simple landing page or a complex web application, I bring creativity, technicall skill, and commitment to excellence to every project."
    }, 
    {
        title: 'Path',
        text: "My journey 🚀 into the world of web development began with a fascination for technology and a curiosity to understand how things work. Currently, I alse serve as an IT Specialist 🤓. This role has provided me with invaluable insights into the intersection of technology and business."
    }
])

const about = ref(['Profile', 'Path'])
const viewActive = ref('Profile')

const toggleView = (e) => {
    viewActive.value = e;
}

const checkActive = (e) => {
    if (e == viewActive.value) return true;
    else return false;
}

</script>

<template>

    <section id="about" class="mt-[80px] xl:mt-[150px] relative z-20">
        <div class="container mx-auto lg:flex lg:flex-col lg:items-center">
            <h3 v-scroll-reveal="{distance: 0, origin: 'none', scale: 0.8}" class="sr_about__title h3 font-secondary font-bold text-accent text-center mb-4 dark:text-accent">
                about me
            </h3>

            <div v-scroll-reveal="{distance: 0, origin: 'none', scale: 0.8, opacity: 0, delay: 1000, duration: 2000}"
                class="sr_about__content flex flex-col justify-center items-start gap-4 dark:bg-textColor-secondary bg-backgroundColor-200 px-4 pt-6 py-10 rounded-xl lg:max-w-5xl">
                <div class="flex justify-center gap-2">
                    <template v-for="(data, index) in about" :key="index">
                        <button @click="toggleView(data)" class="btn-small"
                            :class="checkActive(data) ? 'btn-primary' : 'btn-secondary'">
                            {{ data }}
                        </button>
                    </template>
                </div>

                <div class="text pt-4 border-t-2 border-t-textColor-secondary/50 dark:border-t-backgroundColor-300">
                    <template v-for="(data, index) in aboutData" :key="index">
                        <div v-if="viewActive == data.title">
                            <h5 class="text-[20px] font-secondary font-medium text-primary dark:text-accent mb-1">
                                My {{ data.title }}
                            </h5>
                            <p class="text-base text-justify lg:text-lg">
                                {{ data.text }}
                            </p>
                        </div>
                    </template>
                </div>

            </div>
        </div>
    </section>

</template>