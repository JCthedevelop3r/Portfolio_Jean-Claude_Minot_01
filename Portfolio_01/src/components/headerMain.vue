<template>
    <header>
        <a href="#"><h1>Jean-Claude Minot</h1></a>
        <nav>
            <ul>
                <a href="#about"><li>À propos</li></a>
                <a href="#cv"><li>Mon CV</li></a>
                <a href="#esp-com"><li>Espace commentaire</li></a>
                <a href="#figma"><li>Figma</li></a>
                <a href="#contact"><li>Contact</li></a>
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