<script setup>
    import modal from "./modal.vue";
    import { ref } from "vue";

    const titre = "Maquetter un site avec Figma";
    const sousTitre1 = "Objectifs du projet : ";
    const objectifs = " Créer les wireframes des différentes pages d'un site fictif et créer le prototype de sa page d'accueil.";
    const sousTitre2 = "Date de création : ";
    const date = "29 février 2024";
    const sousTitre3 = "Technologies utilisées : ";
    const technologies = " Figma."
    const sousTitre4 = "Voir le projet : "
    const voirProjet = "Maquetter un site avec Figma."
    const dateTime = "2024-02-29";
    const lienProjet = "/figmapage";

    const isModalOpen = ref(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };
</script>

<template>
    <section id="figma">
        <h2>Maquetter un site avec Figma</h2>
        <figure><img src="../assets/Images/Screen_Prototype_Probeats.png" alt="Maquette d'un site web fictif." @click="openModal"></figure>
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