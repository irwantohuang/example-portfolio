<script setup>
import { pages } from '../../data/footer'
</script>

<template>

    <div class="flex flex-col items-start gap-4 lg:order-0">
        <h3 class="text-backgroundColor font-bold h3">Pages</h3>
        <ul>
            <li v-for="data in pages" class="">
                <a class="text-backgroundColor-200 hover:text-backgroundColor-300/50" href="">
                    <fa-icon :icon="data.icon" />
                    <span class="ms-4">{{ data.title }}</span>
                </a>
            </li>
        </ul>
    </div>

</template>