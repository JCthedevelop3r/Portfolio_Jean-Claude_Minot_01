<script setup>

</script>

<template>
    <footer>
        <section>
            <a href="https://github.com/" target="_blank"><img src="../assets/Images/Logo_de_Github.png" alt="Logo de Github"></a>
            <a href="https://twitter.com/JCthedevelop3r" target="_blank"><img src="../assets/Images/Logo_de_X.png" alt="Logo de X, ex-Twitter"></a>
            <a href="https://www.linkedin.com/in/jean-claude-minot-a894b6210/" target="_blank"><img src="../assets/Images/Logo_de_Linkedin.png" alt="Logo de Linkedin"></a>
        </section>

        <small><p>Dernière mise à jour du site le xx mars 2024.</p></small>
    </footer>
</template>

<style scoped>
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
</style>