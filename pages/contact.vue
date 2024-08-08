<template>
    <div class="container mx-auto p-8 space-y-12">
        <!--
        <div class="max-w-lg mx-auto bg-base-100 shadow-xl rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Kontaktformular</h2>
            <form>
                <div class="form-control mb-4">
                    <label for="first-name" class="label">
                        <span class="label-text">Vorname</span>
                    </label>
                    <input type="text" class="input input-bordered w-full" required>
                </div>
                <div class="form-control mb-4">
                    <label for="last-name" class="label">
                        <span class="label-text">Nachname</span>
                    </label>
                    <input type="text" class="input input-bordered w-full" required>
                </div>
                <div class="form-control mb-4">
                    <label for="email" class="label">
                        <span class="label-text">E-Mail</span>
                    </label>
                    <input type="email" class="input input-bordered w-full" required>
                </div>
                <div class="form-control mb-4">
                    <label for="phone" class="label">
                        <span class="label-text">Telefon</span>
                    </label>
                    <input type="tel" class="input input-bordered w-full" required>
                </div>
                <div class="form-control mb-4">
                    <label for="message" class="label">
                        <span class="label-text">Nachricht</span>
                    </label>
                    <textarea rows="4" class="textarea textarea-bordered w-full" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-full">Absenden</button>
            </form>
        </div>
    -->

        <!-- Contact Information -->
        <div class="flex flex-wrap mx-4 space-y-8 lg:space-y-0">
            <div class="w-full lg:w-1/2 px-4">
                <div class="bg-base-100 shadow-xl rounded-lg p-6 h-full">
                    <h2 class="text-2xl font-bold mb-4">Kontaktinformationen</h2>
                    <p class="mb-2"><span class="font-bold">Adresse:</span> Schustergasse 14, 94032 Passau</p>
                    <p class="mb-2"><span class="font-bold">Telefon:</span> +49 851 31614</p>
                    <p class="mb-2"><span class="font-bold">E-Mail:</span> senior@oenodanubia.de</p>
                    <h3 class="text-xl font-bold mt-2">Für Einblicke</h3>
                    <p class="mb-2"><nuxt-link to="https://www.instagram.com/oenodanubia" target="_blank"
                            class="btn btn-outline btn-sm">Folge uns auf Instagram</nuxt-link></p>
                    <p class="mb-2"><nuxt-link to="https://www.facebook.com/oenodanubia" target="_blank"
                            class="btn btn-outline btn-sm">Besuche uns auf Facebook</nuxt-link></p>
                </div>
            </div>

            <!-- Google Map -->
            <div class="w-full lg:w-1/2 px-4">
                <div class="bg-base-100 shadow-xl rounded-lg p-6 h-full">
                    <h2 class="text-2xl font-bold mb-4">Unsere Lage</h2>
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe width="425" height="350"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=13.467999100685121%2C48.57287678938518%2C13.47153961658478%2C48.574459822768915&amp;layer=mapnik"
                            style="border: 1px solid black"></iframe><br /><small><nuxt-link to="https://www.openstreetmap.org/#map=19/48.57367/13.46977" target="_blank" class="btn btn-primary"
                                >Größere Karte
                                anzeigen</nuxt-link></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>