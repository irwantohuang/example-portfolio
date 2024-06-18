<script setup>
import Pills from '../../ui/Pills.vue';
import Link from '../../ui/Link.vue';

const props = defineProps({
    portfolio: Array
})
</script>

<template>
    <div class="flex flex-col gap-4">
    <div v-for="(data, index) in portfolio" :key="index">
        <div class="flex flex-row gap-2 bg-backgroundColor-200 overflow-hidden rounded-2xl shadow-md hover:scale-[102%] transition-all duration-200 ease-in-out max-h-[200px] lg:max-h-[250px] dark:bg-textColor">

            <div class="hidden lg:block relative max-w-full lg:max-w-[350px]">
                <img :src="data.image" alt="" class="w-full h-full object-cover object-left-top">
            </div>


            <div class="flex flex-col px-3 pt-4 pb-4">
                <Pills :tools="data.tools" class=""/>

                <h4 class="text-lg lg:text-2xl leading-none font-semibold text-primary dark:text-primary-200">
                    {{ data.title}}
                </h4>

                <p class="mt-2 text-sm lg:text-base text-justify"> 
                    {{ data.description }}
                </p>

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
</div>
</template>