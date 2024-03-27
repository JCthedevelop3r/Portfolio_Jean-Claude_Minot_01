<template>
    <footer>
        <section>
            <a href="https://github.com/" target="_blank"><img src="../assets/Images/Logo_de_Github.png" alt="Logo de Github"></a>
            <a href="https://twitter.com/JCthedevelop3r" target="_blank"><img src="../assets/Images/Logo_de_X.png" alt="Logo de X, ex-Twitter"></a>
            <a href="https://www.linkedin.com/in/jean-claude-minot-a894b6210/" target="_blank"><img src="../assets/Images/Logo_de_Linkedin.png" alt="Logo de Linkedin"></a>
        </section>

        <small><p>Dernière mise à jour du site le 12 mars 2024.</p></small>
    </footer>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        footer {
            width: 96%;
            display: flex;
            justify-content: space-between;
            margin-top: 5%;
            padding: 0 2% 0.5% 2%;
        }

        section {
            width: 12%;
            display: flex;
            justify-content: space-between;
        }

        img {
            width: 92%;
        }

        p {
            font-family: "Assistant", sans-serif;
            font-weight: 300;
            font-size: calc(1em + 0.2vw);
            margin: 0;
        }

        small {
            align-self: end;
        }

        a:hover {
            opacity: 0.5;
        }
    }

    @media screen and (max-width: 1023px) {
        footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 2%;
            padding-bottom: 1%;
        }

        section {
            width: 33%;
            display: flex;
            justify-content: space-between;
            
        }

        img {
            width: 36px;
        }

        a:active {
            opacity: 0.5;
        }

        p {
            font-family: "Assistant", sans-serif;
            font-weight: 300;
            font-size: 1.1em;
            margin: 0;
        }
    }

    @media screen and (max-width: 767px) {
        footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 4px;
        }

        section {
            width: 33%;
            display: flex;
            justify-content: space-between;
            
        }

        img {
            width: 24px;
        }

        a:active {
            opacity: 0.5;
        }

        p {
            font-family: "Assistant", sans-serif;
            font-weight: 300;
            font-size: 0.8em;
            margin: 0;
        }

    }
</style>