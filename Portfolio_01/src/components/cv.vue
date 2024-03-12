<script setup>
    import modal from "./modal.vue";
    import { ref } from "vue";

    const titre = "Créer un CV d'après une maquette";
    const sousTitre1 = "Objectifs du projet : ";
    const objectifs = " Créer mon CV en suivant une maquette et en intégrant des effets graphiques, des liens, etc.";
    const sousTitre2 = "Date de création : ";
    const date = "16 novembre 2023";
    const sousTitre3 = "Technologies utilisées : ";
    const technologies = " HTML 5 - CSS 3 - Github pour le versioning.";
    const sousTitre4 = "Voir le projet : ";
    const voirProjet = "Créer un CV d'après une maquette.";
    const dateTime = "2023-11-16";
    const lienProjet = "https://github.com/JCthedevelop3r/Devoir_CV"

    const isModalOpen = ref(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };
</script>

<template>
    <section id="cv">
        <h2>Créer un CV d'après une maquette</h2>
        <img src="../assets/Images/Screen_Devoir_CV.png" alt="Curriculum vitae d'un développeur web junior." @click="openModal">
        <modal :titre :sousTitre1 :objectifs :sousTitre2 :date :sousTitre3 :technologies :sousTitre4 :voirProjet :dateTime :lienProjet v-if="isModalOpen">  
            <template v-slot:overlay><div class="overlay" @click="closeModal"></div></template>
            <template v-slot:button><button @click="closeModal">X</button></template>
        </modal>
    </section>
</template>

<style scoped>
    section {
        width: 710px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 48px 0 48px 0;
        border-bottom: solid 1px black;
    }

    h2 {
        width: 684px;
        height: 65px;
        font-family: 'Besley', serif;
        font-weight: 600;
        font-size: 2.36em;
        margin: 0;
        padding-bottom: 48px;
    }

    img {
        width: 415px;
        height: 561px;
    }

    img:hover {
        box-shadow: 5px 5px;
        cursor: pointer;
    }

    .overlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #333333d3;
    }
</style>