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
    /*@media screen and (min-width: 1200px) {
        header {
            width: 1690px;
            display: flex;
            justify-content: space-between;
            padding: 34px 0 34px 0;
            position: fixed;
            left: 112px;
            background: #FFBD80;
        }

        .r-l-title {
            text-decoration: none;
        }
    
        h1 {
            width: 218px;
            height: 30px;
            padding: 5px 2px 5px 2px;
            font-family: "Assistant", sans-serif;
            font-weight: 400;
            font-size: 1.62em;
            color: black;
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

        .elements-barnav {
            color: black;
            text-decoration: none;
        }

        .elements-barnav:hover {
            text-decoration: underline;
        }
    }*/

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