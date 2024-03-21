<template>
    <header>
        <a href="#" class="anchor-title"><h1>Jean-Claude Minot</h1></a>
        <nav>
            <ul>
                <li><a href="#about" class="elements-barnav" @click="addUnderline($event)">À propos</a></li>
                <li><a href="#cv" class="elements-barnav" @click="addUnderline($event)">Mon CV</a></li>
                <li><a href="#esp-com" class="elements-barnav" @click="addUnderline($event)">Espace commentaire</a></li>
                <li><a href="#figma" class="elements-barnav" @click="addUnderline($event)">Figma</a></li>
                <li><a href="#contact" class="elements-barnav" @click="addUnderline($event)">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    const addUnderline = (event) => {
        const elements = document.querySelectorAll('.elements-barnav');
        elements.forEach((element) => {
            element.classList.remove('underline');
        });
        event.target.classList.add('underline');
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
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

        .anchor-title:hover {
            text-decoration: none
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

        a {
            text-decoration: none;
            color: black;
        }

        .underline {
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }
    }
</style>