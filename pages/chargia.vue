<template>
    <div class="flex justify-center min-h-screen">
        <div class="flex flex-col p-8 max-w-4xl mx-auto">
            <div class="hero min-h-64 md:max-h-96 rounded-xl" id="hero-section">
                <div class="hero-overlay bg-opacity-70 rounded-xl"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md mx-auto">
                        <h1 class="text-base-100 font-bold text-5xl">Chargia</h1>
                    </div>
                </div>
            </div>
            <div class="divider divider-secondary"></div>
            <div class="prose xl:prose-lg mb-3">
                <h2>Unsere Chargia</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Senior</h2>
                        <p>Maurus Kruis, stud. iur.</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Consenior</h2>
                        <p>Nikolaus Montag, stud. iur.</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Fuxmajor</h2>
                        <p>Christof Grobbel, stud. rer. oec.</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Scriptor</h2>
                        <p></p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Quaestor</h2>
                        <p>Oskar Stejfa, stud. iur.</p>
                    </div>
                </div>
            </div>
            <div class="prose xl:prose-lg mt-6 mb-3">
                <h2>Unsere Philisterchargen</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Philistersenior</h2>
                        <p>Stefan Grobbel</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Philisterconsenior</h2>
                        <p>H.H. Carl-Christian Snethlage</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Philisterscriptor</h2>
                        <p>Martin Reicheneder</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-200 shadow-xl">
                    <figure>
                        <img src="/UserDummy.png" alt="">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Philisterquaestor</h2>
                        <p>Markus Weigel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const image = '/carousel/Singen_Abend.png';
    const heroSection = document.getElementById('hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url(${image})`;
})
</script>

<style scoped></style>