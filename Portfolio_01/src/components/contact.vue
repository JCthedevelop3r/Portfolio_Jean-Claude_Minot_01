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
    @media screen and (min-width: 1200px) {
        .section-parent {
            width: 1680px;
            height: 613px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 112px;
            padding-top: 48px;
            border-bottom: solid 1px black;
        }
        h2 {
            width: 153px;
            height: 65px;
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 2.36em;
            margin: 0;
            padding-bottom: 80px;
        }

        .sections-enfant-1 {
            display: flex;  
            flex-direction: row;
            padding-bottom: 40px;
        }

        .sections-enfant-2 {
            display: flex;  
            flex-direction: row;
            padding-bottom: 40px;
            position: relative;
            left: -66px;
        }

        h3 {
            font-family: "Besley", serif;
            font-size: 1.5em;
        }

        .e-mail {
            position: relative;
            top: 5px;
        }

        .tel {
            height: 32px;
            position: relative;
            top: 7px;
            padding-bottom: 9px;

        }
        p {
            font-family: "Assistant", sans-serif;
            font-size: 1.5em;
            margin: 0;
            align-self: end;
            padding-left: 20px;
        }
    }

    @media screen and (max-width: 480px) {
        .section-parent {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            border-bottom: solid 1px black;
        }

        h2 {
            margin: 0;
            font-family: 'Besley', serif;
            font-weight: 600;
            font-size: 0.85em;
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
            font-size: 0.85;
            color: black;
        }
    }
</style>