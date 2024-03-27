<script setup>

</script>

<template>
    <section class="section-parent"  id="contact">
        <h2>Contact</h2>
        <section class="section-enfant-1">
            <h3>E-mail :</h3>
                <a href="mailto:tresor300.contact@gmail.com" class="e-mail"><p>tresor300.contact@gmail.com</p></a>
        </section>
        <section class="section-enfant-2">
            <h3>Numéro de téléphone :</h3>
            <a href="tel: 0610435274" class="tel"><p>06.10.43.52.74</p></a>
        </section>
    </section>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        .section-parent {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 6%;
            padding-bottom: 8%;
            border-bottom: solid 1px black;
        }

        h2 {
            margin: 0;
            font-family: 'Besley', serif;
            font-weight: 600;
            font-size: calc(1.2em + 1vw);
            padding-top: 0;
            padding-bottom: 5%;
        }

        .section-enfant-1 {
            display: flex;  
            flex-direction: row;
            padding-bottom: 2.5%;
        }

        .section-enfant-2 {
            display: flex;  
            flex-direction: row;
        }

        h3 {
            height: 10%;
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-size: calc(1em + 0.8vw);
            font-weight: 600;
            padding: 0;
        }

        .e-mail {
            text-decoration: none;
        }

        .tel {
            text-decoration: none;
        }

        p {
            margin: 0;
            padding-left: 2%;
            font-family: "Assistant", sans-serif;
            font-size: calc(1em + 0.8vw);
            color: black;
        }
    }

    @media screen and (max-width: 1023px) {
        .section-parent {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 6%;
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

        .section-enfant-1 {
            display: flex;  
            flex-direction: row;
            padding-bottom: 2.5%;
        }

        .section-enfant-2 {
            display: flex;  
            flex-direction: row;
        }

        h3 {
            height: 10%;
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-size: 1.4em;
            font-weight: 600;
            padding: 0;
        }

        .e-mail {
            text-decoration: none;
        }

        .tel {
            text-decoration: none;
        }

        p {
            margin: 0;
            padding-left: 2%;
            font-family: "Assistant", sans-serif;
            font-size: 1.4em;
            color: black;
        }
    }

    @media screen and (max-width: 767px) {
        .section-parent {
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
            padding-bottom: 20px;
        }

        .section-enfant-1 {
            display: flex;  
            flex-direction: row;
            padding-bottom: 10px;
        }

        .section-enfant-2 {
            display: flex;  
            flex-direction: row;
        }

        h3 {
            height: 20px;
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-size: 0.98em;
            font-weight: 600;
            padding: 0;
        }

        .e-mail {
            height: 20px;
            text-decoration: none;
        }

        .tel {
            height: 20px;
            text-decoration: none;
        }

        p {
            margin: 0;
            padding-left: 2%;
            font-family: "Assistant", sans-serif;
            font-size: 0.85em;
            color: black;
        }
    }
</style>