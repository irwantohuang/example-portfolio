<template>
    <div class="w-full lg:w-1/2">
        <form action="#">
            <div v-scroll-reveal="{ delay: 200, interval: 150, origin: 'right' }" class="sr_contact__form form w-full">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>
            <div v-scroll-reveal="{ delay: 200, interval: 150, origin: 'right' }" class="sr_contact__form form w-full">
                <label for="name">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div v-scroll-reveal="{ delay: 200, interval: 150, origin: 'right' }" class="sr_contact__form form w-full">
                <label for="name">Message</label>
                <textarea name="message" id="message" class="h-32"></textarea>
            </div>
            <div v-scroll-reveal="{ delay: 200, interval: 150, origin: 'right' }" class="sr_contact__form w-full">
                <button class="btn btn-primary w-full justify-center">Submit</button>
            </div>
        </form>
    </div>

</template>

<style scoped>
.form label {
    @apply text-base font-bold text-primary
}

.form input,
.form textarea {
    @apply w-full text-sm bg-backgroundColor-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-4
}
</style>