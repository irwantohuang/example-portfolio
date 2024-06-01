<script setup>
import { onMounted, ref } from 'vue';
import { getLogoColors } from '../../utils/colorHelper'

const props = defineProps({
    portfolio: Array
})

const clampActive = ref(props.portfolio.map(() => true));
const toggleLineClamp = (index) => clampActive.value[index] = !clampActive.value[index];

</script>

<template>
    <div class="flex flex-col gap-4">
    <div v-for="(data, index) in portfolio" :key="index">
        <div class="flex flex-row gap-2 bg-backgroundColor-200 overflow-hidden rounded-2xl shadow-md hover:scale-[102%] transition-all duration-200 ease-in-out max-h-[200px]">
            <div class="relative lg:h-full max-w-[175px] lg:max-w-[300px]">
                <img :src="data.image" alt="" class="w-full h-full object-cover object-left-top">

                <a target="_blank" :href="data.link" class="absolute bottom-2 right-2 h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer transition-all duration-300 text-xl bg-primary hover:bg-primary-200 text-backgroundColor hover:text-textColor">
                    <fa-icon icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
            </div>


            <div class="flex flex-col px-3 pt-2 pb-4">
                <div class="flex items-center gap-2 mb-2 lg:mb-0">
                    <h5 v-for="text in data.tools" :class="getLogoColors(text)" class="text-[8px] md:text-xs py-[1px] px-4 rounded-full">{{ text }}</h5>
                </div>
                <h4 class="text-sm md:text-lg lg:text-2xl leading-none font-semibold text-primary ">{{ data.title
                    }}</h4>
                <p @click="toggleLineClamp(index)" class="text-[10px] md:text-sm lg:text-base text-justify"
                    :class="clampActive[index] ? 'line-clamp-2 lg:line-clamp-3' : 'line-clamp-none'"> 
                    {{ data.description }}
                </p>
            </div>
        </div>
    </div>
</div>
</template>