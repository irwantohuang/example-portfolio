<script setup>
import { getLogoColors } from '../utils/colorHelper'

defineProps({
    tools: Array
})
</script>

<template>
    <div class="flex items-center gap-2 mb-2 lg:mb-0">
        <h5 v-for="text in tools" :class="getLogoColors(text)"
            class="text-[8px] md:text-xs py-[1px] px-4 rounded-full">{{ text }}</h5>
    </div>
</template>