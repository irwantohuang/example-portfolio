<script setup>
import { ref } from 'vue'
import { portfolio } from '../data/portfolio.js'
import ListPortfolio from '../components/Portfolio/ListPortfolio.vue';
import GridPortfolio from '../components/Portfolio/GridPortfolio.vue';

const viewItems = ref([
    { type: 'Grid', icon: 'fa-solid fa-table-cells-large' },
    { type: 'List', icon: 'fa-solid fa-list' }
])
const viewActive = ref('Grid')
const toggleView = (e) => viewActive.value = e;
</script>

<template>

    <section id="work" class="mt-[80px] xl:mt-[200px] relative z-20">
        <div class="container mx-auto lg:p-0">
            <h3 class="sr_portfolio__title h3 font-secondary font-bold text-accent dark:text-accent text-center mb-2">
                portfolio
            </h3>
            <h2 class="sr_portfolio__subtitle text-center h2 mt-2 text-textColor-secondary dark:text-backgroundColor-200 font-semibold">Highlights of My Creations</h2>


            <div class="border border-textColor-secondary dark:border-backgroundColor-300 rounded-2xl mt-6 py-8 px-6">
                <!-- Section -->
                <div class="flex items-center justify-end mb-2">
                    <div class="flex cursor-pointer text-2xl bg-primary-200/50 dark:bg-primary-200 rounded-md">
                        <template v-for="data in viewItems">
                            <fa-icon
                                class="first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md transition-all duration-300 ease-in-out py-2 px-3 text-backgroundColor "
                                :class="data.type == viewActive ? 'bg-primary' : 'hover:bg-primary-200/75'"
                                @click="toggleView(data.type), toggleReveal()" :icon="data.icon" />
                        </template>
                    </div>
                </div>

                <!-- View Items -->
                <div class="sr_portfolio__content pt-2 pb-6 px-2 max-h-[500px] overflow-scroll">
                    <ListPortfolio v-if="viewActive == 'List'" :portfolio="portfolio" />
                    <GridPortfolio v-if="viewActive == 'Grid'" :portfolio="portfolio" />
                </div>
            </div>
        </div>
    </section>
</template>