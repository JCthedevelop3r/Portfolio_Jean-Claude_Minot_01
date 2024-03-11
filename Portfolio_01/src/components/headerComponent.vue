<script setup>
    import { RouterLink, RouterView } from 'vue-router';

    const handleClick = () => {
      // Logique supplémentaire si nécessaire

        return {
            handleClick
        };
    };
</script>

<template>
    <header>
        <router-link to="/"><h1>Jean-Claude Minot</h1></router-link>
        <nav>
            <ul>
                <a href="#about"><li>À propos</li></a>
                <router-link to="/"><li>Mon CV</li></router-link>
                <router-link to="/"><li>Espace commentaire</li></router-link>
                <router-link to="/"><li>Figma</li></router-link>
                <router-link to="/"><li>Contact</li></router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        width: 1690px;
        display: flex;
        justify-content: space-between;
        padding: 34px 0 34px 0;
        position: fixed;
        left: 112px;
        background: #FFBD80;
    }

    h1 {
        width: 218px;
        height: 30px;
        padding: 5px 2px 5px 2px;
        font-family: "Assistant", sans-serif;
        font-weight: 400;
        font-size: 1.62em;
    }

    ul {
        width: 669px;
        height: 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        font-family: "Assistant", sans-serif;
        font-weight: 300;
        font-size: 1.4em;
        padding-left: 0;
    }

</style>