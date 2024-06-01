<script setup>
import { socialMedia } from '../../data/socialMedia';
</script>

<template>
    <div class="flex flex-col items-start gap-4 lg:order-2 lg:items-end">
        <div class="flex gap-4">
            <div class="order-1 lg:order-none flex flex-col items-start lg:items-end justify-between">
                <p class="text-base lg:text-lg">Thanks for visiting my portfolio! 🚀</p>
                <p class="text-sm lg:text-base">Let's stay connected! Find me on social media 🤓</p>
            </div>
            <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img class="object-cover object-center" src="./../../assets/profile.jpeg" alt="">
            </div>
        </div>
        <div class="flex gap-6">
                <a href="#" class="w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:border-none text-backgroundColor hover:text-backgroundColor-200 transition-alld duration-300 text-3xl" :class="data.hover" v-for="data in socialMedia">
                <fa-icon :icon="data.icon" />
            </a>
        </div>
    </div>
    <!-- <div class="flex items-start gap-4 lg:order-2">
        <div class="lg:order-1 w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src="./../../assets/profile.jpeg" alt="">
        </div>
        <div class="flex flex-col gap-2 items-start">
            <a href="" class="text-backgroundColor hover:text-backgroundColor-300 font-bold font-secondary h3">irwanto</a>
            <div class="flex gap-4 lg:justify-start lg:items-start">
                <a class="text-2xl text-backgroundColor hover:text-backgroundColor-300" v-for="data in socialMedia" :key="data.name" href="">
                    <fa-icon :icon="data.icon" />
                </a>
            </div>
        </div>
    </div> -->
</template>