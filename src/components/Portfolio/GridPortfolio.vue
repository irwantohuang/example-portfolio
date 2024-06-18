<script setup>
import { getLogoColors } from '../../utils/colorHelper'
import Pills from '../../ui/Pills.vue';
import Link from '../../ui/Link.vue';
defineProps({
    portfolio: Array
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        <div v-for="(data, index) in portfolio" :key="index" class="bg-backgroundColor-200 overflow-hidden rounded-2xl shadow-md hover:scale-[102%] transition-all duration-200 dark:bg-textColor">
            <div class="relative h-[200px] lg:min-w-[100px]">
                <img :src="data.image" alt="" class="w-full h-full object-cover  object-top">
            </div>

            <div class="px-3 pt-4 pb-4">
                <Pills :tools="data.tools" />
                <h4 class="text-xl lg:text-2xl leading-none font-semibold text-primary dark:text-primary-200 mb-1">{{ data.title
                    }}</h4>
                <p class="text-xs lg:text-base text-justify max-w-sm">{{ data.description }}</p>


                <div class="mt-4 flex gap-2 items-center">
                    <Link 
                        name="Live Preview" 
                        :link="data.previewLink" 
                        icon="fa-solid fa-arrow-up-right-from-square" 
                        type="primary"/>

                    <Link 
                        name="Github" 
                        :link="data.githubLink" 
                        icon="fa-brands fa-github" 
                        type="secondary"/>
                </div>
            </div>
        </div>
    </div>
</template>