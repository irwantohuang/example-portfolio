<script setup>
import ContactForm from '../components/Contact/ContactForm.vue';
import ContactDetail from '../components/Contact/ContactDetail.vue'
</script>

<template>
    <section id="contact" class="mt-[80px] xl:mt-[200px] relative z-20">
        <div class="container mx-auto">
            <div class="flex flex-col items-center">
                <h3 class="sr_contact__title h3 font-secondary font-bold text-accent text-center mb-4 dark:text-accent">
                contact
            </h3>

            <h2 class="sr_contact__subtitle h2 text-center text-textColor-secondary font-semibold dark:text-backgroundColor-200">Get in Touch!</h2>
            </div>

            <div class="flex flex-col lg:flex-row mt-10 gap-12">
                <ContactDetail />
                <ContactForm />
            </div>
        </div>
    </section>

</template>