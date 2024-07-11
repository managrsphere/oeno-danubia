<template>
    <div class="min-h-screen flex flex-col text-base-content">
        <section class="flex-1 flex justify-center items-center bg-base-100 min-h-screen">
            <div class="container mx-auto text-center">
                <div class="tooltip" data-tip="Dem guten Rat mögen gute Taten folgen!">
                    <h1
                        class="text-8xl font-bold font-tangerine bg-gradient-to-r from-secondary via-accent to-primary inline-block text-transparent bg-clip-text">
                        Bono consilio - opera bona!</h1>
                </div>
                <h2 class="text-2xl font-semibold">Besuche uns gerne an unserem Stammtisch</h2>
                <h2 class="text-2xl font-semibold">Jeden Mittwoch ab 21 Uhr in der Schustergasse 14, Passau</h2>
            </div>
        </section>
        <section class="flex-1 bg-base-300 min-h-screen">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="prose text-left">
                    <p class="uppercase">Benefits</p>
                    <h1 class="text-3xl font-semibold">Was dich als Mitglied erwartet</h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="card p-4 bg-base-200 rounded-lg shadow-lg">
                        <h2 class="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 19.5c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 16.5c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472M6 9.736a3 3 0 0 1 4-4.472m2 8.236a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
                            </svg>
                            Soziales Netzwerk
                        </h2>
                        <p>Verbindung mit Gleichgesinnten</p>
                    </div>
                    <div class="card p-4 bg-base-200 rounded-lg shadow-lg">
                        <h2 class="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 19.5c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 16.5c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472M6 9.736a3 3 0 0 1 4-4.472m2 8.236a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
                            </svg>
                            Persönliche Entwicklung
                        </h2>
                        <p>Teilnahme an Kursen und Unterstützung durch Kommilitonen</p>
                    </div>
                    <div class="card p-4 bg-base-200 rounded-lg shadow-lg">
                        <h2 class="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 19.5c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 16.5c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472M6 9.736a3 3 0 0 1 4-4.472m2 8.236a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
                            </svg>
                            Veranstaltungen
                        </h2>
                        <p>Regelmäßige Events das ganze Jahr über</p>
                    </div>
                    <div class="card p-4 bg-base-200 rounded-lg shadow-lg">
                        <h2 class="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17 19.5c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 16.5c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472M6 9.736a3 3 0 0 1 4-4.472m2 8.236a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
                            </svg>
                            Möglichkeiten
                        </h2>
                        <p>Wir bieten dir die Möglichkeit, dich in einer demokratischen Verbindung einzubringen</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex-1 bg-base-100 min-h-screen">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="text-center">
                    <p class="uppercase">Galerie</p>
                    <h1 class="text-2xl font-bold">Hier siehst du einige Eindrücke unserer Verbindung</h1>
<!--
                    <div class="carousel w-3/4">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                                class="w-full" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                                class="w-full" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                                class="w-full" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" class="carousel-item relative w-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                                class="w-full" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <section class="flex-1 bg-base-200 min-h-screen">
            <div class="container mx-auto flex justify-center items-center h-full">
                <div class="text-center">
                    <h1 class="text-3xl font-semibold">FAQ</h1>
                </div>
            </div>
        </section>
    </div>
    <div class="divider"></div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>