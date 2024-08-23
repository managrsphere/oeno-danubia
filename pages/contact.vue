<template>
    <div class="flex justify-center">
        <div class="flex flex-col p-8 max-w-4xl mx-auto">
            <div class="hero min-h-64 md:max-h-96 rounded-xl" id="hero-section">
                <div class="hero-overlay bg-opacity-70 rounded-xl"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-base-100 font-bold text-5xl">Kontakt</h1>
                    </div>
                </div>
            </div>
            <div class="divider divider-secondary"></div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="p-6 prose xl:prose-lg mx-auto bg-base-200 rounded-lg w-full">
                    <h2 class="text-2xl font-semibold" data-aos="zoom-in">Kontaktinformationen</h2>
                    <p><span class="font-semibold">Adresse: </span>Schustergasse 14, 94032 Passau</p>
                    <p><span class="font-semibold">Telefon: </span>+49 851 31614</p>
                    <p><span class="font-semibold">E-Mail: </span>senior@oenodanubia.de</p>
                </div>
                <div class="p-6 prose xl:prose-lg mx-auto bg-base-200 rounded-lg w-full">
                    <h2 class="text-2xl font-semibold" data-aos="zoom-in">Hier findest du uns</h2>
                    <iframe class="w-full" src="https://www.openstreetmap.org/export/embed.html?bbox=13.46778988838196%2C48.5729353554045%2C13.471330404281616%2C48.57451838695456&amp;layer=transportmap&amp;marker=48.57372687737515%2C13.469560146331787" style="border: 1px solid black"></iframe>
                    <br/>
                        <nuxt-link to="https://www.openstreetmap.org/?mlat=48.573727&amp;mlon=13.469560#map=19/48.573727/13.469560&amp;layers=T" class="btn btn-primary" target="_blank">
                            Größere Karte anzeigen
                        </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const image = '/carousel/Bier_Fluss_2.jpeg';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;
})
</script>

<style scoped>
</style>