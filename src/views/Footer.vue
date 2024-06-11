<script setup>
import Pages from '../components/Footer/Pages.vue';
import Profile from '../components/Footer/Profile.vue';
import Contact from '../components/Footer/Contact.vue';

</script>

<template>
    <section class="mt-[80px] xl:mt-[200px] relative z-20 bg-textColor text-backgroundColor pt-20">
        <div class="container mx-auto lg:p-0">
            <div class="flex flex-col items-start gap-12 lg:flex-row lg:justify-between">
                <Profile />
                <Pages />
                <Contact />
            </div>

            <div class="border-t py-8 mt-16">
                <p v-scroll-reveal="{ delay: 1000, distance: '10px' }" class="sr_footer text-sm md:text-base text-center font-semibold">Copyright &copy; Irwanto Huang 2024. All rights reserved</p>
            </div>
        </div>
    </section>
</template>