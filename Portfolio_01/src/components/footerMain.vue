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
    @media screen and (min-width: 1200px) {
        footer {
            display: flex;
            justify-content: space-between;
            margin-top: 80px;
            padding-bottom: 10px;
        }

        section {
            width: 184px;
            display: flex;
            justify-content: space-between;
        }

        p {
            font-family: "Assistant", sans-serif;
            font-weight: 300;
            margin: 0;
        }

        small {
            align-self: end;
        }

        a:hover {
            opacity: 0.5;
        }
    }

    @media screen and (min-width: 320px) {
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