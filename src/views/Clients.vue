<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import { clients } from '../data/clients'

const modules = [Pagination]
const breakpoints = ref(
    {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
)
</script>

<template>

    <section class="mt-[80px] xl:mt-[200px] relative z-20 bg-backgroundColor-300 dark:bg-backgroundColor-300/30 py-[100px]">
        <div class="container mx-auto lg:p-0">

            <div class="text-center mb-12">
                <h3 v-scroll-reveal="{ scale: 0.8, distance: 0, origin: 'none' }" class="sr_client__title 3 font-secondary font-bold text-primary text-center mb-2 lowercase dark:text-accent">What Clients Say</h3>
                <h2 v-scroll-reveal="{ delay: 1000, distance: '20px' }" class="sr_client__subtitle h2 mt-2 font-semibold text-textColor-secondary max-w-xl mx-auto leading-none dark:text-backgroundColor-200">Discover why
                    our clients love working with us</h2>
            </div>
            <div>
                <swiper spaceBetween="25" :pagination="true" :modules="modules" :breakpoints="breakpoints"
                    class="mySwiper h-[300px]">

                    <swiper-slide v-for="(data, index) in clients" :key="index">
                        <div v-scroll-reveal="{ distance: '35px', delay: 200, interval: 150 }" class="sr_client__content bg-backgroundColor shadow-md h-[250px] flex flex-col py-4 px-6 rounded-2xl dark:bg-textColor">
                            <div class="flex gap-6 border-b border-b-black pb-4 dark:border-b-backgroundColor-200">
                                <div class="w-[75px] h-[75px] rounded-full overflow-hidden">
                                    <img :src="data.profile" alt="">
                                </div>
                                <div class="flex flex-col items-start">
                                    <h3 class="h3 font-semibold text-primary dark:text-primary-200">{{ data.name }}</h3>
                                    <p class="text-sm font-bold uppercase text-primary/50 dark:text-backgroundColor-300">{{ data.title }}</p>
                                </div>
                            </div>
                            <p class="text-base font-normal text-textColor-secondary mt-8 dark:text-backgroundColor-300">{{ data.description }}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>

</template>

<style scoped>
.swiper-wrapper {
    gap: 4 !important;
}

/* .swiper {
    width: 100%;
    height: 200px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
</style>