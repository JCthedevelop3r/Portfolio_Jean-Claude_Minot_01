<script setup>
    import modal from "./modal.vue";
    import { ref } from "vue";

    const titre = "Dynamiser un Espace Commentaire";
    const sousTitre1 = "Objectifs du projet : ";
    const objectifs = " Permettre l'ajout d'un commentaire dans la liste de commentaire et afficher un message d'erreur lorsque les champs ne sont pas correctement remplis.";
    const sousTitre2 = "Date de création : ";
    const date = "25 décembre 2023";
    const sousTitre3 = "Technologies utilisées : ";
    const technologies = " JavaScript - HTML 5 - Github pour le versioning.";
    const sousTitre4 = "Voir le projet : ";
    const voirProjet = "Dynamiser un espace commentaire.";
    const dateTime = "2023-12-25";
    const lienProjet = "https://github.com/JCthedevelop3r/Devoir_Dynamiser_un_Espace_Commentaire";

    const isModalOpen = ref(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };
</script>

<template>
    <section id="esp-com">
        <h2>Dynamiser un Espace Commentaire</h2>
        <figure><img src="../assets/Images/Screen_Devoir_Dynamiser_Espace_Commentaire.png" alt="Espace commentaire d'une page web." @click="openModal"></figure>
        <modal :titre :sousTitre1 :objectifs :sousTitre2 :date :sousTitre3 :technologies :sousTitre4 :voirProjet :dateTime :lienProjet v-if="isModalOpen">   
            <template v-slot:overlay><div class="overlay" @click="closeModal"></div></template>
            <template v-slot:button><button @click="closeModal">X</button></template>
        </modal>
    </section>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        section {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 6% 0 6% 0;
            border-bottom: solid 1px black;
        }

        h2 {
            font-family: 'Besley', serif;
            font-weight: 600;
            font-size: 1.8em;
            margin: 0;
            padding-bottom: 5%;
        }

        figure {
            width: 327.69px;
            height: 443.11px;
            margin: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
    }
        

    @media screen and (max-width: 1023px) {
        section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10%;
            padding-bottom: 10%;
            border-bottom: solid 1px black;
        }

        h2 {
            margin: 0;
            font-family: 'Besley', serif;
            font-weight: 600;
            font-size: 1.5em;
            padding-top: 0;
            padding-bottom: 5%;
        }

        figure {
            width: 614.41px;
            height: 830.81px;
            margin: 0;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }

        .overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background: #333333d3;
        }
    }

    @media screen and (max-width: 767px) {
        section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 12%;
            padding-bottom: 12%;
            border-bottom: solid 1px black;
        }

        h2 {
            margin: 0;
            font-family: 'Besley', serif;
            font-weight: 600;
            font-size: 0.85em;
            padding-top: 0;
            padding-bottom: 10%;
        }

        figure {
            width: 256px;
            height: 346.156px;
            margin: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }

        .overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background: #333333d3;
        }
    }
</style>