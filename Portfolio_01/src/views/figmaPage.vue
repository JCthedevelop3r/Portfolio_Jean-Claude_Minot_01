<script setup>
    import headerComponent from "@/components/headerComponent.vue";
    import footerMain from "@/components/footerMain.vue";
</script>

<template>
    <headerComponent></headerComponent>
    <h2>Maquetter un site avec Figma</h2>
    <section>
        <h3>Wireframes desktop</h3>
        <h4>Page d'accueil</h4>
        <figure class="wireframes-desktop-figure-1"><img src="../assets/Images/Page_daccueil_Probeats_Desktop.png" alt="Wireframe desktop de la page d'accueil du site fictif Probeats." class="wireframes-desktop-img"></figure>
        <h4>Page Produit</h4>
        <figure class="wireframes-desktop-figure-2"><img src="../assets/Images/Page_produit_Probeats_Desktop.png" alt="Wireframe desktop de la page produit du site fictif Probeats." class="wireframes-desktop-img"></figure>
        <h4>Page Commande</h4>
        <figure class="wireframes-desktop-figure-3"><img src="../assets/Images/Page_commande_Probeats_Desktop.png" alt="Wireframe desktop de la page commande du site fictif Probeats." class="wireframes-desktop-img"></figure>
        <h4>Page à propos</h4>
        <figure class="wireframes-desktop-figure-4"><img src="../assets/Images/Page_à_propos_Probeats_Desktop.png" alt="Wireframe desktop de la page à propos du site fictif Probeats." class="wireframes-desktop-img"></figure>
        <h4>Page assistance</h4>
        <div class="border"><figure class="wireframes-desktop-figure-5"><img src="../assets/Images/Page_assistance_Probeats_Desktop.png" alt="Wireframe desktop de la page assistance du site fictif Probeats." class="wireframes-desktop-img"></figure></div>
    </section>
    <section>
        <h3 class="h3-wm">Wireframes mobile</h3>
        <h4>Page d'accueil</h4>
        <figure class="wireframes-mobile-figure-1"><img src="../assets/Images/Page_daccueil_Probeats_Mobile.png" alt="Wireframe mobile de la page d'accueil du site fictif Probeats." class="wireframes-mobile-img"></figure>
        <h4>Page Produit</h4>
        <figure class="wireframes-mobile-figure-2"><img src="../assets/Images/Page_produit_Probeats_Mobile.png" alt="Wireframe mobile de la page produit du site fictif Probeats." class="wireframes-mobile-img"></figure>
        <h4>Page Commande</h4>
        <figure class="wireframes-mobile-figure-3"><img src="../assets/Images/Page_commande_Probeats_Mobile.png" alt="Wireframe mobile de la page commande du site fictif Probeats." class="wireframes-mobile-img"></figure>
        <h4>Page à propos</h4>
        <figure class="wireframes-mobile-figure-4"><img src="../assets/Images/Page_à_propos_Probeats_Mobile.png" alt="Wireframe mobile de la page à propos du site fictif Probeats." class="wireframes-mobile-img"></figure>
        <h4>Page assistance</h4>
        <figure class="wireframes-mobile-figure-5"><img src="../assets/Images/Page_assistance_Probeats_Mobile.png" alt="Wireframe mobile de la page assistance du site fictif Probeats." class="wireframes-mobile-img"></figure>
        <h4>Page "menu burger"</h4>
        <div class="border"><figure class="wireframes-mobile-figure-6"><img src="../assets/Images/Page_menu_burger_Probeats_Mobile.png" alt="Wireframe mobile de la page ''menu burger'' du site fictif Probeats." class="wireframes-mobile-img"></figure></div>
    </section>
    <section>
        <h3 class="h3-pd">Prototype desktop</h3>
        <div class="border"><figure class="prototype-desktop-figure"><img src="../assets/Images/Screen_Prototype_Probeats.png" alt="Prototype desktop de la page d'accueil du site fictif Probeats." class="prototype-desktop"></figure></div>
    </section>
    <section>
        <h3 class="h3-pm">Prototype mobile</h3>
        <figure class="prototype-mobile-figure"><img src="../assets/Images/Prototype_Page_daccueil_Probeats_Mobile.png" alt="Prototype mobile de la page d'accueil du site fictif Probeats." class="prototype-mobile"></figure>
    </section>
    <footerMain></footerMain>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10% 0 10%;
        }

        h2 {
            font-family: "Besley", serif;
            font-weight: bolder;
            font-size: 1.8em;
            text-align: center;
            margin: 0;
            padding-top: 15%;
            padding-bottom: 5%;
        }
        h3 {
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 1.5em;
            margin: 0;
            padding-bottom: 2%;
        }

        .h3-wm {
            padding-top: 6%;    
        }

        .h3-pd {
            padding-top: 55px;
        }

        .h3-pm {
            padding-top: 40px;
        }

        h4 {
            font-family: "Assistant", serif;
            font-size: 1.4em;
            font-weight: 400;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-desktop-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-desktop-figure-1 {
            width: 35%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-desktop-figure-2 {
            width: 35%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-desktop-figure-3 {
            width: 35%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-desktop-figure-4 {
            width: 35%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-desktop-figure-5 {
            width: 35%;
            padding-bottom: 8%;
            margin: 0;
        }

        .wireframes-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-mobile-figure-1 {
            width: 20%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-mobile-figure-2 {
            width: 20%;
            padding-bottom: 2%;
            margin: 0;
        }
    
        .wireframes-mobile-figure-3 {
            width: 20%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-mobile-figure-4 {
            width: 20%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-mobile-figure-5 {
            width: 20%;
            padding-bottom: 2%;
            margin: 0;
        }

        .wireframes-mobile-figure-6 {
            width: 20%;
            padding-bottom: 8%;
            margin: 0;
        }

        .prototype-desktop {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-desktop-figure {
            width: 35%;
            margin: 0;
            padding-bottom: 8%;
        }

        .prototype-mobile {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-mobile-figure {
            width: 20%;
            margin: 0;
        }

        .border {
            width: 100%;
            display: flex;
            justify-content: center;
            border-bottom: solid 1px black;
        }
    }
    @media screen and (max-width: 1023px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10% 0 10%;
        }

        h2 {
            font-family: "Besley", serif;
            font-weight: bolder;
            font-size: 1.5em;
            text-align: center;
            margin: 0 10% 0 10%;
            padding-bottom: 7%;
        }

        h3 {
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 1.2em;
            margin: 0;
            padding-bottom: 5%;
        }

        h4 {
            font-family: "Assistant", serif;
            font-size: 1.2em;
            font-weight: 400;
            padding-bottom: 5%;
            margin: 0;
        }

        .wireframes-desktop-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-desktop-figure-1 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-2 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-3 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-4 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-5 {
            width: 100%;
            padding-bottom: 12%;
            margin: 0;
        }

        .wireframes-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-mobile-figure-1 {
            width: 50%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-2 {
            width: 50%;
            padding-bottom: 10%;
            margin: 0;
        }
    
        .wireframes-mobile-figure-3 {
            width: 50%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-4 {
            width: 50%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-5 {
            width: 50%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-6 {
            width: 50%;
            padding-bottom: 12%;
            margin: 0;
        }

        .prototype-desktop {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-desktop-figure {
            width: 100%;
            margin: 0;
            padding-bottom: 12%;
        }

        .prototype-mobile {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-mobile-figure {
            width: 50%;
            margin: 0;
        }

        .h3-wm {
            padding-top: 9%;
        }

        .h3-pd {
            padding-top: 9%;
        }

        .h3-pm {
            padding-top: 9%;
        }

        .border {
            width: 100%;
            display: flex;
            justify-content: center;
            border-bottom: solid 1px black;
        }

    }
    @media screen and (max-width: 767px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10% 0 10%;
        }

        h2 {
            font-family: "Besley", serif;
            font-weight: bolder;
            font-size: 1.2em;
            text-align: center;
            margin: 0 10% 0 10%;
            padding-bottom: 6%;
        }

        h3 {
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 1em;
            margin: 0;
            
            padding-bottom: 5%;
        }

        h4 {
            font-family: "Assistant", serif;
            font-size: 1em;
            font-weight: 400;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-desktop-figure-1 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-2 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-3 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-4 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-desktop-figure-5 {
            width: 100%;
            padding-bottom: 12%;
            margin: 0;
        }

        .wireframes-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-mobile-figure-1 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-2 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }
    
        .wireframes-mobile-figure-3 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-4 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-5 {
            width: 100%;
            padding-bottom: 10%;
            margin: 0;
        }

        .wireframes-mobile-figure-6 {
            width: 100%;
            padding-bottom: 12%;
            margin: 0;
        }

        .prototype-desktop {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-desktop-figure {
            width: 100%;
            margin: 0;
            padding-bottom: 12%;
        }

        .prototype-mobile {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-mobile-figure {
            width: 100%;
            margin: 0;
        }

        .border {
            width: 100%;
            display: flex;
            justify-content: center;
            border-bottom: solid 1px black;
        }
    }
</style>