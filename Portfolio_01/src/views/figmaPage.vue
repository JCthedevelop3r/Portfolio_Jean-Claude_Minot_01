<script setup>
    import headerComponent from "@/components/headerComponent.vue";
    import footerComponent from "@/components/footerComponent.vue";
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
    <footerComponent></footerComponent>
</template>

<style scoped>
    @media screen and (min-width: 1200px) {
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {
            font-family: "Besley", serif;
            font-weight: bolder;
            font-size: 3em;
            text-align: center;
            margin: 0;
            padding-bottom: 100px;
        }
        h3 {
            font-family: "Besley", serif;
            font-weight: 600;
            font-size: 2.36em;
            margin: 0;
            padding-bottom: 40px;
        }

        .h3-wm {
            padding-top: 55px;    
        }

        .h3-pd {
            padding-top: 55px;
        }

        .h3-pm {
            padding-top: 40px;
        }

        h4 {
            font-family: "Assistant", serif;
            font-size: 1.5em;
            font-weight: 400;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-desktop-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-desktop-figure-1 {
            width: 450px;
            height: 616px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-desktop-figure-2 {
            width: 450px;
            height: 657px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-desktop-figure-3 {
            width: 450px;
            height: 426px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-desktop-figure-4 {
            width: 450px;
            height: 509px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-desktop-figure-5 {
            width: 450px;
            height: 729px;
            padding-bottom: 80px;
            margin: 0;
        }

        .wireframes-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wireframes-mobile-figure-1 {
            width: 225px;
            height: 1688px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-mobile-figure-2 {
            width: 225px;
            height: 1190px;
        padding-bottom: 20px;
            margin: 0;
        }
    
        .wireframes-mobile-figure-3 {
            width: 225px;
            height: 936px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-mobile-figure-4 {
            width: 225px;
            height: 932px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-mobile-figure-5 {
            width: 225px;
            height: 1405px;
            padding-bottom: 20px;
            margin: 0;
        }

        .wireframes-mobile-figure-6 {
            width: 225px;
            height: 489px;
            padding-bottom: 80px;
            margin: 0;
        }

        .prototype-desktop {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-desktop-figure {
            width: 450px;
            height: 593px;
            margin: 0;
            padding-bottom: 80px;
        }

        .prototype-mobile {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .prototype-mobile-figure {
            width: 225px;
            height: 1590px;
            margin: 0;
        }

        .border {
            width: 450px;
            display: flex;
            justify-content: center;
            border-bottom: solid 1px black;
        }
    }
</style>