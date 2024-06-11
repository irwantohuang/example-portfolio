<script setup>
import { navMenu } from '../data/navMenu';
import { ref } from 'vue'

const isNavOpen = ref(false);
const toggleHamburger = () => {
    isNavOpen.value = !isNavOpen.value
};



const appearance = [
    { type: 'light', icon: 'fa-solid fa-sun' },
    { type: 'dark', icon: 'fa-solid fa-moon' },
]

const currentAppearance = ref('light');

const darkMode = ref(false);
const toggleAppearance = () => {
    darkMode.value = !darkMode.value
    localStorage.theme = darkMode.value ? 'dark' : 'light';

    if (darkMode) document.querySelector('html').classList.toggle('dark', darkMode.value);

}



</script>

<template>
    <header class="sticky top-0 h-[75px] bg-backgroundColor-200 z-30 shadow-md dark:bg-backgroundColor-dark">
        <div class="container mx-auto flex justify-between items-center h-full">
            <a href="" class="text-lg font-semibold font-secondary text-primary hover:text-primary-200 dark:text-accent">
                @irwantohng
            </a>

            <nav>
                <!-- Hamburger Icon -->
                <div class="cursor-pointer lg:hidden" @click="toggleHamburger">
                    <fa-icon icon="fa-solid fa-bars" />
                </div>


                <ul 
                :class="isNavOpen ? 'nav-is-open' : ''"
                class="fixed left-0 right-0 w-full h-0 p-0 bg-backgroundColor-200 overflow-hidden border-t top-[75px] flex flex-col gap-4 lg:gap-10 transition-all duration-300 ease-in-out lg:relative lg:flex-row lg:items-center lg:p-0 lg:top-0 lg:h-full lg:border-none dark:bg-backgroundColor-dark">
                    <li 
                    class="transition-opacity duration-300 ease-in-out delay-300" v-for="menu in navMenu" :key="menu.title">
                        <a 
                        :href="menu.link" 
                        class="lg:opacity-100"
                        :class="isNavOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'">{{ menu.title }}
                        </a>
                    </li>
                    <li>
                        <div @click="toggleAppearance()" class="flex items-center p-1 w-14 rounded-full cursor-pointer bg-primary/50">
                            <div class="h-5 w-5 rounded-full transition-all duration-300 ease-in-out flex justify-center items-center text-textColor" :class="{'translate-x-7': darkMode}">
                                <fa-icon v-if="darkMode" icon="fa-solid fa-moon" />
                                <fa-icon v-else icon="fa-solid fa-sun" />
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<!-- <div @click="toggleDarkMode()" class="dark-toggle flex items-center p-1 w-14 rounded-full cursor-pointer bg-slate-500 ">
    <div class="toggle-circle h-5 w-5 bg-white rounded-full transition-all ease-in-out duration-300 flex justify-center items-center" :class="{'translate-x-7': darkMode}">
      <font-awesome-icon v-if="darkMode" icon="fa-solid fa-moon" class="text-slate-500"/>
      <font-awesome-icon v-else icon="fa-solid fa-sun" class="text-slate-500"/>
    </div>
  </div> -->