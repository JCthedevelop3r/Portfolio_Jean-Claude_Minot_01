<script setup>
    import introduction from "./introduction.vue";
    import cv from "./cv.vue";
    import commentArea from "./commentArea.vue";
    import figma from "./figma.vue";
</script>

<template>
    <main>
        <introduction></introduction>
        <cv></cv>
        <commentArea></commentArea> 
        <figma></figma>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>