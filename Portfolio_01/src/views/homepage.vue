<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import headerMain from '@/components/headerMain.vue';
    import footerComponent from '@/components/footerComponent.vue';
    import mainComponent from '@/components/mainComponent.vue';
</script>

<template>
    <headerMain></headerMain>
    <mainComponent></mainComponent>
    <footerComponent></footerComponent>
</template>

<style scoped>

</style>