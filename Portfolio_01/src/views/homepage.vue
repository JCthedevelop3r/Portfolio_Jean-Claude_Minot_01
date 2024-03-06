<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import headerComponent from '@/components/headerComponent.vue';
    import footerComponent from '@/components/footerComponent.vue';
    import mainComponent from '@/components/mainComponent.vue';
</script>

<template>
    <headerComponent></headerComponent>
    <mainComponent></mainComponent>
    <footerComponent></footerComponent>
</template>

<style scoped>

</style>