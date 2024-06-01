<script setup>
    import { ref } from 'vue'
    import { skills } from '../data/skills'
    const logos = ref([
        'bootstrap.svg',
    ])

    const getLogoSrc = (logo) => `../assets/logo/${logo}`;
</script>

<template>

    <section class="mt-[80px] xl:mt-[200px] relative z-20 bg-textColor py-[120px]">
        <div class="container mx-auto">
            <h3 class="h3 font-secondary font-bold text-accent text-center mb-2">
                skills  
            </h3>

            <h2 class="h2 text-center font-semibold text-backgroundColor-200">The skills, tools and technology I am good at: </h2>

            <div class="flex justify-center items-center flex-wrap gap-6 mt-8">
                <template v-for="(img, index) in skills" :key="index">
                    <img class="w-16 h-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer":src="img" alt="">
                </template>
                <!-- <div class="flex flex-col items-center justify-center">
                <img class="skills-logo" src="../assets/logo/javascript.svg" alt="">
                    <p class="text-white text-sm mt-2">javascript</p>
                </div>
                <img class="skills-logo" src="../assets/logo/java.svg" alt="">
                <img class="skills-logo" src="../assets/logo/vuejs.svg" alt="">
                <img class="skills-logo" src="../assets/logo/tailwindcss.svg" alt="">
                <img class="skills-logo" src="../assets/logo/boostrap.svg" alt="">
                <img class="skills-logo" src="../assets/logo/spring-boot.svg" alt="">
                <img class="skills-logo" src="../assets/logo/postgresql.svg" alt=""> -->
            </div>
        </div>
    </section>

</template>