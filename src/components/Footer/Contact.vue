<script setup>
import { contact } from '../../data/footer'
</script>

<template>

    <div class="flex flex-col items-start gap-4 lg:order-1">
        <h3 class="sr_footer__title text-backgroundColor font-bold h3">Contact</h3>
        <ul>
            <li v-for="data in contact" class="sr_footer__content">
                <p class="text-base font-medium text-backgroundColor">
                    <fa-icon :icon="data.icon" class="me-2"/>
                    {{ data.title }}
                </p>
                <a href="" class="text-backgroundColor-300 hover:text-backgroundColor-200">
                    {{ data.value }}
                </a>
            </li>
        </ul>
    </div>

</template>