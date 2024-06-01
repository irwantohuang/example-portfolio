<script setup>
import { contact } from '../../data/contact'
</script>

<template>
    <div class="w-full lg:w-1/2">
        <p class="text-base text-justify">
            I'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
            reach out. You can contact me through any of the following methods, and I’ll get back to you as soon as
            possible.
        </p>


        <template v-for="(data, index) in contact" :key="index">
            <!-- <div class="flex items-center gap-2">
                    <div class="w-[35px] h-[35px] bg-backgroundColor-300 flex items-center justify-center text-primary">
                        <fa-icon :icon="data.icon" />
                    </div>
                    <p class="text-lg font-semibold text-primary">{{ data.title }}</p>
                </div>
                <p class="text-sm">
                    {{ data.description }}
                    <a class="text-base text-accent-secondary" href="">{{ data.link }}</a>
                </p> -->

            <div class="flex items-start gap-2 mt-6 mb-4">
                <div class="min-w-[50px] min-h-[50px] bg-primary text-backgroundColor-200 text-3xl rounded-md flex items-center justify-center">
                    <fa-icon :icon="data.icon" />
                </div>

                <div class="flex flex-col">
                    <p class="text-lg font-semibold text-textColor-secondary">
                        {{ data.title }}
                        <a v-if="data.link" class="text-base text-primary hover:text-accent-secondary" href="">
                            - {{ data.link }}
                        </a>
                        <a class="me-3 text-xl text-primary hover:text-accent-secondary " v-if="data.socialLinks" v-for="icon in data.socialLinks" :key="icon.name" :href="icon.link" >
                            <fa-icon class="hover:-translate-y-1 transition-all duration-300" :icon="icon.icon" />
                        </a>
                    </p>
                    <p class="text-sm">
                        {{ data.description }}
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>