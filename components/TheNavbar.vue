<template>
    <div class="navbar bg-base-300 text-base-content p-4">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 text-base-content rounded-box w-52 font-semibold">
                    <li><nuxt-link to="/about">Über uns</nuxt-link></li>
                    <li><nuxt-link to="/chargia">Chargia</nuxt-link></li>
                    <li><nuxt-link to="/sepro">Semesterprogramm</nuxt-link></li>
                </ul>
            </div>
            <nuxt-link to="/" class="btn btn-ghost h-16">
                <img src="/public/OeD_Wappen.png" alt="Wappen Oeno Danubia" class="h-16">
            </nuxt-link>
        </div>
        <div class="navbar-center hidden lg:flex font-semibold">
            <ul class="menu menu-horizontal px-2">
                <li><nuxt-link to="/about">Über uns</nuxt-link></li>
                <li><nuxt-link to="/chargia">Chargia</nuxt-link></li>
                <li><nuxt-link to="/sepro">Semesterprogramm</nuxt-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <nuxt-link to="/contact" class="btn btn-primary">Kontakt</nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>