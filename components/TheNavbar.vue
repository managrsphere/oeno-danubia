<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><nuxt-link to="/about">Über uns</nuxt-link></li>
                    <li><nuxt-link to="/chargia">Chargia</nuxt-link></li>
                    <li><a>Semesterprogramm</a></li>
                </ul>
            </div>
            <nuxt-link to="/" class="btn btn-ghost text-xl">Oeno Danubia</nuxt-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><nuxt-link to="/about">Über uns</nuxt-link></li>
                <li><nuxt-link to="/chargia">Chargia</nuxt-link></li>
                <li><a>Semesterprogramm</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn">Kontakt</a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>