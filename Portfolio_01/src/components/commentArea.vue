<script setup>
    import modal from "./modal.vue";
    import { ref } from "vue";

    const titre = "Dynamiser un Espace Commentaire";
    const sousTitre1 = "Objectifs du projet : ";
    const objectifs = " Permettre l'ajout d'un commentaire dans la liste de commentaire et afficher un message d'erreur lorsque les champs ne sont pas correctement remplis.";
    const sousTitre2 = "Date de création : ";
    const date = "25 décembre 2023";
    const sousTitre3 = "Technologies utilisées : ";
    const technologies = " JavaScript - HTML 5 - Github pour le versioning."
    const sousTitre4 = "Voir le projet : "
    const voirProjet = "Dynamiser un espace commentaire."

    const isModalOpen = ref(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };
</script>

<template>
    <section>
        <h2>Dynamiser un Espace Commentaire</h2>
        <figure><img src="../assets/Images/Screen_Devoir_Dynamiser_Espace_Commentaire.png" alt="Espace commentaire d'une page web." @click="openModal"></figure>
        <modal :titre :sousTitre1 :objectifs :sousTitre2 :date :sousTitre3 :technologies :sousTitre4 :voirProjet v-if="isModalOpen">   
            <slot><button @click="closeModal">X</button></slot>
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
        padding: 80px 0 80px 0;
        border-bottom: solid 1px black;
    }

    h2 {
        width: 710px;
        height: 65px;
        font-family: "Besley", serif;
        font-weight: 600;
        font-size: 2.36em;
        margin: 0;
        padding-bottom: 80px;
    }
    
    figure {
        width: 449px;
        height: 605px;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>