<script setup>

</script>

<template>
    <section id="about">
        <p>Bonjour, je m'appelle Jean-Claude, je suis un aspirant développeur web de 22 ans actuellement en formation en ligne.</p>
        <img src="../assets/Images/Image_vectorielle_Porfolio_01_2.png" alt="Dessin vectoriel d'un développeur web montrant ces compétences.">
    </section>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        section {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20% 0 10% 0;
            border-bottom: solid 1px black;
        }

        p {
            width: 60%;
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 1.5em;
            text-align: center;
            margin: 0;
        }

        img {
            width: 25%;
            height: 25%;
        }
    }

    @media screen and (max-width: 1023px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 14%;
            border-bottom: solid 1px black;
        }

        p {
            width: 94%;
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 2em;
            text-align: center;
            margin: 0;
            padding-top: 14%;
            padding-bottom: 14%;
        }
    }

    @media screen and (max-width: 767px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 14%;
            border-bottom: solid 1px black;
        }

        p {
            width: 87%;
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 1em;
            text-align: center;
            margin: 0;
            padding-top: 14%;
            padding-bottom: 14%;
        } 

        img {
            width: 50%;
        }
    } 
</style>