<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import headerMain from '@/components/headerMain.vue';
    import footerMain from '@/components/footerMain.vue';
    import mainComponent from '@/components/mainComponent.vue';
</script>

<template>
    <headerMain></headerMain>
    <mainComponent></mainComponent>
    <footerMain></footerMain>
</template>

<style scoped>

</style>