<script setup>
    import headerComponent from "@/components/headerComponent.vue";
    import footerComponent from "@/components/footerComponent.vue";
</script>

<template>
    <headerComponent></headerComponent>
    <h2>Page non trouvée</h2>
    <p>Erreur 404.</p>
    <figure><img src="../assets/Images/Oops!.png" alt="Dessin vectoriel d'un bonhomme confus qui dit ''oups!''."></figure>
    <footerComponent></footerComponent>
</template>

<style scoped>
    h2 {
        font-family: "Besley", serif;
        font-weight: 600;
        font-size: 2.36em;
        padding-top: 167px;
    }

    p {
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.4em;
    }

    figure{
        width: 400px;
        height: 400px;
        position: relative;
        left: 598px;
        padding-bottom: 65px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
</style>