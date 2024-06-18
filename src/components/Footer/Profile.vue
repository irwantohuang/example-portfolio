<script setup>
import { socialMedia } from '../../data/socialMedia';
</script>

<template>
    <div class="flex flex-col items-start gap-4 lg:order-2 lg:items-end">
        <div v-scroll-reveal="{ delay: 200, origin: 'top', distance: '25px' }" class="sr_footer__profile flex gap-4">
            <div class="order-1 lg:order-none flex flex-col items-start lg:items-end justify-between">
                <p class="text-base lg:text-lg">Thanks for visiting my portfolio! 🚀</p>
                <p class="text-sm lg:text-base">Let's stay connected! Find me on social media 🤓</p>
            </div>
            <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img class="object-cover object-center" src="./../../assets/profile.jpeg" alt="">
            </div>
        </div>
        <div class="flex gap-6">
            <a 
                v-scroll-reveal="{ delay: 1000, origin: 'right', interval: 150, distance: '25px' }"
                class="sr_footer__profile_social w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:border-none text-backgroundColor hover:text-backgroundColor-200 transition-alld duration-300 text-3xl"
                :class="data.hover" v-for="data in socialMedia"
                :href="data.link" target="_blank">
                <fa-icon :icon="data.icon" />
            </a>
        </div>
    </div>
</template>