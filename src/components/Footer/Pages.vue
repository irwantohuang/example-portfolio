<script setup>
import { pages } from '../../data/footer'
</script>

<template>

    <div class="flex flex-col items-start gap-4 lg:order-0">
        <h3 v-scroll-reveal="{ delay: 200, origin: 'bottom', distance: '10px' }" class="sr_footer__title text-backgroundColor font-bold h3">Pages</h3>
        <ul>
            <li v-scroll-reveal="{ delay: 500, origin: 'left', interval: 150, distance: '10px' }" v-for="data in pages" class="sr_footer__content">
                <a class=" text-backgroundColor-200 hover:text-backgroundColor-300/50" href="">
                    <fa-icon :icon="data.icon" />
                    <span class="ms-4">{{ data.title }}</span>
                </a>
            </li>
        </ul>
    </div>

</template>