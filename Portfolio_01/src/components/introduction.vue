<script setup>

</script>

<template>
    <section id="about">
        <p>Bonjour, je m'appelle Jean-Claude, je suis un aspirant développeur web de 22 ans actuellement en formation en ligne.</p>
        <img src="../assets/Images/Image_vectorielle_Porfolio_01_2.png" alt="Dessin vectoriel d'un développeur web montrant ces compétences.">
    </section>
</template>

<style scoped>
    @media screen and (min-width: 1200px) {
        section {
            width: 1680px;
            display: flex;
            justify-content: space-between;
            padding: 230px 0 230px 0;
            border-bottom: solid 1px black;
        }

        p {
            width: 700px;
            height: 425px;
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 3.2em;
            text-align: center;
            margin: 0;
        }

        img {
            width: 318px;
            height: 450px;
        }
    }
</style>