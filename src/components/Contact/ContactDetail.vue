<script setup>
import { contact } from '../../data/contact'
</script>

<template>
    <div class="w-full lg:w-1/2">
        <p v-scroll-reveal="{ delay: 1000, distance: '20px' }" class="sr_contact__detail_text text-base text-justify dark:text-backgroundColor-200">
            I'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
            reach out. You can contact me through any of the following methods, and I’ll get back to you as soon as
            possible.
        </p>


        <template v-for="(data, index) in contact" :key="index">
            <div v-scroll-reveal="{ delay: 200, interval: 150, origin: 'left' }" class="sr_contact__content flex items-start gap-2 mt-6 mb-4">
                <div class="min-w-[50px] min-h-[50px] bg-primary text-backgroundColor-200 text-3xl rounded-md flex items-center justify-center">
                    <fa-icon :icon="data.icon" />
                </div>

                <div class=" flex flex-col">
                    <p class="text-lg font-semibold text-textColor-secondary dark:text-backgroundColor">
                        {{ data.title }}
                        <a v-if="data.link" class="text-base text-primary hover:text-accent-secondary dark:text-primary-200 dark:hover:text-primary-200/80" disabled>
                            - {{ data.link }}
                        </a>
                        <a class="me-3 ms-1 text-xl text-primary hover:text-accent-secondary dark:text-primary-200 dark:hover:text-primary-200/80 " v-if="data.socialLinks" v-for="icon in data.socialLinks" :key="icon.name" :href="icon.link" target="_blank">
                            <fa-icon class="hover:-translate-y-1 transition-all duration-300" :icon="icon.icon" />
                        </a>
                    </p>
                    <p class="text-sm dark:text-backgroundColor-300">
                        {{ data.description }}
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>