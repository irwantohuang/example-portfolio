<script setup>
defineProps({
    link: String,
    name: String,
    type: String,
    icon: String
})

</script>

<template>

    <a 

        :class="type === 'primary' ? 'bg-primary hover:bg-primary/85' : 'bg-accent-secondary hover:bg-accent-secondary/85'"
        class="bg-primary px-2 md:px-4 md:py-1 text-[10px] md:text-sm text-backgroundColor rounded-sm hover:text-backgroundColor-200 " 
        :href="link"
        target="_blank">
        {{ name }}
        <fa-icon :icon="icon" class="ms-2"/>
    </a>

</template>