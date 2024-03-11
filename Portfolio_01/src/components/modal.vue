<script setup>
    const props = defineProps ({
        titre: String,
        sousTitre1: String,
        objectifs: String,
        sousTitre2: String,
        date: String,
        sousTitre3: String,
        technologies: String,
        sousTitre4: String,
        voirProjet: String,
        dateTime: String,
        lienProjet: String,

    })
    
</script>

<template>
    <div class="modal-container">
        <slot name="overlay"></slot>
            <div class="modal">
                <slot name="button"></slot>
                <h2>{{ titre }}</h2>
                <ul>
                     <li><h3>{{ sousTitre1 }}</h3>{{ objectifs }}</li>
                     <li><h3>{{ sousTitre2 }}</h3> <time :datetime="dateTime">{{ date }}</time>.</li>
                     <li><h3>{{ sousTitre3 }}</h3>{{ technologies }}</li>
                     <li><h3>{{ sousTitre4 }}</h3> <a :href="lienProjet" target="_blank">{{ voirProjet }}</a></li>
                </ul>

            </div>
        
    </div>
</template>

<style>
    .modal-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    } 

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 544px;
        height: 250px;
        position: absolute;
        top: 25%;
        left: 34%;
        background: #FFBD80;
        border-style: double;
        color: black;
        padding: 20px;
    }

    button {
        width: 35px;
        position: absolute;
        left: 550px;
        top: -1px;
        background-color: #FFBD80;
        border: solid 1px black;
    }

    h2 {
        font-family: 'Besley', 'serif';
        font-weight: 600;
        margin: 0;
    }

    ul {
        line-height: 2;
        font-family: 'Assistant', 'sans-serif';
        font-weight: 400;
        list-style-type: none;
        margin-top: 20px;
    }

    h3 {
        display: inline-block;
        font-weight: 600;
        font-size: 1em;
        margin: 0;
    }
</style>