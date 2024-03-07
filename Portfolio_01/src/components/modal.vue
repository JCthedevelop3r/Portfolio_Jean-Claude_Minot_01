<script setup>

</script>

<template>
    <div class="modal-container" >
        <div class="overlay" @click="closeModal">
            <div class="modal">
                <button @click="closeModal">X</button>
                <h2>Créer un CV d'après une maquette</h2>
                <ul>
                    <li><h3>Objectif du projet :</h3> Créer mon CV en suivant une maquette et en intégrant des effets graphiques, des liens, etc.</li>
                    <li><h3>Date de création :</h3> <time datetime="2023-11-16">16 novembre 2023</time>.</li>
                    <li><h3>Technologies utilisées :</h3> HTML 5 - CSS 3 - Github pour le versioning.</li>
                    <li><h3>Voir le projet :</h3> <a href="https://github.com/JCthedevelop3r/Devoir_CV" target="_blank">Créer un CV d'après une maquette</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    } 

    .overlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #333333d3;
    }

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 544px;
        height: 250px;
        position: absolute;
        top: 25%;
       left: 39%;
        background: #FFBD80;
        border-style: double;
        color: black;
        padding: 20px;
    }

    button {
        width: 35px;
        position: absolute;
        left: 550px;
        top: -1px;
        background-color: #FFBD80;
        border: solid 1px black;
    }

    h2 {
        font-family: 'Besley', 'serif';
        font-weight: 600;
        margin: 0;
    }

    ul {
        line-height: 2;
        font-family: 'Assistant', 'sans-serif';
        font-weight: 400;
        list-style-type: none;
        margin-top: 20px;
    }

    h3 {
        display: inline-block;
        font-weight: 600;
        font-size: 1em;
        margin: 0;
    }
</style>