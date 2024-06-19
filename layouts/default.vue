<template>
    <div class="flex flex-col min-h-screen items-center justify-center">
            <TheNavbar class="mb-auto"/>
            <div class="flex-grow w-full">
                <slot />
            </div>
            <TheFooter class="mt-auto"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>