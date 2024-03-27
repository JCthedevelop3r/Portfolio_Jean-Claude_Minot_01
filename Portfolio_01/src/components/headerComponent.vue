<script setup>
    import { RouterLink, RouterView } from 'vue-router';

    const showMenuBurger = () => {
        nav.classList.toggle("active");
    }

</script>

<template>
    <header>
        <nav id="nav" class="">
            <router-link to="/" class="r-l-title"><h1>Jean-Claude Minot</h1></router-link>
            <ul>
                <router-link class="elements-barnav" to="/"><li>À propos</li></router-link>
                <router-link class="elements-barnav" to="/"><li>Mon CV</li></router-link>
                <router-link class="elements-barnav" to="/"><li>Espace commentaire</li></router-link>
                <router-link class="elements-barnav" to="/"><li>Figma</li></router-link>
                <router-link class="elements-barnav" to="/"><li>Contact</li></router-link>
            </ul>
            <div id="icons" @click="showMenuBurger"></div>
        </nav>
    </header>
</template>

<style scoped>
    @media screen and (min-width: 1024px) {
        header {
            width: 96%;
            display: flex;
            padding: 0% 2% 0% 2%;
            position: fixed;
            top: 0;
            background: #FFBD80;
        }

        nav {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        h1 {
            padding: 0;
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: calc(1em + 1.1vw);
        }

        .r-l-title {
            align-self: center;
        }

        .anchor-title:hover {
            text-decoration: none
        }

        ul {
            width: 60%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            font-family: "Assistant", sans-serif;
            font-weight: 300;
            font-size: calc(0.8em + 0.7vw);
            padding-left: 0;
        }

        a {
            text-decoration: none;
            color: black;
        }

        .underline {
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }

        #icons {
            display: none;
        }
    }

    @media screen and (max-width: 1023px) {
        header {
            position: sticky;
            top: 0px;
            background: #FFBD80;
        }

        nav {
            display: flex;
            justify-content: space-between;
            padding: 3%;
        }

        h1 {
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: 1.5em;
            color: black;
        }

        ul {
            width: 100%;
            padding: 5% 0 0 0;
            margin: 0;
            flex-direction: column;
            display: flex;
            position: fixed;
            left: -100%;
            top: 6%;
            list-style-type: none;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: 1.8em;
            padding-left: 0;
            text-transform: uppercase;
            text-align: center;
            transition: 0.25s;
            background: #FFBD80;
        }
        
        nav.active ul {
            left: 0;
        }

        li {
            width: 100%;
            padding: 8px 0 20px 0;
        }

        li:active {
            background: #FFD7B1;
            color: white;
        }

        #icons {
            display: block;
            cursor: pointer;
            align-self: center;
        }

        #icons:before {
            content: "\2630";
        }
        
        .active #icons:before {
            content: "\2715";
        }

    }

    @media screen and (max-width: 767px) {
        header {
            width: 100%;
            position: sticky;
            top: 0px;
            background: #FFBD80;
        }
        nav {
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }

        h1 {
            margin: 0;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: 1.25em;
            color: black;
        }

        .anchor-title {
            text-decoration: none;
        }

        a {
            text-decoration: none;
            color: black;
            position: relative;
            top: 3px;
        }

        a:active {
            color: white;
        }

        ul {
            width: 100%;
            padding: 10px 0 0 0;
            margin: 0;
            flex-direction: column;
            display: flex;
            position: fixed;
            left: -100%;
            top: 5%;
            list-style-type: none;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: 1.2em;
            padding-left: 0;
            text-transform: uppercase;
            text-align: center;
            transition: 0.25s;
            background: #FFBD80;
        }
        
        nav.active ul {
            left: 0;
        }

        li {
            width: 100%;
            padding-bottom: 5px;
        }

        li:active {
            background: #FFD7B1;
        }

        #icons {
            display: block;
            cursor: pointer;
        }

        #icons:before {
            content: "\2630";
        }
        
        .active #icons:before {
            content: "\2715";
        }
    }
</style>