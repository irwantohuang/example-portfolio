<script setup>
</script>

<template>
    <section id="hero" class="h-[640px] w-full relative z-10">
        <div class="absolute inset-0 z-20 bg-hero opacity-5"></div>
        <div class="absolute inset-0 z-10 bg-gradient-to-t to-primary-300 from-white"></div>

            <div class="relative z-30 container mx-auto flex h-full flex-col items-center lg:flex-row lg:justify-between py-[75px]">
                <div class="lg:order-2 w-[450px] h-full flex items-center justify-center">
                    <div class="sr_hero__img p-4 rounded-full border-b-8 border-l-4 border-r-4 border-solid border-primary mb-3">
                        <div
                            class="lg:order-2 overflow-hidden h-[200px] lg:h-[300px] w-[200px] lg:w-[300px] rounded-full border-t-8 border-accent-secondary border-r-4 border-l-4 flex items-center justify-center text-white">
                            <img src="../assets/profile2.jpeg" alt="">
                        </div>

                    </div>
                </div>

                <div class="sr_hero__text order-none lg:order-1 flex-1 text-center lg:text-start">
                    <h3 class="h3 font-secondary font-semibold text-primary">hi everyone!</h3>
                    <h2 class="h3 font-bold">
                        I'am    
                        <a href="#" class="h2 font-bold">Irwanto Huang</a>
                    </h2>
                    <p class="text-base capitalize text-textColor/65 mb-4">Front-End Web Developer | bringing your
                        vision to digital life</p>

                    <p class="text-sm text-textColor/85">I specialize in creating dynamic, responsive, and user-friendly
                        websites. Let's build something amazing together 🚀</p>

                    <!-- Call to Action Button -->
                    <div class="flex gap-3 mt-4 flex-col items-center lg:flex-row">
                        <button class="btn btn-primary">Explore My Work</button>
                        <button class="btn btn-secondary">Get in Touch</button>
                    </div>
                </div>
            </div>


    </section>
</template>

<style scoped>
.bg-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 0) 100%), url('@/assets/your-background-image.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>