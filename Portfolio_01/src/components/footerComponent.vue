<script setup>

</script>

<template>
    <footer>
        <section>
            <img src="../assets/Images/Logo_de_Github.png" alt="Logo de Github">
            <img src="../assets/Images/Logo_de_X.png" alt="Logo de X, ex-Twitter">
            <img src="../assets/Images/Logo_de_Linkedin.png" alt="Logo de Linkedin">
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