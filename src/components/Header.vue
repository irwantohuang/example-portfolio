<script setup>
import { navMenu } from '../data/navMenu';
import { ref } from 'vue'

const isNavOpen = ref(false);
const toggleHamburger = () => {
    isNavOpen.value = !isNavOpen.value
    console.log('nav', + isNavOpen.value);
};

console.log('nav', + isNavOpen.value);



</script>

<template>
    <header class="sticky top-0 h-[75px] bg-backgroundColor-200 z-30 shadow-md">
        <div class="container mx-auto flex justify-between items-center h-full">
            <a href="" class="text-lg font-semibold font-secondary text-primary hover:text-primary-200">
                @irwantohng
            </a>

            <nav>
                <!-- Hamburger Icon -->
                <div class="cursor-pointer lg:hidden" @click="toggleHamburger">
                    <fa-icon icon="fa-solid fa-bars" />
                </div>


                <ul 
                :class="isNavOpen ? 'nav-is-open' : ''"
                class="fixed left-0 right-0 w-full h-0 p-0 bg-backgroundColor-200 overflow-hidden border-t top-[75px] flex flex-col gap-4 lg:gap-10 transition-all duration-300 ease-in-out lg:relative lg:flex-row lg:p-0 lg:top-0 lg:h-full lg:border-none">
                    <li 
                    class="transition-opacity duration-300 ease-in-out delay-300" v-for="menu in navMenu" :key="menu.title">
                        <a 
                        :href="menu.link" 
                        class="lg:opacity-100"
                        :class="isNavOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'">{{ menu.title }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>