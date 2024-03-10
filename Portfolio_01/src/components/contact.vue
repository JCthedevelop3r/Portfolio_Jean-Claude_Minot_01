<script setup>

</script>

<template>
    <section class="section-parent">
        <h2>Contact</h2>
        <section class="sections-enfant-1">
            <h3>Adresses e-mail :</h3>
            <ul>
                <li>minotjeanclaude60@gmail.com</li>
                <li>tresor300.contact@gmail.com</li>
            </ul>
        </section>
        <section class="sections-enfant-2">
            <h3>Numéro de téléphone :</h3>
            <p>06.10.43.52.74</p>
        </section>
    </section>
</template>

<style scoped>
    .section-parent {
        width: 1680px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 80px;
        border-bottom: solid 1px black;
    }
    h2 {
        width: 153px;
        height: 65px;
        font-family: "Besley", serif;
        font-weight: 600;
        font-size: 2.36em;
        margin: 0;
        padding-top: 80px;
        padding-bottom: 80px;
        align-self: center;
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

    p {
        font-family: "Assistant", sans-serif;
        font-size: 1.5em;
        margin: 0;
        align-self: end;
        padding-left: 20px;
    }
    
    ul {
        list-style-type: square;
        margin: 0;
        position: relative;
        top: -3px;
    }
    li {
        font-family: "Assistant", sans-serif;
        font-size: 1.5em;
        margin: 0;
        padding: 0;
    }
</style>