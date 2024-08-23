<template>
    <div class="flex justify-center min-h-screen">
        <div class="flex flex-col p-8 max-w-4xl mx-auto">
            <div class="hero min-h-64 md:max-h-96 rounded-xl" id="hero-section">
                <div class="hero-overlay bg-opacity-70 rounded-xl"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-base-100 font-bold text-5xl">Semesterprogramm</h1>
                    </div>
                </div>
            </div>
            <div class="divider divider-primary"></div>
            <div class="w-full">
                <TheCalendar />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const image = '/Bier3.jpeg';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;
});
</script>

<style scoped></style>