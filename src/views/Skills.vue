<script setup>
    import { skills } from '../data/skills'
</script>

<template>

    <section class="mt-[80px] xl:mt-[200px] relative z-20 bg-textColor py-[120px]">
        <div class="container mx-auto">
            <h3 v-scroll-reveal="{ scale: 0.8, distance: 0, origin: 'none' }" class="sr_skill__title h3 font-secondary font-bold text-accent dark:text-accent text-center mb-2">
                skills  
            </h3>

            <h2 v-scroll-reveal="{ delay: 1000, distance: '50px', duration: 2000 }"  class="sr_skill__subtitle h2 text-center font-semibold text-backgroundColor-200">The skills, tools and technology I am good at: </h2>

            <div class="flex justify-center items-center flex-wrap gap-6 mt-8">
                <template v-for="(img, index) in skills" :key="index">
                    <img v-scroll-reveal="{ scale: 0.3, distance: 0, delay: 1000, origin: 'none', interval: 100 }" class="sr_skill__content w-16 h-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer":src="img" alt="">
                </template>
            </div>
        </div>
    </section>

</template>