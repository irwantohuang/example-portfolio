<script setup>
import { getLogoColors } from '../../utils/colorHelper'
defineProps({
    portfolio: Array
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(data, index) in portfolio" :key="index" class="bg-backgroundColor-200 overflow-hidden rounded-2xl shadow-md hover:scale-[102%] transition-all duration-200">
            <div class="relative h-[200px] lg:min-w-[100px]">
                <img :src="data.image" alt="" class="w-full h-full object-cover  object-top">

                <a target="_blank" :href="data.link" class="absolute bottom-2 right-2 h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer transition-all duration-300 text-xl bg-primary hover:bg-primary-200 text-backgroundColor hover:text-textColor">
                    <fa-icon icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
            </div>

            <div class="px-3 pt-2 pb-4">
                <div class="flex gap-2 mb-1">
                    <h5 v-for="text in data.tools" :class="getLogoColors(text)" class="text-xs py-[1px] px-4 rounded-full">{{ text }}</h5>
                </div>
                <h4 class="text-xl lg:text-2xl leading-none font-semibold text-primary mb-1">{{ data.title
                    }}</h4>
                <p class="text-xs lg:text-base text-justify max-w-sm">{{ data.description }}</p>
            </div>
        </div>
    </div>
</template>